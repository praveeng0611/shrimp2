(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }
    var jsonData;

    document.addEventListener("DOMContentLoaded", function() {
        var isError = false;
        var form = document.getElementById("addexporter");
        var output = document.getElementById("output");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var json = toJSONString(this);
            //var json = toJSONString($("#form").serialize());
            jsonData = json;
            localStorage.setItem("jsonData", jsonData);
            //window.alert(json);
            var token = localStorage.getItem("token");


            var fData = {


                "exporterId": $("#exporter_id").val(),
                "exporterName": $("#exporter_name").val(),
                "exporterType": $("#exporter_type").val(),
                "companyType": $("#company_type").val(),
                "eiaCode": parseInt($("#eia_code").val()),
                "capitalEmployed": parseInt($("#capital_emp").val()),
                "estimatedTurnover": parseInt($("#estimated_turnover").val()),
                "ssiNumber": parseInt($("#ssi_number").val()),
                "address": {

                    "city": $("#city").val(),
                    "country": $("#country").val(),
                    "locality": $("#locality").val(),
                    "region": $("#region").val(),
                    "streetOne": $("#street_one").val(),
                    "streetTwo": $("#street_two").val(),
                    "streetThree": $("#street_three").val(),
                    "postalCode": $("#postal_code").val(),
                    "postOfficeBoxNumber": $("#po_box_no").val(),

                },
                "owner": {

                    "ownerName": $("#owner_name").val(),
                    "address": {

                        "city": $("#city_o").val(),
                        "country": $("#country_o").val(),
                        "locality": $("#locality_o").val(),
                        "region": $("#region_o").val(),
                        "streetOne": $("#street_one_o").val(),
                        "streetTwo": $("#street_two_o").val(),
                        "streetThree": $("#street_three_o").val(),
                        "postalCode": $("#postal_code_o").val(),
                        "postOfficeBoxNumber": $("#po_box_no_o").val(),

                    }

                },
                "signatory": $("#signatory").val(),
                "relationOfSignatory": $("#relation_of_signatory").val(),
                "dateOfEstablishment": $("#date_of_establishment").val(),
                "dateOfRegistration": $("#date_of_registration").val(),
                "dateOfExpiration": $("#date_of_expiration").val(),
                "frozenMarineProducts": eval($("#frozen_marine_products").val()),
                "cannedMarineProducts": eval($("#canned_marine_products").val()),
                "freezeDriedMarineProducts": eval($("#freeze_dried_marine_products").val()),
                "liveMarineProducts": eval($("#live_marine_products").val()),
                "driedMarineProducts": eval($("#dried_marine_products").val()),
                "chilledMarineProducts": eval($("#chilled_marine_products").val()),
                "otherMarineProducts": [
                    $("#other_marine_products").val()
                ],
                "brandNames": [
                    $("#brand_names").val()
                ],
                "productTypes": [
                    $("#product_types").val()
                ],
                "foreignHoldings": eval($("#foreign_holdings").val()),
                "connectionWithForeinSeafoodCompanies": eval($("#con_with_for_food_company").val())

            };

            if ($("#exporter_id").val() === "" ||
                $("#exporter_name").val() === "" ||
                $("#exporter_type").val() === "" ||
                $("#company_type").val() === "" ||
                $("#eia_code").val() === "" ||
                $("#capital_emp").val() === "" ||
                $("#estimated_turnover").val() === "" ||
                $("#ssi_number").val() === "" ||
                $("#city").val() === "" ||
                $("#country").val() === "" ||
                $("#locality").val() === "" ||
                $("#region").val() === "" ||
                $("#street_one").val() === "" ||
                $("#street_two").val() === "" ||
                $("#street_three").val() === "" ||
                $("#postal_code").val() === "" ||
                $("#po_box_no").val() === "" ||
                $("#owner_name").val() === "" ||
                $("#city_o").val() === "" ||
                $("#country_o").val() === "" ||
                $("#locality_o").val() === "" ||
                $("#region_o").val() === "" ||
                $("#street_one_o").val() === "" ||
                $("#street_two_o").val() === "" ||
                $("#street_three_o").val() === "" ||
                $("#postal_code_o").val() === "" ||
                $("#po_box_no_o").val() === "" ||
                $("#signatory").val() === "" ||
                $("#relation_of_signatory").val() === "" ||
                $("#date_of_establishment").val() === "" ||
                $("#date_of_registration").val() === "" ||
                $("#date_of_expiration").val() === "" ||
                $("#other_marine_products").val() === "" ||
                $("#brand_names").val() === "" ||
                $("#product_types").val() === "")

            {
                $.LoadingOverlay("hide");
                return false;
            } else {
                $.LoadingOverlay("show");
            }

            $.ajax({
                type: 'POST',
                url: 'http://137.117.82.58:8000/api/v0/exporters',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                crossDomain: true,
                dataType: 'json',
                //data: localStorage.getItem("jsonData"),
                //contentType: 'application/json; charset=utf-8',
                //data: $("form").serializeArray(),
                //data: JSON.stringify($("form").serialize()),
                data: JSON.stringify(fData),
                success: function(data) {

                    if (data.error == undefined) {
                        alert(data.message);
                        $("#addexporter").trigger("reset");
                        $.LoadingOverlay("hide");
                    } else {
                        alert(data.error.message);
                        $.LoadingOverlay("hide");
                    }

                }
            });

        }, false);

    });

})();

