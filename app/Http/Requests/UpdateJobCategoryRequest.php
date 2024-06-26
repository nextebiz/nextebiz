<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJobCategoryRequest extends FormRequest
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
            'title' => ['required'],
            'min' => ['required'],
            'max' => ['required'],
            'monthly' => ['required'],
            'quarterly' => ['required'],
            'picture' => ['nullable'],
            'small_description' => ['required'],
            'description' => ['required'],
            'enabled' => ['required'],
            'default_image_url' => ['nullable'],
            'gallerystyle' => ['required'],
            'galleryimages' => ['nullable'],
        ];
    }
    // protected function prepareForValidation(): void
    // {
    //     $this->merge([
    //         'description' => str_replace('', '', $this->request->get('description'))
    //     ]);
    // }
}
