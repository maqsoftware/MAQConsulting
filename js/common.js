Date.prototype.format = function () {
    "use strict";
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
    return sValue;
};

function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(decodeURIComponent(location.href));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function redirectPowerBI() {
    window.location.href = "/#expertise/powerbi"; // Redirecting to Power BI Expertise
}

function setTabNavLinkBehavior() {
    $("#tabs .nav-link").click(function () {
        $("#tabs .nav-link").removeClass('active');
    });
}

function closeMenuIfOpen() {
    $("a, a *, section, section *, .footer, .footer *, #map, #map *").click(function () {
        if ($(this).hasClass("menu-has-sub") || $(this).hasClass("fa-angle-down") || $(this).hasClass("fa-angle-up")) {
            return; // return in case of sub menu header click
        }
        if ($(".nav-bar-icon").length && $(".nav-bar-icon").hasClass("active")) {
            $(".nav-bar-icon").removeClass("active");
            if ($(".nav-menu").length && $(".nav-menu").hasClass("active")) {
                $(".nav-menu").removeClass("active");
            }
            if ($(".nav-menu .nav-menu-inner .menu-opened").length) {
                $(".nav-menu .nav-menu-inner .menu-opened").removeClass("menu-opened");
            }
            if ($(".nav-menu .nav-menu-inner .fa-angle-up").length) {
                $(".nav-menu .nav-menu-inner .fa-angle-up").each(function () {
                    $(this).removeClass("fa-angle-up").addClass("fa-angle-down");
                })
            }
            if ($(".nav-menu .nav-menu-inner .sub-dropdown").length) {
                $(".nav-menu .nav-menu-inner .sub-dropdown").each(function () {
                    if ($(this).css('display') == 'block') {
                        $(this).css('display', 'none');
                    }
                })
            }
        }
    });
}
function isCareersPage() {
    if ($('#careers').length) {
        return true;
    }
    return false;
}
// Close menu if open


function updateTitle(viewName) {
    var sTitle = "MAQ Consulting | Hire Talent";
    if (typeof viewName !== "undefined") {
        switch (viewName.toLowerCase()) {
            case "hiretalent":
                sTitle = "MAQ Consulting | Hire Talent";
                break;
            case "expertise":
                sTitle = "MAQ Consulting | Our Expertise";
                break;
            case "findwork":
                sTitle = "MAQ Consulting | Find Work";
                break;
            case "benefits":
                sTitle = "MAQ Consulting | Benefits";
                break;
            case "contact":
                sTitle = "MAQ Consulting | Contact";
                break;
        }
    }
    $("title").text(sTitle);
    if (typeof viewName === "undefined") {
        viewName = ""
    }
    //if (typeof (history.pushState) != "undefined") {
    //    var obj = { Title: sTitle, Url: "/" + viewName };
    //    history.pushState(obj, obj.Title, obj.Url);
    //} else {
    //    console.log("Browser does not support HTML5.");
    //}
}

var oArray = ["hiretalent", "expertise", "findwork", "benefits", "contact"];
function navigate(sLoc) {
    var item;
    var iTopPosition = 0, sScrollElement = "body,html", iFlag = 1;
    if (typeof sLoc !== "undefined" && sLoc !== "") {
        oArray.forEach(function (item) {
            if (sLoc.indexOf(item) !== -1) {
                iTopPosition = $("#" + item).offset().top;
            }
        });
        $(sScrollElement).animate({ scrollTop: iTopPosition }, 750);
    }
}

$(window).scroll(function () {
    handleScroll();
});
function handleScroll() {
    var iTopPosition;
    $(".nav-menu-inner a").removeClass("active");
    updateTitle();
    var sLoc = location.href, sNewLocation;
    oArray.forEach(function (item) {
        iTopPosition = $("#" + item).offset().top - $("#header").height();
        if ($(window).scrollTop() > iTopPosition) {
            $(".nav-menu-inner a").removeClass("active");
            $(".nav-menu-inner ." + item).addClass("active");
            //if (sLoc !== sLoc + item) {
            //    location.href = sLoc + "" + item;
            //}

            updateTitle(item);
            //location.href = "/#" + item;
        }
    });
}

var oMapData =
            {
                address: "15446 Bel-Red Road, Second Floor,\nRedmond, WA 98052",
                lat: 47.633087,
                long: -122.133202
            };
function initMap() {
    showMap(oMapData.lat, oMapData.long, oMapData.address);
}

