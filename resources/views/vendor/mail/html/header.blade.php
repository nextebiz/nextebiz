@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Laravel')
                <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
            @else
              <div>
                <img src="https://nextebiz.com/assets/img/nextebiz-black.svg" style="width: 200px;"/>

              </div>
            @endif
        </a>
    </td>
</tr>
