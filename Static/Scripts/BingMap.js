/*jslint plusplus: true */
/*globals VELatLong,VEMap,VEShape,VEShapeType,VEShapeLayer,VERouteOptions,VERouteDistanceUnit*/
var map = null;
var pushPinLayer = null;
try {
    function addPushPin(latLong) {
        "use strict";
        var marker = new VEShape(VEShapeType.Pushpin, latLong);
        marker.SetTitle("MAQ Software");
        marker.SetDescription("15446 Bel-Red Road,<br/>Suite 201 Redmond,<br/>WA 98052(425) 526 5399");
        pushPinLayer.AddShape(marker);
    }

    function getMap() {
        "use strict";
        var LAtitiude_Longitude = new VELatLong(47.633082999999985, -122.13328600000006);
        map = new VEMap('mapviewer');
        map.LoadMap();
        map.SetCenterAndZoom(LAtitiude_Longitude, 15);
        pushPinLayer = new VEShapeLayer();
        map.DeleteAllShapeLayers();
        addPushPin(LAtitiude_Longitude);
        map.AddShapeLayer(pushPinLayer);
    }
    getMap();

    /*changes for the get directions functionality*/
    function resetFields() {
        "use strict";
        getMap();
        document.getElementById('input').value = '';
        document.getElementById("directions").innerHTML = '';
        watermarktext_blur(document.getElementById('input'));
    }

    function ShowTurns(route) {
        "use strict";
        if (route) {
            // Unroll route and populate DIV
            var legs = route.RouteLegs,
                turns = "<h3 id='turnTitle'>Turn-by-Turn Directions</h3><p>",
                leg = null,
                i,
                j,
                turnNum = 0, // The turn #
                totalDistance = 0, // The sum of all leg distances
                turn,
                legDistance;

            // Get intermediate legs
            for (i = 0; i < legs.length; i++) {
                // Get this leg so we don't have to derefernce multiple times
                leg = legs[i]; // Leg is a VERouteLeg object

                // Unroll each intermediate leg
                turn = null; // The itinerary leg
                legDistance = null; // The distance for this leg

                for (j = 0; j < leg.Itinerary.Items.length; j++) {
                    turnNum++;
                    turn = leg.Itinerary.Items[j]; // turn is a VERouteItineraryItem object
                    turns += "<b class='turnNumber'>" + turnNum + ".</b>" + turn.Text;
                    legDistance = turn.Distance;
                    totalDistance += legDistance;

                    // Round distances to 1/10ths
                    turns += " (" + legDistance.toFixed(1) + " miles)<br/>";
                }
            }
            turns += "<div class='total'><b id='totalDistance'>Total distance: </b>" + totalDistance.toFixed(1) + " miles</div></p>";

            // Populate DIV with directions
            document.getElementById("directions").innerHTML = turns;
        }
    }

    //var mileDist = new VERouteDistanceUnit.Mile();
    function getRouteMap(locations) {
        "use strict";
        var options = new VERouteOptions();
        // Otherwise what's the point?
        options.DrawRoute = true;
        // So the map repositions:
        options.SetBestMapView = true;
        // Call this function when map route is determined:
        options.RouteCallback = ShowTurns;
        // Show as miles
        options.DistanceUnit = VERouteDistanceUnit.Mile;
        // Show the disambiguation dialog if unable to locate a location
        options.ShowDisambiguation = true;
        map.GetDirections(locations, options);
        // map.GetRoute(start, end, units, route_type, callback);
    }

    function getRouteTo(latitude, longitude, input) {
        "use strict";
        if ($('#input').hasClass("maqwatermark")) {
            return;
        }

        var MAQSoftwareLocation = new VELatLong(latitude, longitude); //47.633087, -122.133202);
        if (input && input !== "") {
            getRouteMap([input, MAQSoftwareLocation]);
        }
        $('#directions').css({
            "display": "block"
        });
    }
} catch (ignore) { }