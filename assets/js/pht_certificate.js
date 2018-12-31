// function getUrlParam(param) {
//         param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
//         var regex = new RegExp("[?&]" + param + "=([^&#]*)");
//         var url = decodeURIComponent(window.location.href);
//         var match = regex.exec(url);
//         return match ? match[1] : "";
//     }
//     var param = getUrlParam("login");

$(document).ready(function() {
    $('#searchPHTCertificateData').click(function(e) {
        e.preventDefault();

        var token = localStorage.getItem("token");
        var searchField = $('#search').val();
        var exp = new RegExp(searchField, "i");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        $.LoadingOverlay("show");
        $.getJSON('http://137.117.82.58:8000/api/v0/pht/' + searchField, function(data) {
            var date3 = new Date(data.pht.dateOfIssue);
            var cleanedDate3 = `${date3.getDate()}-${date3.getMonth() + 1}-${date3.getFullYear()}`;
            var date4 = new Date(data.pht.dateOfCollection);
            var cleanedDate4 = `${date4.getDate()}-${date4.getMonth() + 1}-${date4.getFullYear()}`;
            var date5 = new Date(data.pht.dateOfAnalysis);
            var cleanedDate5 = `${date5.getDate()}-${date5.getMonth() + 1}-${date5.getFullYear()}`;
            var date6 = new Date(data.pht.validUpto);
            var cleanedDate6 = `${date6.getDate()}-${date6.getMonth() + 1}-${date6.getFullYear()}`;
            var date7 = new Date(data.pht.requestDetails.requestDate);
            var cleanedDate7 = `${date7.getDate()}-${date7.getMonth() + 1}-${date7.getFullYear()}`;    
            if (data.message == 'No such pht found') {
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
                                <label class="control-label col-md-4"><b>PHT Certificate Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtCertificateId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Expected Production (tonnes)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.expectedProduction} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Issue</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate3} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date of Collection</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate4} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date of Analysis</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate5} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Valid Up To</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate6} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
                    <h3 class="form-section">Farm Details</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farm ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.farmId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farm’s PHT Registration ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.farmPhtRegistrationId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farm Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.farmName} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farmer's Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.farmerName} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section">Request Details</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Phone Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.requestDetails.phoneNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>PHT Request ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.requestDetails.phtRequestId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date of Request</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate7} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Caller Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.requestDetails.callerName} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h3 class="form-section">Sample Details</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Pond ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.sampleDetails.pondId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Longitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.sampleDetails.pondCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Latitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.sampleDetails.pondCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Sample Collector</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.sampleDetails.sampleCollector} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Sample ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.sampleDetails.sampleId} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section">Payment Details</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Testing Fee (Rs)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.paymentDetails.testingFee} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Receipt Serial Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.paymentDetails.receiptSerialNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Payment Status</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.paymentDetails.paymentStatus} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
                    
                    <h3 class="form-section">Test Results</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Chloramphenicol (ppm)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.chloramphenicol} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Aoz (ppm)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.aoz} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Amoz (ppm)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.amoz} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Ahd (ppm)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.ahd} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Sem (ppm)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.sem} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Test Method</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.testMethod} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Analyzed by</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.analyzedBy} </p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Verified by</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.verifiedBy} </p> 
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Authorized by</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.pht.phtTestResults.authorizedBy} </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
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