function showMap(Latitude, Longitude, address) {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var oLatLng = { lat: Latitude, lng: Longitude };
    var styledMapType = new google.maps.StyledMapType(
        [
  {
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#f5f5f5"
        }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#616161"
        }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#f5f5f5"
        }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#bdbdbd"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#eeeeee"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#757575"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#e5e5e5"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#ffffff"
        }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#757575"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#dadada"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#616161"
        }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#e5e5e5"
        }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#eeeeee"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#c9c9c9"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  }
        ],
        { name: 'Styled Map' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: oLatLng,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
        }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    oMarker = new google.maps.Marker({
        position: oLatLng,
        map: map,
        title: 'MAQ Software\n' + address,
        animation: google.maps.Animation.DROP,
        icon: "/img/map-marker.png",
        //label: 'Hello World!',
        draggable: true
    });
    //var infowindow = new google.maps.InfoWindow({
    //    content: '<h5 Style="text-transform: none;">MAQ Software</h5>' + address
    //});
    //google.maps.event.addListener(oMarker, 'click', function () {
    //    infowindow.open(map, oMarker);
    //});
    //infowindow.open(map, oMarker);

    //google.maps.Marker.prototype.setLabel = function (label) {
    //    this.label = new MarkerLabel({
    //        map: this.map,
    //        marker: this,
    //        text: label
    //    });
    //    this.label.bindTo('position', this, 'position');
    //};

    //var MarkerLabel = function (options) {
    //    this.setValues(options);
    //    this.span = document.createElement('span');
    //    this.span.className = 'map-marker-label';
    //};

    //MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
    //    onAdd: function () {
    //        this.getPanes().overlayImage.appendChild(this.span);
    //        var self = this;
    //        this.listeners = [
    //        google.maps.event.addListener(this, 'position_changed', function () { self.draw(); })];
    //    },
    //    draw: function () {
    //        var text = String(this.get('text'));
    //        var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
    //        this.span.innerHTML = text;
    //        this.span.style.left = (position.x - (markerSize.x / 2)) - (text.length * 3) + 10 + 'px';
    //        this.span.style.top = (position.y - markerSize.y + 40) + 'px';
    //    }
    //});
}

function JSON_CALLBACK() {
    alert("Yes");
}
/*globals getRouteTo,_gaq*/
var originalSearchInput,
    sendToFriendTemplate = "mailto:?subject=Job Opening: {0} &body=I came across this job on the internet and I thought that you or someone you know might be interested. {1}",
    catsoneUrl,
    linkType,
    jsonData;


$(function () {
    "use strict";
    loadPlugins();
    closeMenuIfOpen();
    $(".i-am-link").click(function () {
        var url = $(this).attr("data-url");
        navigate(url);
    });

    setWaterMarkText();
    originalSearchInput = document.getElementById("searchJobListing").title;
    initJob();
});

function initJob() {
    jsonData = {
        getListings: "https://maqconsulting.catsone.com/careers/index.php?m=portal&a=listings&sort=posted&sortDir=desc&page=1"
    };

    getJobListings(jsonData, successFunction);
    $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();

    $("#backToJobsBtn").bind("click", function () {
        // Get Job listings
        jsonData = {
            getListings: "https://maqconsulting.catsone.com/careers/index.php?m=portal&portalID=850"
        };

        getJobListings(jsonData, successFunction);
        $(".loadingIcon").show();
        $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
    });

    $(window).resize(function () {
        if ($(window).width() <= 674) {
            $(".detailsJobDescription").after($("#jobActionBtnContainer"));
        } else {
            $("#jobDetailPosted").after($("#jobActionBtnContainer"));
        }
    });
    $("#searchJobListing").keypress(function (e) {
        if (e.which === 13) {
            jsonData = {
                getListings: "https://maqconsulting.catsone.com/careers/index.php?search=" + $(this).val() + "&categories=%5B%5D"
            };
            getJobListings(jsonData, successFunction);
            $(".loadingIcon").show();
            $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
            return false;
        }
    });
    $("#searchJobListing").bind("focus", function () {
        $(this).removeClass("helpText");
        $(this).val("");
    });
    $("#searchJobListing").bind("blur", function () {
        if ($(this).val() === "") {
            $(this).val(originalSearchInput);
            $(this).title = originalSearchInput;
            $(this).addClass("helpText");
        }
    });

    $("#sendToFriendBtn").click(function () {
        window.location = sendToFriendTemplate;
        _gaq.push(['_trackEvent', 'Send to friend', 'Click', 'On Send to friend Button click']);
    });
}
// Set the watermark text on search input
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
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search.source, 'g'), replacement);
};

