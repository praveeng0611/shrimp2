$(document).ready(function() {
    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });
    
    //get total number of registered farms
    $(".box1").LoadingOverlay("show");
    $.getJSON('http://137.117.82.58:8000/api/v0/farms/count', function(data) {
        $.each(data, function() {
            $('#count_farms').html(`${data.farm}`);
            $(".box1").LoadingOverlay("hide", true);
        });
    });

    //Get Total number of Registered Exporters
    $(".box1").LoadingOverlay("show");
    $.getJSON('http://137.117.82.58:8000/api/v0/exporters/count', function(data) {
        $.each(data, function() {
            $('#count_exporters').html(`${data.exporter}`);
            $(".box1").LoadingOverlay("hide", true);
        });
    });

    //Get Total number of Registered Processors
    $(".box1").LoadingOverlay("show");
    $.getJSON('http://137.117.82.58:8000/api/v0/processors/count', function(data) {
        $.each(data, function() {
            $('#count_registered_processors').html(`${data.processor}`);
            $(".box1").LoadingOverlay("hide", true);
        });
    });
});