<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePortfolioRequest extends FormRequest
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
            "title" => ['required'],
            "portfolio_category_id" => ['required'],
            'pictures' => ['nullable', 'max:500000'],
            'default_media_id'=>['nullable'],
            // "small_description" => ['required'],
            // "description" => ['required'],
            "enabled" => ['required'],
        ];
    }
}