function getJobListings(dataParams, successCallback) {

    //$.get(jsonData, function (data) {
    //    debugger;
    //    $(data).find("channel").find("item").each(function () { // or "item" or whatever suits your feed
    //        var el = $(this);

    //        console.log("------------------------");
    //        console.log("title      : " + el.find("title").text());
    //        console.log("author     : " + el.find("author").text());
    //        console.log("description: " + el.find("description").text());
    //    });
    //});
    //$.get(jsonData, function (data) {
    //    debugger;
    //    var $xml = $(data);
    //    $xml.find("item").each(function () {
    //        var $this = $(this),
    //            item = {
    //                title: $this.find("title").text(),
    //                link: $this.find("link").text(),
    //                description: $this.find("description").text(),
    //                pubDate: $this.find("pubDate").text(),
    //                author: $this.find("author").text()
    //            }
    //        //Do something with item here...
    //    });
    //});

    // using XMLHttpRequest
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", jsonData, true);
    //xhr.onload = function () {
    //    debugger;
    //    console.log(xhr.responseText);
    //};
    //xhr.send();

    "use strict";
    if (-1 === dataParams.getListings.indexOf('https://maqconsulting.catsone.com/careers/undefined')) {
        catsoneUrl = dataParams.getListings;
    } else {
        catsoneUrl = 'https://maqconsulting.catsone.com/careers/index.php?m=portal&a=listings&sort=posted&sortDir=desc&page=' + $('.active.pageSelector > a:nth(0)').text();
    }
    linkType = dataParams.linkType;
    catsoneUrl = catsoneUrl.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from htmlstring where url="' + catsoneUrl + '"') + " and xpath='//body'&env=store://datatables.org/alltableswithkeys&format=html",
        type: 'GET',
        contentType: 'text/html; charset=UTF-8',
        dataType: 'jsonp',
        success: function (data) {
            data = data.results[0].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replaceAll('<result>', '').replaceAll('</result>', '').replaceAll('<body>', '').replaceAll('</body>', '').replaceAll(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replaceAll('src=\"/images/portal/rssIcon.png\"', '').replaceAll('src=\"/images/dialogPointer.gif\"', '').replaceAll('src=\"/images/datagrid/sortDesc.gif\"', '').replaceAll('src=\"/images/icons/magnifier_medium.png\"', '').replaceAll('src=\"/images/v3/poweredByCATS.png\"', '').replaceAll('magnifier_medium.png ', '');
            data = data.replace('https://www.maqconsulting.com/Static/Images/Inc500.png', ' ').replace('https://www.maqconsulting.com/Static/Images/header_doubleSquareEnding.png', ' ').replace(new RegExp('https://www.maqconsulting.com/Static/Images/facebook_large.png', 'g'), ' ').replace(new RegExp('https://maqconsulting.com/Static/Images/MAQConsulting_logo.png', 'g'), ' ').replace(new RegExp('https://www.maqconsulting.com/Static/Images/linkedin_large.png', 'g'), ' ').replace(new RegExp('https://www.maqconsulting.com/Static/Images/twitter_large.png', 'g'), ' ').replace(new RegExp('images/icons/magnifier_medium.png', 'g'), '');
            data = data.replace(new RegExp('https://www.maqconsulting.com/Static/Images/MAQConsulting_logo.png', 'g'), ' ');

            $("#jobListingContainer").append('<div class="hidden">' + data + '</div>');
            if ("pagination" === linkType) {
                $(".hidden").html($(".hidden #jobListingsContent"));
            } else if ("jobTitle" === linkType) {
                var htmlNode = $(".hidden #stepJobDetails").html();
                htmlNode = htmlNode.replace("<table", "<div").replace("</table>", "</div>").replace("<tbody", "<div").replace("</tbody>", "</div>").replace("<tr", "<div").replace("</tr>", "</div>").replace("<td", "<div").replace("</td>", "</div>").replace("<ul", "<ol").replace("</ul>", "</ol>").replace(("MSJobs@maqconsulting.com"), "<a class='mailLink' href='mailto:MSJobs@MAQConsulting.com'>MSJobs@MAQConsulting.com</a>").replace(("MSJobs@MAQConsulting.com"), "<a class='mailLink' href='mailto:MSJobs@MAQConsulting.com'>MSJobs@MAQConsulting.com</a>").replace("MSJobs@maqsoftware.com", "<a class='mailLink' href='mailto:MSJobs@maqsoftware.com'>MSJobs@maqsoftware.com</a>").replace(("msjobs@maqconsulting.com"), "<a class='mailLink' href='mailto:MSJobs@MAQConsulting.com'>MSJobs@MAQConsulting.com</a>");
                $(".hidden").html(htmlNode);
            } else {
                $(".hidden").html($(".hidden #jobListingsContent"));
            }
            successCallback($(".hidden").html());
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function successFunction(data) {
    "use strict";
    var iCount, title, value, html = '<ul>';
    $(".hidden").remove();
    $("#dumpData").html(data);
    $("#jobListingsData a.jobTitle, #jobListingsData a.jobTitleHot").each(function () {
        $(this).replaceWith("<span class='" + $(this).attr("class").replace("jobTitleHot", "jobTitle") + "' href='" + $(this).attr('href') + "'>" + $(this).text() + "</span>");
    });
    $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
    $(".loadingIcon").hide();
    if ($("#dumpData #jobListings").length) {
        $("#jobListingContainer").show();
        $("#jobListingsData").html(data);
        $("#jobListingsData a.jobTitle, #jobListingsData a.jobTitleHot").each(function () {
            $(this).replaceWith("<span class='" + $(this).attr("class").replace("jobTitleHot", "jobTitle") + "' href='" +$(this).attr('href') + "'>" +$(this).text() + "</span>");
        });
    } else if ($("#dumpData #jobDetails").length) {
        $("#jobDescriptionContainer").after($("#jobActionBtnContainer"));
        $("#jobDescriptionContainer").html(data).show();
        $("#jobDetailPosted").after($("#jobActionBtnContainer"));
        $("#jobActionBtnContainer").show();
        sendToFriendTemplate = sendToFriendTemplate.replace("{0}", $("#dumpData #jobTitle").html());
    }

    for (iCount = 0; iCount < $('.detailsJobDescription table:nth(0) tbody tr').length; iCount++) {
        title = $('.detailsJobDescription table:nth(0) tbody tr:nth(' + iCount + ') td:nth(0) strong').text();
        value = $('.detailsJobDescription table:nth(0) tbody tr:nth(' + iCount + ') td:nth(1)').text();
        if (title && value) {
            html += '<li><span class="jobHead">' + title + '</span> : <span> ' + value + '</span></li>';
        }
    }
    html += '</ul>';
    $('.detailsJobDescription table:nth(0)').parent().append(html);
    $('.detailsJobDescription table:nth(0)').remove();
    if (0 !== $('#jobActionBtnContainer > div:nth(2)').length) {
        $('#jobDetails').prepend($('#jobActionBtnContainer > div:nth(2)'));
    } else {
        $('#jobDetails').prepend("<div class='col-lg-12 col-xs-12'><a style='width:150px;' value='BACK TO JOBS' class='btn btn-md btn-black-line' id='backToJobsBtn'>Back to Jobs</a></div>");
        $("#backToJobsBtn").bind("click", function () {
            // Get Job listings
            jsonData = {
                getListings: "https://maqconsulting.catsone.com/careers/index.php?m=portal&portalID=850"
            };

            getJobListings(jsonData, successFunction);
            $(".loadingIcon").show();
            $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
        });
    }
    $(".pageSelector").bind("click", function (e) {
        e.preventDefault();
        jsonData = {
            getListings: "https://maqconsulting.catsone.com/careers/" + $(this).attr("href"),
            linkType: "pagination"
        };
        getJobListings(jsonData, successFunction);
        $(".loadingIcon").show();
        $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
    });

    $("#jobListings .rowEven, #jobListings .rowOdd").bind("click", function (e) {
        e.preventDefault();
        jsonData = {
            getListings: $(this).find(".jobTitle").attr("href"),
            linkType: "jobTitle"
        };
        getJobListings(jsonData, successFunction);
        sendToFriendTemplate = sendToFriendTemplate.replace("{1}", $(this).find(".jobTitle").attr("href"));
        $(".loadingIcon").show();
        $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
        $(".applyLink").attr('href', $(this).find(".jobTitle").attr("href").replace('details', 'apply') + "&portalID=850");
    });
    $(".pager li:first-child a").html("<i class='ion ion-arrow-left-b'></i>PREVIOUS");
    $(".pager li:last-child a").html("NEXT<i class='ion ion-arrow-right-b'>");
    $(".pager li a").addClass("btn-link-a");

    if ($(window).width() <= 674) {
        $(".detailsJobDescription").after($("#jobActionBtnContainer"));
    } else {
        $("#jobDetailPosted").after($("#jobActionBtnContainer"));
    }
}
function resetSearchBox() {
    "use strict";
    $("#searchJobListing").val("");
    $("#searchJobListing").val(originalSearchInput);
    $("#searchJobListing").title = originalSearchInput;
    $("#searchJobListing").addClass("helpText");
    jsonData = {
        getListings: "https://maqconsulting.catsone.com/careers/index.php?m=portal&a=listings&sort=posted&sortDir=desc&page=1"
    };
    $("#jobListingContainer, #jobDescriptionContainer, #jobActionBtnContainer").hide();
    $(".loadingIcon").show();
    getJobListings(jsonData, successFunction);
}