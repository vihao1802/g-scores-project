<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScoreController;

Route::prefix('scores')->group(function () {
    Route::get('/total-students', [ScoreController::class, 'totalStudents']);
    Route::get('/report-by-subject/{subject}', [ScoreController::class, 'reportBySubject']);
    Route::get('/report-by-all-subjects', [ScoreController::class, 'reportByAllSubjects']);
    Route::get('/list-top-students', [ScoreController::class, 'listTopStudents']);
    Route::get('/{sbd}', [ScoreController::class, 'findBySBD']);
});