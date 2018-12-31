// redirected data
function getUrlParam(param1) {
    param1 = param1.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?&]" + param1 + "=([^&#]*)");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}
var param1 = getUrlParam("qr");
// alert(param1);
        var token = localStorage.getItem("token");
        $.ajaxSetup({
            headers: {
                'x-access-token': token
            }
        });
        // $.LoadingOverlay("show");
        $.getJSON('http://137.117.82.58:8000/api/v0/pht/' + param1, function(data) {
            var date3 = new Date(data.pht.dateOfIssue);
            var cleanedDate3 = `${date3.getDate()}-${date3.getMonth() + 1}-${date3.getFullYear()}`;
            var date4 = new Date(data.pht.dateOfCollection);
            var cleanedDate4 = `${date4.getDate()}-${date4.getMonth() + 1}-${date4.getFullYear()}`;
            var date5 = new Date(data.pht.dateOfAnalysis);
            var cleanedDate5 = `${date5.getDate()}-${date5.getMonth() + 1}-${date5.getFullYear()}`;
            var date6 = new Date(data.pht.validUpto);
            var cleanedDate6 = `${date6.getDate()}-${date6.getMonth() + 1}-${date6.getFullYear()}`;    
            if (data.message == 'No such pht found') {
                alert('Invalid Id :' + param1);
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
                                    <p class="form-control-static"> ${data.pht.requestDetails.requestDate} </p>
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
                    // $.LoadingOverlay("hide");
                });
            } else {
                alert(data.error.message);
                // $.LoadingOverlay("hide");
            }
        });