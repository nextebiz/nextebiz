@extends('layouts.layout')

@section('content')


    <div class="container m-auto my-[50px] ckclass myck">

        <div class="block md:flex justify-between border-b border-b-orange-500 pb-3 mb-3">
            <h1 class="mb-3 ">{{ $jobpost->title }}</h1>

            <div class="flex justify-end ">
                <a href="https://www.facebook.com/sharer.php?u={{ Request::url() }}" target="_blank">
                    <div class="text-xs text-gray-800 shadow-md rounded-lg text-center mr-3 border px-2 pt-3 hover:text-orange-500 hover:fill-orange-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[25px] h-[25px]  m-auto">
                            <path
                                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                        <div class="my-1">Facebook</div>
                    </div>
                </a>


                <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ Request::url() }}" target="_blank">
                    <div class="text-xs text-gray-800 shadow-md rounded-lg text-center mr-3 border px-2 pt-3 hover:text-orange-500 hover:fill-orange-500 transition-all">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px] m-auto">
                            <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>

                        <div class="my-1">LinkedIn</div>
                    </div>
                </a>

                <a href="https://twitter.com/intent/tweet?url={{ Request::url() }}&via={{ $jobpost->title }}" target="_blank">

                    <div class="text-xs text-gray-800 shadow-md rounded-lg text-center mr-3 border px-2 pt-3 hover:text-orange-500 hover:fill-orange-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]  m-auto">
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                        </svg>
                        <div class="my-1">Twitter</div>
                    </div>
                </a>

                <a href="https://www.reddit.com/submit?url={{ Request::url() }}&title={{ $jobpost->title }}" target="_blank">
                    <div class="text-xs text-gray-800 shadow-md rounded-lg text-center mr-3 border px-2 pt-3 hover:text-orange-500 hover:fill-orange-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[25px] h-[25px] m-auto">
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z" />
                        </svg>
                        <div class="my-1">Reddit</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="mb-3"><span class="font-bold">Category:</span> {{ $category }}</div>
        <div class="mb-3">
            <span class="font-bold">Job Type: </span>{{ ($jobpost->job_type == 'fulltime' ? 'Full-Time' : $jobpost->job_type == 'parttime') ? 'Part-Time' : 'Contract' }}
        </div>
        <div class="mb-3">
            <span class="font-bold">Required Candidates: </span>{{ $jobpost->candidates_required }}
        </div>
        <div class="mb-3">
            <span class="font-bold">Working Hours: </span>
            @if ($jobpost->working_hours === '9to5')
                9:00 a.m. to 5:00 p.m.
            @elseif($jobpost->working_hours === '2to10')
                2:00 p.m. to 10:00 p.m.
            @elseif ($jobpost->working_hours === '6to3')
                6:00 p.m. to 3:00 a.m.
            @else
                Flexible hours
            @endif
        </div>
        <div class="mb-3 border-b border-b-gray-200 pb-3">

            <div class="flex items-center mr-3">
                <span class="font-bold mr-3 ">Cities:</span>
                @foreach ($jobpost->cities as $city)
                    <div class="border border-gray-200 bg-gray-100 px-3 py-1 mr-3">
                        {{ $city }}
                    </div>
                @endforeach
            </div>

        </div>
        <div class="mb-3 border-b border-b-gray-200 pb-3">{!! $jobpost->description !!}</div>

        <div class="flex items-center justify-between">
            <div class="my-[20px]">
                <a href="/jobs/{{ $jobpost->slug }}" class="bg-orange-500 px-5 py-2 text-white">Apply Now</a>
            </div>

        </div>
    </div>
@endsection

@section('title', $jobpost->title)
@section('description', $jobpost->description)
@section('created_at', $jobpost->created_at)
@section('image_url', '/assets/img/nextebiz-black.svg')
