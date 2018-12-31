$(document).ready(function() {
    $('#searchPHTData').click(function(e) {
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
        $.getJSON('http://137.117.82.58:8000/api/v0/pht/farm/' + searchField, function(data) {
            if (data.message == 'No phts specified by farms have been retrieved') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                setTimeout(function() {
                    $.each(data.pht.forEach(function(v) {

                        // for(var i=0; i<=counter; i++){

                        $("#result1").append(`
				      	<hr><h1 class="page-title" style="color:#17C4BB">PHT Certificate : <b>${v.phtCertificateId}</b></h1><hr>
				            <form class="form-horizontal">
				                <div class="form-body">
				                    <!-- <h3 class="form-section">Person Info</h3> -->
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>PHT Certificate Id</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtCertificateId} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Expected Production (tonnes)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.expectedProduction} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Date Of Issue</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.dateOfIssue} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                    </div>
				                    <!--/row-->
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Date of Collection</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.dateOfCollection} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Date of Analysis</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.dateOfAnalysis} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Valid Up To</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.validUpto} </p>
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
				                                    <p class="form-control-static"> ${v.farmId} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Farm’s PHT Registration ID</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.farmPhtRegistrationId} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Farm Name</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.farmName} </p>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Farmer's Name</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.farmerName} </p>
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
				                                    <p class="form-control-static"> ${v.requestDetails.phoneNumber} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>PHT Request ID</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.requestDetails.requestDate} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Date of Request</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.requestDetails.callerName} </p>
				                                </div>
				                            </div>
				                        </div>
				                        
				                        <!--/span-->
				                    </div>
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Caller Name</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.requestDetails.phtRequestId} </p>
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
				                                    <p class="form-control-static"> ${v.sampleDetails.pondId} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Longitude</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.sampleDetails.pondCoordinates.longitude} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Latitude</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.sampleDetails.pondCoordinates.latitude} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                    </div>

				                    <div class="row">
				                        
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Sample Collector</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.sampleDetails.sampleCollector} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Sample ID</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.sampleDetails.sampleId} </p>
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
				                                    <p class="form-control-static"> ${v.paymentDetails.testingFee} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Receipt Serial Number</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.paymentDetails.receiptSerialNumber} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Payment Status</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.paymentDetails.paymentStatus} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                    </div>
				                    <!--/row-->
				                    
				                    <h3 class="form-section">Test Results</h3>
				                    <!--/row-->
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Chloramphenicol (ppm)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.chloramphenicol} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Aoz (ppm)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.aoz} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Amoz (ppm)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.amoz} </p>
				                                </div>
				                            </div>
				                        </div>
				                    </div>

				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Ahd (ppm)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.ahd} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Sem (ppm)</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.sem} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Test Method</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.testMethod} </p>
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                    </div>
				                    <!--/row-->
				                    <div class="row">
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Analyzed by</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.analyzedBy} </p> 
				                                </div>
				                            </div>
				                        </div>
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Verified by</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.verifiedBy} </p> 
				                                </div>
				                            </div>
				                        </div>
				                        <!--/span-->
				                        <div class="col-md-4">
				                            <div class="form-group">
				                                <label class="control-label col-md-4"><b>Authorized by</b></label>
				                                <div class="col-md-8">
				                                    <p class="form-control-static"> ${v.phtTestResults.authorizedBy} </p> 
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                    <!--/row-->
				                </div>
				            </form>
						`);
                    }));
                    $.LoadingOverlay("hide");
                }, 2000);
            } else {
                alert(data.error.message);
                $.LoadingOverlay("hide");
            }
        })
    })
})