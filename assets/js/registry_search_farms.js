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
        var date = new Date(data.farm.dateOfRegistration);
        var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
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
                                <label class="control-label col-md-4"><b>Farm ID</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
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
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Farmer Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.farmerName} </p>
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
                                <label class="control-label col-md-4"><b>Status</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.isActive} </p>
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
                                <label class="control-label col-md-4"><b>Date Of Registration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${cleanedDate} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    
                    <h3 class="form-section">Address</h3>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Building</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.address.building} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.address.city} </p>
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
                                    <p class="form-control-static"> ${data.farm.address.pinCode} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>State</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.address.state} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.address.country} </p>
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
                                    <p class="form-control-static"> ${data.farm.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Latitude</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.farm.gpsCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
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

// $(document).ready(function(){
//     $('#searchFarmData').click(function(e){
//       e.preventDefault();
//       var token = localStorage.getItem("token");
//       var searchField = $('#search').val();
//       var exp = new RegExp(searchField, "i");
//       $.ajaxSetup({
//         headers: {'x-access-token' : token}
//       });
// $.getJSON('http://40.114.127.62:8000/api/v0/farms/'+searchField, function(data) {
//     $.each(data.farm.ponds.forEach(function(v){

//       // for(var i=0; i<=counter; i++){

//       $("#result1").append(`
//             <form class="form-horizontal">
//                 <div class="form-body">
//                     <h3 class="form-section">Pond Details</h3>
//                     <div class="row">
//                         <div class="col-md-4">
//                             <div class="form-group">
//                                 <label class="control-label col-md-4"><b>Pond Number</b></label>
//                                 <div class="col-md-8">
//                                     <p class="form-control-static"> ${v.pondNumber} </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <!--/span-->
//                         <div class="col-md-4">
//                             <div class="form-group">
//                                 <label class="control-label col-md-4"><b>Longitude</b></label>
//                                 <div class="col-md-8">
//                                     <p class="form-control-static"> ${v.gpsCoordinates.longitude} </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <!--/span-->
//                         <div class="col-md-4">
//                             <div class="form-group">
//                                 <label class="control-label col-md-4"><b>Latitude</b></label>
//                                 <div class="col-md-8">
//                                     <p class="form-control-static"> ${v.gpsCoordinates.latitude} </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <!--/span-->
//                     </div>
//                     <!--/row-->
//                     <div class="row">
//                         <div class="col-md-4">
//                             <div class="form-group">
//                                 <label class="control-label col-md-4"><b>Culture Area</b></label>
//                                 <div class="col-md-8">
//                                     <p class="form-control-static"> ${v.cultureArea} </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!--/row-->
//                 </div>
//             </form>

//         `);

//       // }


//           // counter++;
//           // console.log(counter);
//       console.log(v.pondNumber);
//       console.log(v.cultureArea);
//       console.log(v.gpsCoordinates.longitude);
//       console.log(v.gpsCoordinates.latitude);
//     }))
// })
// })
// })