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
        $.getJSON('http://137.117.82.58:8000/api/v0/farms/' + searchField, function(data) {

            if (data.message == 'No such farm found') {
                alert('Invalid Id :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                setTimeout(function() {
                    $.each(data, function() {
                        $('#result').html(`
              <form class="form-horizontal">
                <div class="form-body">
                    <!-- <h3 class="form-section">Person Info</h3> -->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>PHT Registration ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.phtRegistrationId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farm Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmName} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Technical Assistance Registration ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.technicalAssistanceRegistrationId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Year Of Commencement</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.yearOfCommencement} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Species Cultured</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.speciesCultured} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Water Source</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.waterSource} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Place Of Registration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.placeOfRegistration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Registration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.dateOfRegistration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Signatory</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.signatory} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Total Area</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.totalArea} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Water Spread Area</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.waterSpreadArea} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Effluent Treatment System</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.effluentTreatmentSystem} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Operational</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.active} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Banned</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.banned} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Acknowledgment Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.acknowledgmentNumber} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Land Type</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.landStatus.type} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Lease Period</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.leasePeriod} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Start Date</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.landStatus.leasePeriod.startDate} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>End Date</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.landStatus.leasePeriod.endDate} </p>
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
                                <label class="control-label col-md-4"><b>Owner Farmer Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.farmerName} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Owner Type</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.ownerType} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Locality</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.locality} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Region</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.region} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street One</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Two (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.streetTwo} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Three (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.streetThree} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Postal Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.postalCode} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Post Office Box Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.address.postOfficeBoxNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Relative Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.relative.name} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Relative Relation</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.owner.relative.relation} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->

                    <h3 class="form-section">Farm Location</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Survey Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmLocation.surveyNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>State</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmLocation.state} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Village</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmLocation.village} </p>
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
                                    <p class="form-control-static"> ${data.farm.farmLocation.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Latitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmLocation.gpsCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="form-section">Level One Verification</h3>
                    <h3 class="form-section">Level Two Verification</h3>
                    <div id="showPonds">
                    
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
        $.getJSON('http://137.117.82.58:8000/api/v0/farms/' + searchField, function(data) {
            $.each(data.farm.ponds.forEach(function(v) {

                // for(var i=0; i<=counter; i++){

                $("#result1").append(`
            <form class="form-horizontal">
                <div class="form-body">
                    <h3 class="form-section">Pond Details</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Pond Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${v.pondNumber} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Longitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${v.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Latitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${v.gpsCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Culture Area</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${v.cultureArea} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/row-->
                </div>
            </form>

        `);

                // }


                // counter++;
                // console.log(counter);
                console.log(v.pondNumber);
                console.log(v.cultureArea);
                console.log(v.gpsCoordinates.longitude);
                console.log(v.gpsCoordinates.latitude);
            }))
        })
    })
})