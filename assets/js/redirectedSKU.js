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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/processed/' + param1, function(data) {

            if (data.message == 'Internal error') {
                alert('Invalid Id :' + param1);
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
                    
                });
            } else {
                alert(data.error.message);
                
            }
        });