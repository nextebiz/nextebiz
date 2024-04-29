<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">

    <meta property='article:published_time' content="@yield('created_at')">
    <meta property='article:section' content='event' />

    <meta property="og:description" content="@yield('description')">
    <meta property="og:title" content="@yield('title')">
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en-us" />
    <meta property="og:locale:alternate" content="en-us" />
    <meta property="og:site_name" content="{{ config('app.name') }}" />

    <meta property="og:image" content="{{ config('app.url') }}/assets/img/jobs.jpg">
    <meta property="og:image:url" content="{{ config('app.url') }}/assets/img/jobs.jpg">
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />


    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="@yield('title')">
    <meta name="twitter:site" content="@nextebiz" />

    @vite(['resources/scss/app.scss'])

</head>

<body>

    @include('layouts.nav')

    @yield('content')

    @include('layouts.footer')


</body>

</html>
