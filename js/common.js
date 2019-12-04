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
    window.location.href = "/#expertise/powerbi";
}

function setTabNavLinkBehavior() {
    $("#tabs .nav-link").click(function () {
        $("#tabs .nav-link").removeClass('active');
    });
}

function closeMenuIfOpen() {
    $("a, a *, section, section *, .footer, .footer *, #map, #map *").click(function () {
        if ($(this).hasClass("menu-has-sub") || $(this).hasClass("fa-angle-down") || $(this).hasClass("fa-angle-up")) {
            return;
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


            updateTitle(item);
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


    var map = new google.maps.Map(document.getElementById('map'), {
        center: oLatLng,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    oMarker = new google.maps.Marker({
        position: oLatLng,
        map: map,
        title: 'MAQ Software\n' + address,
        animation: google.maps.Animation.DROP,
        icon: "/img/map-marker.png",
        draggable: true
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<h5 Style="text-transform: none;">MAQ Software</h5>' + address
    });
    google.maps.event.addListener(oMarker, 'click', function () {
        infowindow.open(map, oMarker);
    });
    infowindow.open(map, oMarker);

    google.maps.Marker.prototype.setLabel = function (label) {
        this.label = new MarkerLabel({
            map: this.map,
            marker: this,
            text: label
        });
        this.label.bindTo('position', this, 'position');
    };

    var MarkerLabel = function (options) {
        this.setValues(options);
        this.span = document.createElement('span');
        this.span.className = 'map-marker-label';
    };

    MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
        onAdd: function () {
            this.getPanes().overlayImage.appendChild(this.span);
            var self = this;
            this.listeners = [
            google.maps.event.addListener(this, 'position_changed', function () { self.draw(); })];
        },
        draw: function () {
            var text = String(this.get('text'));
            var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
            this.span.innerHTML = text;
            this.span.style.left = (position.x - (markerSize.x / 2)) - (text.length * 3) + 10 + 'px';
            this.span.style.top = (position.y - markerSize.y + 40) + 'px';
        }
    });
}

function JSON_CALLBACK() {
    alert("Yes");
}

$(function () {
    "use strict";
    loadPlugins();
    closeMenuIfOpen();
    $(".i-am-link").click(function () {
        var url = $(this).attr("data-url");
        navigate(url);
    });

    setWaterMarkText();
});

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

function RenderJobs() {

    $("#reset").hide();
    $('#resetSearch').hide();
    $('#jobDescriptionContainer').hide();
    $(".loadingIcon").hide();
    $("#jobDescriptionContainer").hide();
    $(".loadingIcon").show();


    var noofentries = Number(document.getElementById("dumptable").getElementsByTagName("tr")[0].getElementsByTagName("td")[4].textContent);
    var title_raw, title, Location, date_raw, date, url, i, job_id;
    var table = '';
    for (i = 0; i < noofentries; i++) {
        url = document.getElementById("dumptable").getElementsByTagName("tr")[i].getElementsByTagName("td")[0].textContent;
        date_raw = document.getElementById("dumptable").getElementsByTagName("tr")[i].getElementsByTagName("td")[2].textContent;
        date = $.datepicker.formatDate("M d", new Date(date_raw));
        title_raw = document.getElementById("dumptable").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].textContent;
        [title, Location] = title_raw.split('-');

        const splitURL = new URL(url).pathname.split("/");
        job_id = splitURL[splitURL.length - 2].split("-")[0];
        table = table + '<tr><td>' + job_id + '</td><td>' + date + '</td><td onClick=\"Redirect(\'' + job_id + '\')\"  class = \"row_pointer\"> ' + title + '</td><td>' + Location + '</td></tr>';

    }
    $("#tbdy").append(table);
    $('#dttable').DataTable({
        "destroy": true
        , "ordering": false
    });
    $(".loadingIcon").hide();
    $(".jobListingContainer").show();
    $("#jobListingsData").show();
}


function Redirect(job_id) {

    var sendToFriendTemplate = 'mailto:?subject=Job Opening: {0} &body=I came across this job on the internet and I thought that you or someone you know might be interested. %0D%0A %0D%0A{1}',

    applyJobTemplate = "mailto:msjobs@maqconsulting.com?subject=Job Opening: {0} %0D%0A &body=Hello All, %0D%0A %0D%0APlease find below required details:%0D%0AFirst Name:%0D%0ALast Name:%0D%0AEmail:%0D%0AMobile No:%0D%0A %0D%0A*Please attach your latest Resume with this Email.";

    $("#jobListingsData").hide();
    $(".loadingIcon").show();

    var noofentries = Number(document.getElementById("dumpdescription").getElementsByTagName("ul")[0].getElementsByClassName("div_entries")[0].getElementsByTagName("span")[1].textContent);
    var url_string, url, c;
    for (i = 0; i < noofentries; i++) {

        url_string = document.getElementById("dumpdescription").getElementsByTagName("ul")[0].getElementsByClassName("div_entries")[i].getElementsByClassName("url")[0].textContent;
        const splitURL = new URL(url_string).pathname.split("/");
        c = splitURL[splitURL.length - 2].split("-")[0];
        url_string = url_string.toString();

        if (c == job_id) {
            document.getElementById("jobDescriptionContainer").innerHTML = "";
            document.getElementById("jobDescriptionContainer").innerHTML = document.getElementById("dumpdescription").getElementsByTagName("ul")[0].getElementsByClassName("div_entries")[i].innerHTML;
            var sJobTitle = document.getElementById("jobDescriptionContainer").getElementsByTagName("h3")[0].innerHTML;
            sendToFriendTemplate = sendToFriendTemplate.replace("{0}", sJobTitle);
            url_string = encodeURIComponent(url_string);
            sendToFriendTemplate = sendToFriendTemplate.replace("{1}", "How to Apply: Please email your resume to MAQ Consulting at msjobs@maqconsulting.com with the subject of " + sJobTitle + "%0D%0A %0D%0A Link: " + url_string);
            applyJobTemplate = applyJobTemplate.replace("{0}", sJobTitle);
            document.getElementById("applyJobBtn").parentElement.setAttribute("href", applyJobTemplate);

            document.getElementById("sendToFriendBtn").setAttribute("href", sendToFriendTemplate);
            break;
        }
    }

    $(".loadingIcon").hide();
    $("#jobDescriptionContainer").show();
    $('.tohide').hide();
    $("#url_span").hide();
    $("#resetSearch").show();
    $("#reset").show();


}


function back() {
    RenderJobs();
}

$(document).ready(function () {
    $("#reset").hide();
    $("#resetSearch").hide();
    $(".loadingIcon").show();
    $("#jobDescriptionContainer").hide();

    $("#dumptable").rss("https://maqconsulting.catsone.com/xml/index.php?siteID=5046&portalID=850&subdomain=maqconsulting",
    {

        limit: 200,
        entryTemplate: '<tr><td>{url}</td><td>{title}</td><td>{date}</td><td>{index}</td><td>{totalEntries}</td></tr>',
        success: function () {
            RenderJobs();
        },
    });


    $("#dumpdescription").rss("https://maqconsulting.catsone.com/xml/index.php?siteID=5046&portalID=850&subdomain=maqconsulting",
     {
         limit: 100,
         entryTemplate: '<div class= "div_entries"><br><br><div class= ""><h3>{title}</h3></div><br><div class = "">{body}</div><span class = "tohide url">{url}</span><span class = "tohide">{totalEntries}</span></div>',
     })
});
