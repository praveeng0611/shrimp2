// add ponds
var counter = 0;
$(function() {

    $("#addPondbtn").click(function(e) {
        e.preventDefault();
        $("#addPond").append(`
                <div id='addPond'>
                    <h3 class="form-section">Pond Details</h3>
                        <!--/row-->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-4">Pond Number</label>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" id="pond_no" name="ponds[][pondNumber]" required="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-4">Culture Area</label>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" id="culture_area" name="ponds[][cultureArea]" required>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-4">Longitude</label>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" id="longitude_p" name="ponds[gpsCoordinates][longitude]" required>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label col-md-4">Latitude</label>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" id="latitude_p" name="ponds[gpsCoordinates][latitude]" required>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                </div>

              `);
        counter++;
        console.log(counter);
        $("#removePondbtn").show();
    });

});

// remove ponds

$(document).ready(function() {
    $("#removePondbtn").click(function(e) {
        e.preventDefault();
        if (counter == 0) {
            alert("No more ponds to remove");
            return false;
        }

        counter--;
        console.log(counter);
        $("div#addPond:last").remove();

    });
});