$(document).ready(function() {

    // $('#searchFarmData').click(function(e) {
    // e.preventDefault();
    var token = localStorage.getItem("token");
    // var searchField = $('#search').val();
    // var exp = new RegExp(searchField, "i");
    $.ajaxSetup({
        headers: {
            'x-access-token': token
        }
    });
    $.LoadingOverlay("show");
    // $.setTimeOut('hide',5000);
    // setTimeout(function(){
    //     alert('Request timed out, please try again');
    //     $.LoadingOverlay("hide");
    // }, 10000);
    $.getJSON('http://137.117.82.58:8000/api/v0/pht/farm/farm_a', function(data) {
        if(data.pht.length==0)
        {
            setTimeout(function(){
                alert('Request timed out, please try again');
                $.LoadingOverlay("hide");
            }, 10000);
        }
        // alert(data.pht.length);
        // $.each(data, function() {
            for(var i=0; i<data.pht.length; i++){
            var GivenDate = data.pht[i].validUpto;
            var CurrentDate = new Date();
            GivenDate = new Date(GivenDate);

            if(GivenDate >= CurrentDate){
                // $('.panel-title a').css('color','green');return
            }else{
                // alert('Given date is not greater than the current date.');
                $('.panel-title a').css('color','red');
            }

            var date = new Date(data.pht[i].dateOfIssue);
            var issueDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var date1 = new Date(data.pht[i].dateOfAnalysis);
            var analysisDate = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
            var date2 = new Date(data.pht[i].dateOfCollection);
            var collectionDate = `${date2.getDate()}-${date2.getMonth() + 1}-${date2.getFullYear()}`;
            var date3 = new Date(data.pht[i].validUpto);
            var validuptoDate = `${date3.getDate()}-${date3.getMonth() + 1}-${date3.getFullYear()}`;
            var date4 = new Date(data.pht[i].requestDetails.requestDate);
            var request_Date = `${date4.getDate()}-${date4.getMonth() + 1}-${date4.getFullYear()}`;
            $("#result").append(`
                <div class="portlet-body">
                    <div class="panel-group accordion" id="accordion3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle accordion-toggle-styled collapsed" id="expire" data-toggle="collapse" data-parent="#accordion3" href="#${data.pht[i].phtCertificateId}"> PHT Certificate Id : ${data.pht[i].phtCertificateId} </a>
                                </h4>
                            </div>
                            <div id="${data.pht[i].phtCertificateId}" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>PHT Certificate Id</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtCertificateId} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Expected Production</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].expectedProduction} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Date Of Issue</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${issueDate} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Date Of Analysis</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${analysisDate} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Date Of Collection</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${collectionDate} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Valid Upto</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${validuptoDate} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Farm Details</h3>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Farm PHT Registration Id</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].farmPhtRegistrationId} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Farm Name</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].farmName} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Farmer Name</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].farmerName} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Request Details</h3>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Request Date</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${request_Date} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Caller Name</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].requestDetails.callerName} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>PHT Request Id</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].requestDetails.phtRequestId} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Sample Details</h3>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Pond Id</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].sampleDetails.pondId} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Longitude</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].sampleDetails.pondCoordinates.longitude} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Latitude</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].sampleDetails.pondCoordinates.latitude} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Sample Collector</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].sampleDetails.sampleCollector} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Sample Id</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].sampleDetails.sampleId} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Payment Details</h3>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Testing Fee</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].paymentDetails.testingFee} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Receipt Serial Number</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].paymentDetails.receiptSerialNumber} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Payment Status</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].paymentDetails.paymentStatus} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>PHT Test Results</h3>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Chloramphenicol</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.chloramphenicol} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>AOZ</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.aoz} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>AMOZ</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.amoz} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>AHD</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.ahd} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>SEM</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.sem} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Test Method</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.testMethod} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Analyzed By</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.analyzedBy} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Verified By</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.verifiedBy} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"><b>Authorized By</b></label>
                                                        <div class="col-md-8">
                                                            <p class="form-control-static"> ${data.pht[i].phtTestResults.authorizedBy} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            }

            $.LoadingOverlay("hide");

        // })
    })
    // })
})