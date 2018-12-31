// function getUrlParam(param) {
//     param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
//     var regex = new RegExp("[?&]" + param + "=([^&#]*)");
//     var url = decodeURIComponent(window.location.href);
//     var match = regex.exec(url);
//     return match ? match[1] : "";
// }
// var param = getUrlParam("login");

//Add fields
var counterhat = 0;
var counterFeeds = 0;
var counterSupp = 0;
// var counterCoun = 0;
var counter = 0;
$(function() {
    $("#addHatcherybtn").click(function(e) {
        e.preventDefault();
        $("#addHatchery").append(`
                <div id="addHatchery">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-2">Hatchery</label>
                                <div class="col-md-3">
                                    <select id="hatchery" class="form-control" name="hatcheries[]" required="">
                                        <option value="hat1">hat1</option>
                                        <option value="hat2">hat2</option>
                                        <option value="hat3">hat3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
        counterhat++;
        console.log(counterhat);
        $("#remHatcherybtn").show();
    });

    $("#addFeedsbtn").click(function(e) {
        e.preventDefault();
        $("#addFeeds").append(`
            <div id="addFeeds">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label col-md-2">Feed Suplier</label>
                            <div class="col-md-3">
                                <input type="text" class="form-control" required="" id="feed_suplier" name="feeds[]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `);
        counterFeeds++;
        console.log(counterFeeds);
        $("#remFeedsbtn").show();
    });

    $("#addSuppbtn").click(function(e) {
        e.preventDefault();
        $("#addSupp").append(`

                        <div id="addSupp">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label col-md-2">Supplements</label>
                                    <div class="col-md-3">
                                        <input type="text" class="form-control" required="" id="supplements" name="supplements[]">
                                    </div>
                                </div>
                            </div>
                            <!--/span-->
                        </div>
                        <!--/row-->
                        </div>
                  
            `);
        counterSupp++;
        console.log(counterSupp);
        $("#remSuppbtn").show();
    });

    $("#addCountbtn").click(function(e) {
        e.preventDefault();
        $("#addCount").append(`

                        <div id="addCount">  
                          <div class="form-group">
                              <div class="col-sm-3">
                                  <input type="text" class="form-control" placeholder="Count">
                              </div>
                              <div class="col-sm-3">
                                  <input type="text" class="form-control" placeholder="Weight">
                              </div>
                              <div class="col-sm-3">
                                <input type="text" class="form-control" placeholder="Scan code on crate">
                              </div>
                          </div>
                        </div>
                  
            `);
        counterCoun++;
        console.log(counterCoun);
        $("#remCountbtn").show();
    });

    //Get PHT Deatails

    $('#searchPHT').click(function(e) {
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
            if (data.message == 'No such pht found') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                $.each(data, function() {

                    // for(var i=0; i<=counter; i++){

                    $("#phtData").html(`
                        
                        <div class="col-md-2">
                          ${data.pht.validUpto}
                        </div>
                        <div class="col-md-2">
                          Total Capacity
                        </div>
                        <div class="col-md-2">
                          Available Capacity
                        </div>

                  `);
                    $.LoadingOverlay("hide");
                    
                    console.log();
                })
            } else {
                alert(data.error.message);
                $.LoadingOverlay("hide");
            }
        })
    })

});

//Remove Fields
$(document).ready(function() {

    //remove Seed
    $('#remHatcherybtn').on('click', function(e) {
        e.preventDefault();
        if (counterhat == 0) {
            alert("No more Hatchery to remove");
            return false;
        }

        counterhat--;
        console.log(counterhat);
        $("div#addHatchery:last").remove();
    });


    //remove Feed
    $('#remFeedsbtn').on('click', function(e) {
        e.preventDefault();
        if (counterFeeds == 0) {
            alert("No more Feed Supplier to remove");
            return false;
        }

        counterFeeds--;
        // console.log(counterFeeds);
        $("div#addFeeds:last").remove();
    });


    //remove Suppliments
    $('#remSuppbtn').on('click', function(e) {
        e.preventDefault();
        if (counterSupp == 0) {
            alert("No more Supplements to remove");
            return false;
        }

        counterSupp--;
        // console.log(counterSupp);
        $("div#addSupp:last").remove();
    });

    //remove Count
    $('#remCountbtn').on('click', function(e) {
        e.preventDefault();
        if (counterCoun == 0) {
            alert("No more Field to remove");
            return false;
        }

        counterCoun--;
        console.log(counterCoun);
        $("div#addCount:last").remove();
    });
});

