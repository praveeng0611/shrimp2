$(document).ready(function() {
    $('#searchFarmData').click(function(e) {
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
                    <!--/row-->
                    
                    <h3 class="form-section">Owner Details</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Owner Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.ownerName} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Locality</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.locality} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Region</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.region} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street One</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Two (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.streetTwo} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Three (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.streetThree} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Postal Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.postalCode} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Post Office Box Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.owner.address.postOfficeBoxNumber} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->

                    <h3 class="form-section">Address</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.city} </p>
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
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Locality</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.locality} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Region</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.region} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street One</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Two (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.streetTwo} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Three (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.streetThree} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Postal Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.postalCode} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Post Office Box Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.address.postOfficeBoxNumber} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Establishment</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.dateOfEstablishment} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Registration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.dateOfRegistration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Expiration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.dateOfExpiration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>RTC Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.rtcProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>RTE Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.rteProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Products Processed</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.productsProcessed} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>ELISA Lab</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.elisaLab} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>EIA Clearance Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.processor.eiaClearanceNumber} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
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