/////////////////////////////////
//Create PHT certificate
/////////////////////////////////
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
        var form = document.getElementById("addphtCertificate");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            var token = localStorage.getItem("token");

            var fData = {

                "phtCertificateId": $("#phtcerti_id").val(),
                "expectedProduction": parseInt($("#expected_production").val()),
                "dateOfIssue": $("#dt_of_issue").val(),
                "dateOfAnalysis": $("#dt_of_anlys").val(),
                "dateOfCollection": $("#dt_of_coll").val(),
                "validUpto": $("#valid_up_to").val(),
                "farmId": $("#farm_id").val(),
                "farmPhtRegistrationId": $("#farm_pht_reg_id").val(),
                "farmName": $("#farm_name").val(),
                "farmerName": $("#farmer_name").val(),
                "requestDetails": {
                    "phoneNumber": parseInt($("#caller_phone_number").val()),
                    "requestDate": $("#date_of_request").val(),
                    "callerName": $("#caller_name").val(),
                    "phtRequestId": $("#pht_req_id").val()
                },

                "sampleDetails": {
                    "pondId": $("#pond_id").val(),
                    "sampleCollector": $("#sample_collector").val(),
                    "sampleId": $("#sample_id").val(),
                    "pondCoordinates": {
                        "longitude": parseFloat($("#longitude").val()),
                        "latitude": parseFloat($("#latitude").val())
                    },
                },

                "paymentDetails": {
                    "testingFee": parseInt($("#testing_fee").val()),
                    "receiptSerialNumber": parseInt($("#receipt_serial_number").val()),
                    "paymentStatus": $("#payment_status").val()
                },

                "phtTestResults": {
                    "chloramphenicol": parseInt($("#chloramphenicol").val()),
                    "aoz": parseInt($("#aoz").val()),
                    "amoz": parseInt($("#amoz").val()),
                    "ahd": parseInt($("#ahd").val()),
                    "sem": parseInt($("#sem").val()),
                    "testMethod": $("#test_method").val(),
                    "analyzedBy": $("#analyzed_by").val(),
                    "verifiedBy": $("#verified_by").val(),
                    "authorizedBy": $("#authorized_by").val()
                }

            };
            console.log(fData);

            if ($("#phtcerti_id").val() === "" || $("#expected_production").val() === "" || $("#dt_of_issue").val() === "" || $("#dt_of_anlys").val() === "" || $("#dt_of_coll").val() === "" || $("#dt_of_upto").val() === "" || $("#farm_pht_reg_id").val() === "" || $("#farmer_name").val() === "" || $("#longitude").val() === "" || $("#latitude").val() === "" || $("#_farm").val() === "" || $("#date_of_request").val() === "" || $("#caller_name").val() === "" || $("#pht_req_id").val() === "" || $("#pond_id").val() === "" || $("#sample_collector").val() === "" || $("#sample_id").val() === "" || $("#testing_fee").val() === "" || $("#receipt_serial_number").val() === "" || $("#payment_status").val() === "" || $("#chloramphenicol").val() === "" || $("#aoz").val() === "" || $("#amoz").val() === "" || $("#ahd").val() === "" || $("#sem").val() === "" || $("#test_method").val() === "" || $("#analyzed_by").val() === "" || $("#verified_by").val() === "" || $("#authorized_by").val() === "") {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/pht',
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
                        $("#addphtCertificate").trigger("reset");
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

$(document).ready(function() {
    $(function() {
        $('#datetimepicker7').datepicker({
            useCurrent: true,
            format: 'dd/mm/yyyy'
        });
        $('#datetimepicker8').datepicker({
            format: 'dd/mm/yyyy'
        });
        $('#datetimepicker9').datepicker({
            format: 'dd/mm/yyyy'
        });
        $('#datetimepicker10').datepicker({
            format: 'dd/mm/yyyy'
        });
        // $('#datetimepicker11').datepicker({format: 'dd/mm/yyyy'});
    });
});

////////////////////////////////////
// PHT History
////////////////////////////////////
$(document).ready(function() {

    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });

    $.LoadingOverlay("show");
    $.getJSON("http://137.117.82.58:8000/api/v0/pht", function(data) {
        if(data.pht.length==0)
        {
            setTimeout(function(){
                alert('Request timed out, please try again');
                $.LoadingOverlay("hide");
            }, 10000);
        }
        var a = data.pht;
        l1 = a.reverse();
        // console.log(l1);
        var j;
        for (j = 0; j < data.pht.length; j++) {
            var date = new Date(data.pht[j].dateOfIssue);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var date1 = new Date(data.pht[j].validUpto);
            var cleanedDate1 = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
            $("#pht_history").append(`
            <tr class="odd gradeX">
                <td class="redirectPHT"><a>${data.pht[j].phtCertificateId}</a></td>
                <td style="width: 17%;">${data.pht[j].farmerName}</td>
                <td style="width: 11%;">${data.pht[j].farmId}</td>
                <td style="width: 8%;">${data.pht[j].sampleDetails.pondId}</td>
                <td style="width: 14%;">${data.pht[j].expectedProduction}</td>
                <td style="width: 15%;">${cleanedDate}</td>
                <td style="width: 15%;">${cleanedDate1}</td>
            </tr>
          `)
        $.LoadingOverlay("hide");
        }
        $(".redirectPHT a").bind("click", function (e) {
            var qrValue = $(e.target).text();
            console.log(qrValue);
            var url = "pht_search_pht.html?qr=" + encodeURIComponent(qrValue);
            window.location.href = url;
        });
    })
});

