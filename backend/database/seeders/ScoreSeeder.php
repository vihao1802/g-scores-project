<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use App\Models\Score;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    // Chunked bulk insert
    public function run(): void
    {
        $path = storage_path('app/diem_thi_thpt_2024.csv');

        if(!File::exists($path)) {
            echo "File csv not found";
            return;
        }

        $file = fopen($path, 'r');
        
        // Get header (title in csv)
        $header = fgetcsv($file,0,",");

        $batchSize = 1000;  // Insert 1000 rows at a time
        $batch = [];

        DB::beginTransaction();
        
        while (($row = fgetcsv($file,0,",")) !== false) {
           // Map header to row
            $data = array_combine($header, $row);
            
            // Convert empty strings to null for numeric fields
            $batch[] = [
                'sbd' => $data['sbd'],
                'toan' => !empty($data['toan']) ? $data['toan'] : null,
                'ngu_van' => !empty($data['ngu_van']) ? $data['ngu_van'] : null,
                'ngoai_ngu' => !empty($data['ngoai_ngu']) ? $data['ngoai_ngu'] : null,
                'vat_li' => !empty($data['vat_li']) ? $data['vat_li'] : null,
                'hoa_hoc' => !empty($data['hoa_hoc']) ? $data['hoa_hoc'] : null,
                'sinh_hoc' => !empty($data['sinh_hoc']) ? $data['sinh_hoc'] : null,
                'lich_su' => !empty($data['lich_su']) ? $data['lich_su'] : null,
                'dia_li' => !empty($data['dia_li']) ? $data['dia_li'] : null,
                'gdcd' => !empty($data['gdcd']) ? $data['gdcd'] : null,
                'ma_ngoai_ngu' => $data['ma_ngoai_ngu'] ?? null,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            if (count($batch) >= $batchSize) {
                Score::insert($batch);
                $batch = [];
            }
        }
        
        fclose($file);

        if (!empty($batch)) {
            Score::insert($batch);
        }

        DB::commit();

        echo "Seeding completed";
    }
}
