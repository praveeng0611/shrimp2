// function getUrlParam(param) {
//     param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
//     var regex = new RegExp("[?&]" + param + "=([^&#]*)");
//     var url = decodeURIComponent(window.location.href);
//     var match = regex.exec(url);
//     return match ? match[1] : "";
// }
// var param = getUrlParam("login");

$(document).ready(function() {
    var p_id;
    $('#get_harvest_details').click(function(e) {
        e.preventDefault();
        var token = localStorage.getItem("token");
        var searchField = $('#qr_code').val();
        var exp = new RegExp(searchField, "i");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        $.LoadingOverlay("show");
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/harvest/' + searchField, function(data) {
            p_id = data.harvest.proposedProcessorId;
            var date = new Date(data.harvest.dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            console.log(p_id);
            $.each(data, function() {
                $("#dt_of_harvest").html(cleanedDate);
                $("#sp_cul").html(data.harvest.speciesCultured);
                $("#pond_no").html(data.harvest.pondNumber);
                $("#farm_id").html(data.harvest.farmId);
                $("#con_count").html(data.harvest.count);
                $("#tot_weight").html(data.harvest.weight);
                $("#").html();
                $("#").html();
                $("#").html();
                $("#").html();
                $("#").html();
                $("#").html();
                $.LoadingOverlay("hide");

            })
        })
    })

    $("#confirm_receipt").click(function() {
        var token = localStorage.getItem("token");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        // alert("The paragraph was clicked.");
        var fData = {
            "harvestedShrimpQr": $('#qr_code').val(),
            "processorId": p_id
        }
        console.log(fData);
        $.ajax({
            type: 'POST',
            url: 'http://137.117.82.58:8000/api/v0/shrimp/harvest/accept',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(fData),
            success: function(data) {

                if (data.error == undefined) {
                    alert(data.message);
                    window.location.href="processor_pending_purchase.html";
                    // $("#addingredients").trigger("reset");
                    // $.LoadingOverlay("hide");
                } else {
                    alert(data.error.message);
                    // $.LoadingOverlay("hide");
                }

            }
        });
    });
})

// QR code
$(document).ready(function() {
    $("#scan").on('click', function() {
        $('#qr').css('display', 'inline-block');
        $("code").html('scanning');
        $('#qr').html5_qrcode(function(data) {
                // do something when code is read
                $("#qr_code").val(data);
                $('#qr').css('display', 'none');
            },
            function(error) {
                //show read errors 
                // $(".feedback").html('Unable to scan the code! Error: ' +error);
                // alert(error);
            },
            function(videoError) {
                //the video stream could be opened
                $(".feedback").html('Video error');
                // alert(videoError);
            }
        );

        $("#scan").addClass('disabled');
        $("#stop").removeClass('disabled');
        $("#change").removeClass('disabled');
    });
    $("#stop").on('click', function() {
        $('#qr').css('display', 'none');
        $("#qr").html5_qrcode_stop();
        $("code").html('Start Scanning');

        $("#scan").removeClass('disabled');
        $("#stop").addClass('disabled');
        $("#change").addClass('disabled');
    });
    $("#change").on('click', function() {
        $("#qr").html5_qrcode_changeCamera();

        $("#scan").addClass('disabled');
        $("#stop").removeClass('disabled');
    });
});