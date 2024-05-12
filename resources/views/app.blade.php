<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="description" content="{{ config('app.seo_description') }}">
    <meta name="keywords" content="{{ config('app.seo_keywords') }}">

    <meta property='article:published_time' content="{{ config('app.seo_publis_date') }}">
    <meta property='article:section' content='software' />

    <meta property="og:description" content="{{ config('app.seo_description') }}">
    <meta property="og:title" content="{{ config('app.seo_title') }}">
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en-us" />
    <meta property="og:locale:alternate" content="en-us" />
    <meta property="og:site_name" content="{{ config('app.seo_title') }}" />

    <meta property="og:image" content="{{ config('app.seo_image') }}">
    <meta property="og:image:url" content="{{ config('app.seo_image') }}">
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:alt" content="{{ config('app.seo_title') }}">


    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{{ config('app.seo_description') }}">
    <meta name="twitter:site" content="{{ config('app.seo_description') }}" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


    <meta name="viewport" content="width=device-width, initial-scale=1">
	{{-- <meta http-equiv="Content-Security-Policy" content="style-src 'unsafe-inline';"> --}}

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="google-site-verification" content="i0-7C_MTastNvLC9vZWEx_gQlPQ6QDgUMk9IN4RBQQ4" />
    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', 'resources/scss/app.scss', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="ckclass antialiased">

    @inertia

</body>

</html>
