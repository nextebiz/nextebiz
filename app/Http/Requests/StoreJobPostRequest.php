<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'job_category_id' => ['required', 'gt:0'],
            'title' => ['required'],
            'featured' => ['required'],
            'description' => ['required'],
            'cities' => ['required'],
            'job_type' => ['required'],
            'working_hours' => ['required'],
            'candidates_required' => ['required']
        ];
    }
}
