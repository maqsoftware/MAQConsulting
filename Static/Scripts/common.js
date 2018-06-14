/*globals getRouteTo*/
//set the watermark text on search input
function setWaterMarkText() {
    "use strict";
    $('.maqwatermark').each(function () {
        if (($(this)[0].value === "" || $(this)[0].value === $(this)[0].title)) {
            $(this).val($(this)[0].title);
        }
        $(this).bind("focus", function () { watermarktext_focus($(this)[0]); });
        $(this).bind("click", function () { watermarktext_focus($(this)[0]); });
        $(this).bind("blur", function () { watermarktext_blur($(this)[0]); });
    });
}

$(document).ready(function () {
    "use strict";
    setWaterMarkText();
});

var originalInput;
function searchJobs() {
    "use strict";

    if ($('input').hasClass("maqwatermark")) {
        return; //no action if no input provided
    }
    var searchContent = document.getElementById('input').value;
    window.location.replace('http://maqconsulting.catsone.com/careers/index.php?search=' + encodeURIComponent(searchContent));
}

//remove watermark on focus
function watermarktext_focus(obj) {
    "use strict";
    $(obj).removeClass("maqwatermark");
    if (obj.value === obj.title) {
        obj.value = "";
    }
    $(obj).removeClass("helpText");
}

//set original watermark on blur
function watermarktext_blur(obj) {
    "use strict";
    if (obj.value === "") {
        obj.value = originalInput;
        obj.title = originalInput;
        //obj.value = obj.title;
        $(obj).addClass("maqwatermark");
        $(obj).removeClass("textBoxFocus");
        $(obj).addClass("helpText");
        
        $('#input').val('');
        $('#input').attr('placeholder', $('#input').attr('value'));
    }
}

//get the loactions for redmond on load
function getLocation() {
    "use strict";
    document.getElementById('directions').innerHTML = "";
    var latitude = 47.633087,
        longitude = -122.133202,
        input = document.getElementById("input").value;
    $('#input').attr('title', input);
    getRouteTo(latitude, longitude, input);
}

/*hover effect on the direction buttons*/
function hoverEffect(element, flag) {
    "use strict";
    if (flag) {
        $(element).css({ "background-color": "#fdbc34" });
    } else {
        $(element).css({ "background-color": "#23adb5" });
    }
}

//handler to handle the enter key press on search 
function handleEnter(args) {
    "use strict";
    if (args) {
        var e = window.event || args,
            keyunicode = e.charCode || e.keyCode;
        if (keyunicode === 13) {
            searchJobs();
        }
    }
}

//handler to show directions on enter
function handleEnter_direction(args) {
    "use strict";
    if (args) {
        var e = window.event || args,
            keyunicode = e.charCode || e.keyCode;
        if (keyunicode === 13) {
            $('#show').focus();
        }
    }
}