/*jslint plusplus: true */
function formatNews() {
    "use strict";
    try {
        var iLength = $('.e-entry-title').length, iCount, value, href;
        if (0 === iLength) {
            window.setTimeout(formatNews, 100);
        }
        for (iCount = 0; iCount < iLength; iCount++) {
            value = $('.e-entry-title:nth(' + iCount + ')').html();
            console.log(value);
            value = value.substring(0, value.indexOf('<a '));
            href = $('.e-entry-title:nth(' + iCount + ') a').attr('href');
            if (value) {
                $('.e-entry-title:nth(' + iCount + ')').html('<a class="newsContent" href="' + href + '"> ' + value + ' </a>');
            }
        }
        $('.SandboxRoot').show();
    } catch (ex) {
        setTimeout(formatNews, 100);
    }
}
formatNews();