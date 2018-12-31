// function getUrlParam(param) {
//     param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
//     var regex = new RegExp("[?&]" + param + "=([^&#]*)");
//     var url = decodeURIComponent(window.location.href);
//     var match = regex.exec(url);
//     return match ? match[1] : "";
// }
// var param = getUrlParam("login");

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
        var form = document.getElementById("addSKU");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            //window.alert(json);
            var token = localStorage.getItem("token");


            var sp_cul = 'Whiteleg shrimp (Litopenaeus vannamei)';
            var fData = {
                "qr": $("#qr_code").val(),
                "speciesCultured": sp_cul,
                "skuType": $("#sku_type").val(),
                "processorId": $("#processor_id").val(),
                "outputWeight": parseInt($("#output_weight").val()),
                "inputHarvest": {
                    "harvestedShrimpQr": $("#append_harvestedShrimpQR").val(),
                    "weightClaimed": parseInt($("#weight_claimed").val())
                },
                "count": parseInt($("#count").val()),
                "skuContainer": {
                    "containerNumber": parseInt($("#cont_number").val()),
                    "containerWeight": parseInt($("#cont_weight").val()),
                    "count": parseInt($("#cont_count").val())
                }
            };
            console.log(fData);
            $.LoadingOverlay("show");
            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/shrimp/processed',
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
                        $("#addSKU").trigger("reset");
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
        $("#stop1").removeClass('disabled');
        $("#change1").removeClass('disabled');
    });
    $("#stop1").on('click', function() {
        $('#qr').css('display', 'none');
        $("#qr").html5_qrcode_stop();
        $("code").html('Start Scanning');

        $("#scan").removeClass('disabled');
        $("#stop1").addClass('disabled');
        $("#change1").addClass('disabled');
    });
    $("#change1").on('click', function() {
        $("#qr").html5_qrcode_changeCamera();

        $("#scan").addClass('disabled');
        $("#stop1").removeClass('disabled');
    });
});

// Search SKU
$(document).ready(function() {
    $('#searchSKUData').click(function(e) {
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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/processed/' + searchField, function(data) {

            if (data.message == 'Internal error') {
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
                                <label class="control-label col-md-4"><b>SKU QR</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.qr} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Species Cultured</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.speciesCultured} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>SKU Type</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.skuType} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Processor ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Output Weight</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.outputWeight} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Harvested Shrimp QR</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.inputHarvest.harvestedShrimpQr} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!--/row-->
                    <div class="row">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Weight Claimed</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.inputHarvest.weightClaimed} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Count</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.count} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Container Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.skuContainer.containerNumber} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Container Weight</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.skuContainer.containerWeight} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Container Count</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processed.skuContainer.count} </p>
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

// View inventory
$(document).ready(function() {

    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });

    $.LoadingOverlay("show");
    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/processed/processor/processor_a", function(data) {
        if(data.processed.length==0)
        {
            setTimeout(function(){
                alert('Request timed out, please try again');
                $.LoadingOverlay("hide");
            }, 10000);
        }
        data.processed.reverse();
        for (var j = 0; j < data.processed.length; j++) {
            var date = new Date(data.processed[j].dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            // console.log(cleanedDate);
            $("#view_inventory").append(`
            <tr class="odd gradeX">
                <td class="redirectSKU"><a>${data.processed[j].qr}</a></td>
                <td style="width: ;">${data.processed[j].skuType}</td>
                <td style="width: ;">${data.processed[j].processorId}</td>
                <td style="width: ;">${data.processed[j].outputWeight}</td>
                <td style="width: ;">${cleanedDate}</td>
                <td style="width: ;">${data.processed[j].inputHarvest.harvestedShrimpQr}</td>
                <td style="width: ;">${data.processed[j].inputHarvest.weightClaimed}</td>
                <td style="width: ;">${data.processed[j].count}</td>
            </tr>
          `)
        $.LoadingOverlay("hide");
        }
        $(".redirectSKU a").bind("click", function (e) {
            var qrValue = $(e.target).text();
            console.log(qrValue);
            var url = "search_sku.html?&qr=" + encodeURIComponent(qrValue);
            window.location.href = url;
        });
    })

    $.getJSON("http://137.117.82.58:8000/api/v0/shrimp/harvest/processor/processor_a/available", function(data) {
        console.log(data.harvests.length);
        if(data.harvests.length==0)
        {
            $("#append_harvestedShrimpQR").append(`
                <option>Out of stock</option>
            `)
        }
        else
        {
            for (var j = 0; j < data.harvests.length; j++) {
                $("#append_harvestedShrimpQR").append(`
                    <option value="${data.harvests[j].qr}">${data.harvests[j].qr} - weight left : ${data.harvests[j].unclaimedWeight}</option>
                `)
            }
        }
    })
});