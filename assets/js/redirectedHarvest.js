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
        $.getJSON('http://137.117.82.58:8000/api/v0/shrimp/harvest/' + param1, function(data) {
            var date = new Date(data.harvest.dateOfCreation);
            var cleanedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            var date1 = new Date(data.harvest.dateOfSale);
            var cleanedDate1 = `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
            if (data.message == 'No such farm found') {
                alert('Invalid Id :' + param1);
                $.LoadingOverlay("hide");
            } else if (data.error == undefined) {
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
                                    <p class="form-control-static"> ${data.harvest.qr}</p>
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
                                    <p class="form-control-static"> ${data.harvest.phtId} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>PHT Expired</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.harvest.isPhtExpired} </p>
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
                    // $.LoadingOverlay("hide");
                });
            } else {
                alert(data.error.message);
                // $.LoadingOverlay("hide");
            }
        });