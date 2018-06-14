/*globals customizeTwitterWidget,customizeTwitterWidgetJS,console,twttr*/
var validateInterval;
function addStyles() {
    "use strict";
    var $newsAndTips = $('#newsAndTips'), options;
    $newsAndTips.hide();
    $newsAndTips.parent().append($('.loading'));
    if (1 === $('iframe.twitter-timeline').length) {
        options = {
            "url": "Static/Styles/twitter.css"
        };
        customizeTwitterWidget(options);
        options = {
            "url": "Static/Scripts/jquery-2.1.4.min.js"
        };
        customizeTwitterWidgetJS(options);

        options = {
            "url": "Static/Scripts/twitter.js"
        };
        customizeTwitterWidgetJS(options);

        setTimeout(function () { $('.loading').remove(); $newsAndTips.show(); }, 2500);
    } else {
        setTimeout(addStyles, 500);
    }
}

function twitterWidget() {
    $('#newsAndTips').html('<a class="twitter-timeline" href="https://twitter.com/maqconsulting" data-dnt="true" data-link-color="#8e1d08" data-widget-id="641565407459983360" data-chrome="noheader nofooter noscrollbar transparent noborders" data-tweet-limit="4" data-aria-polite="assertive"></a>');
    //Twitter widget code
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "Static/Scripts/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
    addStyles();
    console.log('main page loaded');

    validateInterval = setInterval(function () {
        if (0 !== $('#newsAndTips iframe').length) {
            console.log('widget loaded ' + $('#newsAndTips iframe').length);
            clearInterval(validateInterval);

            setTimeout(function () {
                if (0 === $('#newsAndTips iframe').length) {
                    twitterWidget();
                }
            }, 1000);
        } else {
            $('#newsAndTips').html('<a class="twitter-timeline" href="https://twitter.com/maqconsulting" data-dnt="true" data-link-color="#8e1d08" data-widget-id="641565407459983360" data-chrome="noheader nofooter noscrollbar transparent noborders" data-tweet-limit="4" data-aria-polite="assertive"></a>');
            console.log('reload widget');
            twttr.widgets.load();
            addStyles();
        }
    }, 1000);
}

$(document).ready(function () {
    "use strict";
    twitterWidget();
});
