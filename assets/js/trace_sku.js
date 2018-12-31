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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/processed/' + searchField + '/lifecycle', function(data) {
            var date = new Date(data.processedShrimp.dateOfCreation);
            var creationDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var date1 = new Date(data.harvestedShrimp.dateOfCreation);
            var creationDate1 = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
            var date3 = new Date(data.harvestedShrimp.dateOfSale);
            var saleDate = `${date3.getDate()}-${date3.getMonth() + 1}-${date3.getFullYear()}`;
            var date4 = new Date(data.farm.dateOfRegistration);
            var regDate = `${date4.getDate()}-${date4.getMonth() + 1}-${date4.getFullYear()}`;
            if (data.message == 'Internal error') {
                alert('Invalid QR :' + searchField);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
                setTimeout(function() {
                    $.each(data, function() {
                        $('#result').html(`
              <form class="form-horizontal">
                <div class="form-body">
                    <h3 class="form-section">Processed Shrimp</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Processed Shrimp QR</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.qr} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Species Cultured</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.speciesCultured} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>SKU Type</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.skuType} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>processor ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Present</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.isPhtPresent} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Harvest Over Claimed</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.isHarvestOverclaimed} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Over Claimed</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.isPhtOverlaimed} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Expired</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.isPhtExpired} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Output Weight</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.outputWeight} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Date</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${creationDate} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Harvested Shrimp QR</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.inputHarvest.harvestedShrimpQr} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Weight Claimed</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.inputHarvest.weightClaimed} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Count</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processedShrimp.count} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section">Harvested Shrimp</h3>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Harvested Shrimp QR</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.qr} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Species Cultured</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.speciesCultured} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Farm ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.farmId} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Pond Number</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.pondNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Count</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.count} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Weight</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.weight} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Date</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${creationDate1} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Feeds</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.feeds} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Supplements</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.supplements} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Hatchery</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.hatchery} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Container Weight</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.containers[0].weight} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Container Count</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.containers[0].count} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Container Number</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.containers[0].number} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.phtId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Expired</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.isPhtExpired} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Present</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.isPhtPresent} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Spent by Farm</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.spentByFarm} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Sate of Sale</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.stateOfSale} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Proposed Processor ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.proposedProcessorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Sold by Farm</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.soldByFarm} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Accepted by Processor</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.acceptedByProcessor} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Rejected by Processor</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.rejectedByProcessor} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Processor ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Date of Sale</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${saleDate} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Spent by Processor</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.harvestedShrimp.spentByProcessor} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section">Farm Details</h3>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Farm ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.farmId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Farm Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.farmName} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Farmer Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.farmerName} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Total Area</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.totalArea} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Water Spread Area</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.waterSpreadArea} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Building</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.building} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Street</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>City</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Pin Code</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.pinCode} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>State</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.state} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Country</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Longitude</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Latitude</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.gpsCoordinates.latitude} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>PHT Registration ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.phtRegistrationId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Regitration Date</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${regDate} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Pond Number</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.pond[0].pondNumber} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Culture Area</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.farm.pond[0].cultureArea} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section">Processor Details</h3>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Processor ID</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.processorId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Processor Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.processorName} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Processor Owner Name</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.processorOwnerName} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Building</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.address.building} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Street</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>City</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.address.city} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>State</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.address.state} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Country</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Longitude</b></label>
                                <div class="col-md-6">
                                    <p class="form-control-static"> ${data.processor.gpsCoordinates.longitude} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-6"><b>Latitude</b></label>
                                <div class="col-md-6">
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