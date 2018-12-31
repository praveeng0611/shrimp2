// Search Processor
$(document).ready(function() {
    $('#searchProcessorData').click(function(e) {
        e.preventDefault();

        var token = localStorage.getItem("token");
        var searchField = $('#search').val();
        var exp = new RegExp(searchField, "i");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        // $("#result").html('<img src="assets/img/loading.gif">');
        $.LoadingOverlay("show");
        $.getJSON('http://137.117.82.58:8000/api/v0/processors/' + searchField, function(data) {

            if (data.message == 'No such processor found') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                setTimeout(function() {
                    $.each(data, function() {
                        $('#result').html(`
              <form class="form-horizontal" id="addphtCertificate" name="addphtCertificate" method="POST">
                <div class="form-body">
                    <!-- <h3 class="form-section">Person Info</h3> -->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Processor ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Processor Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.processorName} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Processor Ownerr Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.processorOwnerName} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Status</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.isActive} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    
                    <h3 class="form-section">Address</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Building</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.building} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Pin Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.pinCode} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>State</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.state} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Longitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Latitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.gpsCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </form>
            `);

                    });
                    $.LoadingOverlay("hide");
                }, 2000);
            } else {
                alert(data.error.message);
                $.LoadingOverlay("hide");
            }
        });
    });
});


(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select");
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
        var form = document.getElementById("addprocessor");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            //window.alert(json);
            var token = localStorage.getItem("token");


            var fData = {
                "processorId": $("#processor_id").val(),
                "processorName": $("#processor_name").val(),
                "processorOwnerName": $("#processor_owner_name").val(),
                "isActive": eval($("#is_active").val()),
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
                }
            };
            console.log(fData);


            if ($("#processor_id").val() === "" ||
                $("#processor_name").val() === "" ||

                $("#processor_owner_name").val() === "" ||
                $("#is_active").val() === "" ||
                $("#building").val() === "" ||
                $("#srt_one").val() === "" ||
                $("#city").val() === "" ||
                $("#pin_code").val() === "" ||
                $("#state").val() === "" ||
                $("#country").val() === "" ||

                $("#longitude").val() === "" ||
                $("#latitude").val() === "")

            {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/processors',
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
                        $("#addprocessor").trigger("reset");
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



// Datepicker
$(document).ready(function() {
    $(function() {
        $('#datetimepicker6').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        // $('#datetimepicker7').datetimepicker({useCurrent: true, format:'YYYY/MM/DD HH:mm'});
        // $('#datetimepicker8').datetimepicker({useCurrent: true, format:'YYYY/MM/DD HH:mm'});
        var dp7 = $('#datetimepicker7').datepicker('getDate');
        $('#datetimepicker8').datepicker({
            // format:'YYYY/MM/DD HH:mm',
            startDate: 'dp7'
        });
        $('#datetimepicker9').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        $('#datetimepicker10').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });
        $('#datetimepicker13').datetimepicker({
            useCurrent: true,
            format: 'YYYY/MM/DD HH:mm'
        });

    });
});

// Purchase History
$(document).ready(function() {

    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });

    $.LoadingOverlay("show");
    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/harvest/processor/processor_a/completed", function(data) {
        if(data.harvest.length==0)
        {
            setTimeout(function(){
                alert('Request timed out, please try again');
                $.LoadingOverlay("hide");
            }, 10000);
        }
        var j;
        data.harvest.reverse();
        for (j = 0; j < data.harvest.length; j++) {
            var date = new Date(data.harvest[j].dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            $("#purchase_history").append(`
            <tr class="odd gradeX">
                <td>${data.harvest[j].qr}</td>
                <td>${cleanedDate}</td>
                <td>${data.harvest[j].containers.length}</td>
                <td>${data.harvest[j].count}</td>
                <td>${data.harvest[j].weight}</td>
                <td>${data.harvest[j].pondNumber}</td>
                <td>${data.harvest[j].farmId}</td>
                <td>${data.harvest[j].processorId}</td>
                <td>Completed</td>
            </tr>
          `)
        $.LoadingOverlay("hide");
        }
        // $(".redirectPHT a").bind("click", function (e) {
        //     var qrValue = $(e.target).text();
        //     console.log(qrValue);
        //     var url = "pht_search_pht.html?login="+param+"&qr=" + encodeURIComponent(qrValue);
        //     window.location.href = url;
        // });
    })
});