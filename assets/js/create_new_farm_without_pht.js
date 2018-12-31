(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, textarea, select");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }
    var jsonData;

    document.addEventListener("DOMContentLoaded", function() {
        var isError = false;
        var form = document.getElementById("addfarm");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            //window.alert(json);
            var token = localStorage.getItem("token");


            // Add Multiple Ponds

            var ponds = [];

            for (var i = 0; i <= counter; i++) {
                var data = {};

                var pno = $('input[id^=pond_no]').map(function() {
                    return $(this).val();

                }).get();

                var plong = $('input[id^=longitude_p]').map(function() {
                    return $(this).val();

                }).get();

                var plat = $('input[id^=latitude_p]').map(function() {
                    return $(this).val();

                }).get();

                var pcular = $('input[id^=culture_area]').map(function() {
                    return $(this).val();

                }).get();

                data.pondNumber = parseInt(pno[i]);

                data.longitude = parseFloat(plong[i]);

                data.latitude = parseFloat(plat[i]);

                data.cultureArea = parseInt(pcular[i]);

                ponds.push(data);


            }
            // console.log(ponds);



            var fData = {
                "farmId": $("#frm_id").val(),
                "farmName": $("#farm_name").val(),
                "farmerName": $("#farmer_name").val(),
                "isActive": eval($("#is_active").val()),
                "totalArea": parseInt($("#tot_area").val()),
                "waterSpreadArea": parseInt($("#wtr_sprd_area").val()),
                "address": {
                    "building": $("#building").val(),
                    "streetOne": $("#srt_one").val(),
                    "city": $("#city").val(),
                    "pinCode": $("#pin_code").val(),
                    "state": $("#state").val(),
                    "country": $("#country").val()
                },
                "gpsCoordinates": {
                    "longitude": parseFloat($("#longitude").val()),
                    "latitude": parseFloat($("#latitude").val())
                },
                "dateOfRegistration": $("#dt_of_registration").val(),
                "ponds": ponds
            };
            console.log(fData);

            if ($("#frm_id").val() === "" ||
                $("#farm_name").val() === "" ||
                $("#farmer_name").val() === "" ||
                $("#is_active").val() === "" ||
                $("#tot_area").val() === "" ||
                $("#wtr_sprd_area").val() === "" ||
                $("#building").val() === "" ||
                $("#srt_one").val() === "" ||
                $("#city").val() === "" ||
                $("#pin_code").val() === "" ||
                $("#state").val() === "" ||
                $("#country").val() === "" ||
                $("#longitude").val() === "" ||
                $("#latitude").val() === "" ||
                $("#dt_of_registration").val() === "" ||
                $("#pond_no").val() === "" ||
                $("#culture_area").val() === "" ||
                $("#longitude_p").val() === "" ||
                $("#latitude_p").val() === "") {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/farms',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                crossDomain: true,
                dataType: 'json',
                //data: localStorage.getItem("jsonData"),
                //contentType: 'application/json; charset=utf-8',
                //data: $("form").serializeArray(),
                //data: JSON.stringify($("form").serialize()),
                data: JSON.stringify(fData),
                success: function(data) {

                    if (data.error == undefined) {
                        alert(data.message);
                        $("#addfarm").trigger("reset");
                        $.LoadingOverlay("hide");
                    } else {
                        alert(data.error.message);
                        $.LoadingOverlay("hide");
                    }

                }
            });

        }, false);

    });

})();
// function formValidate(input) {
//     alert("Please enter value for " + input + " true or false");
//     return true;
// }