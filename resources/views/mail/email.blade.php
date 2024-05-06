<x-mail::message>
    # Dear {{ $name }}
<div>
    {!! $content !!}
</div>
<div style="margin-bottom: 50px;"></div>


Best Regards,<br>

<p>
<strong><span>Support Team</span></strong>
<span style="margin-right: 10px; margin-left: 10px;">|</span>
<span>{{ config('app.company') }}</span>
</p>
<p>
<span>
Phone/WhatsApp:
</span>
<span>
{{ config('app.whatsapp') }}, {{ config('app.whatsapp2') }}
</span>
</p>

<p>
<span>{{ config('app.address') }}</span>
</p>

<div style="display: flex;">

<span style="margin-right: 5px;">Visit</span>
<x-mail::link :url="config('app.url')">
{{ config('app.company') }}
</x-mail::link>
</div>

</x-mail::message>
