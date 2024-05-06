@props(['url', 'color' => 'primary', 'align' => 'left'])
<div>
<a href="{{ $url }}" class="" target="_blank" rel="noopener">{{ $slot }}</a>
</div>
