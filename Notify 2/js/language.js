$(document).ready(function() {
    $.getJSON("ro.json", function (json) {
        $("#moto").text(json.header);
    });

});