// Search Exporter
$(document).ready(function() {
    $('#searchExporterData').click(function(e) {
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
        $.getJSON('http://137.117.82.58:8000/api/v0/exporters/' + searchField, function(data) {

            if (data.message == 'No such exporters found') {
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
                                <label class="control-label col-md-4"><b>Exporter Id</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.exporterId} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Exporter Name</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.exporterName} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Exporter Type</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.exporterType} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Company Type</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.companyType} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>EIA Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.eiaCode} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Capital Employed</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.capitalEmployed} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Estimated Turnover (in Rupees)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.estimatedTurnover} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Signatory</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.signatory} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Relation Of Signatory</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.relationOfSignatory} </p>
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
                                    <p class="form-control-static"> ${data.exporter.dateOfEstablishment} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Registration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.dateOfRegistration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Date Of Expiration</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.dateOfExpiration} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Frozen Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.frozenMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Canned Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.cannedMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Freeze Dried Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.freezeDriedMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Live Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.liveMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Dried Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.driedMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Chilled Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.chilledMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Other Marine Products</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.otherMarineProducts} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Brand Names</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.brandNames} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Product Types</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.productTypes} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                    </div>
                    <!--/row-->
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Foreign Holdings</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.foreignHoldings} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Connection With Forein Sea food Companies</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.connectionWithForeinSeafoodCompanies} </p>
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
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.country} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Locality</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.locality} </p>
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
                                    <p class="form-control-static"> ${data.exporter.address.region} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street One</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.streetOne} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Two (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.streetTwo} </p>
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
                                    <p class="form-control-static"> ${data.exporter.address.streetThree} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Postal Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.postalCode} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Post Office Box Number</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.address.postOfficeBoxNumber} </p>
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
                                    <p class="form-control-static"> ${data.exporter.owner.ownerName} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>City</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.city} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Country</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.country} </p>
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
                                    <p class="form-control-static"> ${data.exporter.owner.address.locality} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Region</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.region} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street One</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.streetOne} </p>
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
                                    <p class="form-control-static"> ${data.exporter.owner.address.streetTwo} </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Street Three (optional)</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.streetThree} </p>
                                </div>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label col-md-4"><b>Postal Code</b></label>
                                <div class="col-md-8">
                                    <p class="form-control-static"> ${data.exporter.owner.address.postalCode} </p>
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
                                    <p class="form-control-static"> ${data.exporter.owner.address.postOfficeBoxNumber} </p>
                                </div>
                            </div>
                        </div>
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