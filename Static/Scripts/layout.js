/*jslint nomen: true*/
/*jslint plusplus: true */
/*globals _gat,_getTracker,_trackPageview,unescape,location,parseInt,resetFields,setWaterMarkText*/

function showLink(linkID) {
    "use strict";
    $('.nav li').removeClass('selected');
    $('.nav li:nth-child(' + linkID + ')').addClass('selected');
}

function loadPage(pageName) {
    "use strict";
    $('#PageContainer').load(pageName + '.html');
    setTimeout(setWaterMarkText, 1000);
    $(document).scrollTop(0);
}

function resetMap() {
    "use strict";
    var hashVal = window.location.hash, type;
    if (-1 !== hashVal.toLowerCase().indexOf('#contactus'.toLowerCase())) {
        if (!$('#mapviewer').html() || "" === $('#mapviewer').html().trim()) {
            type = typeof resetFields;
            if ('undefined' === type) {
                setTimeout(resetMap, 2200);
                return;
            }
            setTimeout(resetFields, 2200);
            if (!$('#mapviewer').html() || "" === $('#mapviewer').html().trim()) {
                setTimeout(resetMap, 2200);
            }
        }
    }
}

function redirect() {
    "use strict";
    var hashVal = window.location.hash;
    if (-1 !== hashVal.toLowerCase().indexOf('#hiretalent'.toLowerCase())) {
        loadPage('HireTalent');
        showLink(1);
        document.title = 'MAQ Consulting | Hire Talent';
    } else if (-1 !== hashVal.toLowerCase().indexOf('#benefits'.toLowerCase())) {
        loadPage('Benefits');
        showLink(3);
        document.title = 'MAQ Consulting | Benefits';
    } else if (-1 !== hashVal.toLowerCase().indexOf('#contactus'.toLowerCase())) {
        loadPage('ContactUs');
        showLink(4);
        document.title = 'MAQ Consulting | Contact Us';
        resetMap();
    } else {
        loadPage('main');
        showLink(0);
        document.title = 'MAQ Consulting | Home';
    }
}

$(document).ready(function () {
    "use strict";
    redirect();

    window.onhashchange = function () {
        redirect();
    };
});

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

try {
    var pageTracker = _gat._getTracker("UA-7928102-2");
    pageTracker._trackPageview();
} catch (ignore) { }