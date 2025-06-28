<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Score;

class ScoreController extends Controller
{
    public function findBySBD($sbd) {
        if (!$sbd) {
            return $this->error("SBD is required", 400);
        }

        $score = Score::where('sbd', $sbd)->first();

        if ($score) 
            return $this->success($score);
        else 
            return $this->error("Score not found", 404);
    }

    public function reportBySubject($subject) {
        $startTime = microtime(true);
        
        $model = new Score();
        $subjects = $model->getSubjects();

        if(in_array($subject, $subjects)) {
            // Method 1: Use ORM 
            /* $result = [
                'level1' => Score::where($subject, '>=', 8)->count(),
                'level2' => Score::where($subject, '>=', 6)->where($subject, '<', 8)->count(),
                'level3' => Score::where($subject, '>=', 4)->where($subject, '<', 6)->count(),
                'level4' => Score::where($subject, '<', 4)->count(),
                'executionTime' => round(microtime(true) - $startTime, 4)
            ]; */

            // Method 2: Use ORM with raw SQL (more efficient)
            $result = Score::selectRaw("
                COUNT(*) FILTER (WHERE {$subject} >=8) AS level1,
                COUNT(*) FILTER (WHERE {$subject} >=6 AND {$subject}<8) AS level2,
                COUNT(*) FILTER (WHERE {$subject} >=4 AND {$subject}<6) AS level3,
                COUNT(*) FILTER (WHERE {$subject}<4) AS level4
            ")->first();
            $result['executionTime'] = round(microtime(true) - $startTime, 4);

            return $this->success($result);
        } else {
            return $this->error("Subject not found", 400);
        }  
    }

    public function reportByAllSubjects()
    {
        $startTime = microtime(true);
    
        $model = new Score();
        $subjects = $model->getSubjects();
    
        $selectParts = [];
        foreach ($subjects as $subject) {
            $selectParts[] = "COUNT(*) FILTER (WHERE {$subject} >= 8) AS {$subject}_level1";
            $selectParts[] = "COUNT(*) FILTER (WHERE {$subject} >= 6 AND {$subject} < 8) AS {$subject}_level2";
            $selectParts[] = "COUNT(*) FILTER (WHERE {$subject} >= 4 AND {$subject} < 6) AS {$subject}_level3";
            $selectParts[] = "COUNT(*) FILTER (WHERE {$subject} < 4) AS {$subject}_level4";
        }

        $selectRaw = implode(", ", $selectParts);
    
        $data = DB::table('scores')->selectRaw($selectRaw)->first();
    
        // group level by subject
        $formatted = [];
        foreach ($subjects as $subject) {
            $formatted[$subject] = [
                'level1' => $data->{$subject.'_level1'},
                'level2' => $data->{$subject.'_level2'},
                'level3' => $data->{$subject.'_level3'},
                'level4' => $data->{$subject.'_level4'},
            ];
        }
    
        $executionTime = round(microtime(true) - $startTime, 4);
    
        $result = [
            'statistics' => $formatted,
            'executionTime' => $executionTime,
        ];
    
        return $this->success($result, 'Score statistics generated successfully');
    }

    // List top students of group A including (math, physics, chemistry)
    public function listTopStudents(Request $request)
    {   
        $limit = $request->input('limit', 10);
        $topStudents = Score::select(
            'sbd',
            'toan',
            'vat_li',
            'hoa_hoc'
        )
        ->selectRaw('
            (toan + vat_li + hoa_hoc) as total_score
        ')
        ->whereNotNull('toan')
        ->whereNotNull('vat_li')
        ->whereNotNull('hoa_hoc')
        ->orderByDesc('total_score')
        ->limit($limit)
        ->get();

        return $this->success($topStudents);
    }

    public function totalStudents()
    {
        $totalStudents = Score::count();
        return $this->success($totalStudents);
    }
}