////////////////////////////////////////////////////////////
// QR code
////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////
// Get pht and hatchery data in dropdown
////////////////////////////////////////////////////
$(document).ready(function() {
    var token = localStorage.getItem("token");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });


    $.getJSON("http://137.117.82.58:8000/api/v0/pht", function(data) {

        $.each(data.pht.forEach(function(v) {
            var phtcerti = v.phtCertificateId;
                $("#append_pht").append(`<option value="${phtcerti}">${phtcerti}</option>`);
            }));

    });

    $.getJSON("http://137.117.82.58:8000/api/v0/database/hatchery", function(data) {
        $.each(data.hatchery.forEach(function(v) {
            var hat = v.name;
            $("#hatchery").append(`<option value="${hat}">${hat}</option>`);
        }));
    });

    // Search Harvest Data
    $('#searchHarvestData').click(function(e) {
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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/harvest/' + searchField, function(data) {
            var date = new Date(data.harvest.dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var date1 = new Date(data.harvest.dateOfSale);
            var cleanedDate1 = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
            
            if (data.message == 'No such farm found') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                if(data.harvest.isPhtExpired===false){$('#pht__ID').append("NA");}
                setTimeout(function() {
                    $.each(data, function() {
                        $('#result').html(`
              <form class="form-horizontal">
                <div class="form-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>QR</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.qr} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Species Cultured</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.speciesCultured} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farm Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.farmId} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Pond Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.pondNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Count</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.count} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Weight</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.weight} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Creation</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>PHT Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static" id="pht__ID">${data.harvest.phtId}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>PHT Expired</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static" id="is_PHT_exp">${data.harvest.isPhtExpired}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Proposed Processor Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.proposedProcessorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Sold By Farm</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.soldByFarm} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Accepted By Processor</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.acceptedByProcessor} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Rejected By Processor</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.rejectedByProcessor} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Processor Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Sale</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate1} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row">
                    <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Spent By Processor</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.spentByProcessor} </p>
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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/harvest/' + searchField, function(data) {
            $.each(data, function() {
                $("#result1").html(`
                    <form class="form-horizontal">
                        <div class="form-body">
                            <h3 class="form-section">Other Details</h3>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="control-label col-md-4"><b>Feed Suppliers</b></label>
                                        <div class="col-md-8">
                                            <p class="form-control-static"> ${data.harvest.feeds} </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="control-label col-md-4"><b>Supplements</b></label>
                                        <div class="col-md-8">
                                            <p class="form-control-static"> ${data.harvest.supplements} </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="control-label col-md-4"><b>Hatchery</b></label>
                                        <div class="col-md-8">
                                            <p class="form-control-static"> ${data.harvest.hatchery} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                `);
            })
            $.each(data.harvest.containers.forEach(function(v) {
                $("#result2").append(`
                    <form class="form-horizontal">
                        <div class="form-body">
                            <h3 class="form-section">Container Details</h3>
                            <div class="row">
                                
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="control-label col-md-4"><b>Container Count</b></label>
                                        <div class="col-md-8">
                                            <p class="form-control-static"> ${v.count} </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </form>

                `);
            }))
        });
    });
});

/////////////////////////////////////////////////
// Create new harvest
/////////////////////////////////////////////////
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
        var form = document.getElementById("addHarvest");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            var token = localStorage.getItem("token");


            // Add Multiple Hatchery

            // var hatchery = [];

            // for(var i = 0; i <= counterhat; i++){
            //   var data = {};

            //   var hatchery_no = $('select[id^=hatchery]').map( function() {
            //               return $(this).val();

            //             }).get();

            // data.hatchery = hatchery_no[i];

            // hatchery.push(data);


            // }
            // console.log(hatchery);

            //Add Multiple Hatechery End

            // Add Multiple Feed Suplier

            // var feedsuplier = [];

            // for(var i = 0; i <= counterFeeds; i++){
            //   var data1 = {};

            //   var feeds_no = $('input[id^=feed_suplier]').map( function() {
            //               return $(this).val();

            //             }).get();

            // data1.feedsuplier = feeds_no[i];

            // feedsuplier.push(data1);


            // }
            // console.log(feedsuplier);

            //Add Multiple Feed Suplier End

            // Add Multiple Supplements
            // var supplements = [];

            // for(var i = 0; i <= counterSupp; i++){
            //   var data2 = {};

            //   var supplements_no = $('input[id^=supplements]').map( function() {
            //               return $(this).val();

            //             }).get();

            // data2.supplements = supplements_no[i];

            // supplements.push(data2);


            // }
            // console.log(supplements);

            //Add Multiple Supplements End

            // Add Multiple Containers

            // var containers = [];

            // for(var i = 0; i <= counter; i++){
            //   var data3 = {};

            //   var c_no = $('input[id^=cont_no]').map( function() {
            //               return $(this).val();

            //             }).get();

            //   var c_count = $('input[id^=container_count]').map( function() {
            //                 return $(this).val();

            //               }).get();

            //   var c_weight = $('input[id^=cont_weight]').map( function() {
            //               return $(this).val();

            //             }).get();

            // data3.number = parseInt(c_no[i]);

            // data3.count = parseInt(c_count[i]);

            // data3.weight = parseInt(c_weight[i]);

            // containers.push(data);


            // }
            // console.log(containers);

            var sp_cul = 'Whiteleg shrimp (Litopenaeus vannamei)';
            var fData = {
                "hatchery": $("#hatchery").val(),
                "feeds": [$("#feed_suplier").val()],
                "supplements": [$("#supplements").val()],
                "speciesCultured": sp_cul,
                "qr": $("#qr_code").val(),
                // "farmPhtRegistrationId": $("#farm_pht_id").val(),
                "farmId": $("#farm_id").val(),
                "count": $("#_count").val(),
                "weight": $("#total_weight").val(),
                "pondNumber": $("#pond_no").val(),
                "containers": [{
                    "weight": parseInt($("#cont_weight").val()),
                    "count": parseInt($("#container_count").val()),
                    "number": parseInt($("#cont_no").val())
                }]
            };
            console.log(fData);

            if ($("#hatchery").val() === "" ||
                $("#feed_suplier").val() === "" ||
                $("#supplements").val() === "" ||
                $("#species_cultured").val() === "" ||
                $("#qr_code").val() === "" ||
                $("#pond_no").val() === "" ||
                $("#farm_pht_id").val() === "" ||
                $("#container_count").val() === "" ||
                $("#total_weight").val() === "") {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/shrimp/harvest',
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
                        // $("#addHarvest").trigger("reset");
                        // $.LoadingOverlay("hide");
                        window.location.href = "farm_sell_harvest.html";
                    } else {
                        alert(data.error.message);
                        $.LoadingOverlay("hide");
                    }

                }
            });

        }, false);

    });

})();

