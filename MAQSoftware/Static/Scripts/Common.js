"use strict";
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.href);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

Date.prototype.format = function () {
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();    
    return sValue;
};
$(document).ready(function () {
    $("#SiteNavigation > a").click(function (event) {
        event.stopPropagation();        
        if ($(".MobileNavIcon").css("display") !== "none") {
            if ($(this).hasClass("HaveSubNav")) {
                $(this).next(".SecondlevelNav").slideToggle(500);
                return false;
            } else {
                return true;
            }            
        } else {
            return true;
        }
    });
    $(".MobileNavIcon").click(function () {
        $("#SiteNavigation").slideToggle(500);
    });        
});