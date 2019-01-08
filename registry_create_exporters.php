<?php
    $__title = 'TATA SHRIMP PILOT | Create Exporters';
    $__description = 'Pilot Programme for Tata Shrimp using Blockchain Technology';
?>

<?php include('include/header.php'); ?>

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid">
    
    <?php include('include/topbar.php'); ?>
    <!-- BEGIN CONTAINER -->
    <div class="page-container">
    <?php include('include/sidebar.php'); ?>
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
            <!-- BEGIN CONTENT BODY -->
            <div class="page-content extra-padding">
                <!-- BEGIN PAGE HEADER-->

                <div class="page-bar">
                    <ul class="page-breadcrumb">
                        <li>
                            <i class="icon-home"></i>
                            <a href="dashboard.php">Home</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Farmer</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Registries</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Exporter</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Create New Exporter</span>
                        </li>
                    </ul>
                </div>
                <div class="page-bar" id="pht_pg_bar">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="portlet-body form">
                                <form class="form-horizontal">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="col-md-12">
                                                    <div class="col-md-9">
                                                        <input type="text" id="search" class="form-control" id="phtcerti_id" name="phtCertificateId" placeholder="Enter ID" required>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <center><button type="submit" class="btn green btn_btn" id="searchExporterData">Search</button></center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/span-->
                                        <div class="portlet-body form" id="result"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END PAGE HEADER-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_0">
                                    <div class="portlet light ">
                                        <div class="portlet-body form">
                                            <h1 class="page-title"> Register New Exporter</h1>
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addexporter" name="addexporter" method="POST">
                                                <div class="form-body">
                                                    <!-- <h3 class="form-section">Person Info</h3> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Exporter ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="exporter_id" name="exporterId" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Exporter Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="exporter_name" name="exporterName" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Exporter Type</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="exporter_type" name="exporterType" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Type</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="company_type" name="companyType" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">EIA Code</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="eia_code" name="eiaCode" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Capital Employed</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="capital_emp" name="capitalEmployed" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Estimated Turnover (in Rupees)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="estimated_turnover" name="estimatedTurnover" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">SSI Number</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="ssi_number" name="ssiNumber" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Signatory</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="signatory" name="signatory" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Relation Of Signatory</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="relation_of_signatory" name="relationOfSignatory" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date Of Establishment</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker6">
                                                                    <input type="text" class="form-control" id="date_of_establishment" name="dateOfEstablishment" required="">
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date Of Registration</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker7">
                                                                    <input type="text" class="form-control" id="date_of_registration" name="dateOfRegistration" required="">
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date Of Expiration</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker8">
                                                                    <input type="text" class="form-control" id="date_of_expiration" name="dateOfExpiration" required="">
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Frozen Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="frozen_marine_products" class="form-control" required name="frozenMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Canned Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="canned_marine_products" class="form-control" required="" name="cannedMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Freeze Dried Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="freeze_dried_marine_products" class="form-control" required="" name="freezeDriedMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Live Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="live_marine_products" class="form-control" required="" name="liveMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Dried Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="dried_marine_products" class="form-control" required="" name="driedMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Chilled Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <select id="chilled_marine_products" class="form-control" required="" name="chilledMarineProducts">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Other Marine Products</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="other_marine_products" name="otherMarineProducts[]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Brand Names</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="brand_names" name="brandNames[]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Product Types</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="product_types" name="productTypes[]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Foreign Holdings</label>
                                                                <div class="col-md-8">
                                                                    <select id="foreign_holdings" class="form-control" required="" name="foreignHoldings">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Connection With Forein Sea food Companies</label>
                                                                <div class="col-md-8">
                                                                    <select id="con_with_for_food_company" class="form-control" required="" name="connectionWithForeinSeafoodCompanies">
                                                                        <option value="true">Yes</option>
                                                                        <option value="false">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->

                                                    <h3 class="form-section">Address</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">City</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="city" name="address[city]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Country</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="country" name="address[country]" required="" disabled="" value="India">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Locality</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="locality" name="address[locality]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Region</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="region" name="address[region]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street One</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_one" name="address[streetOne]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street Two (optional)</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_two" name="address[streetTwo]">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street Three (optional)</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_three" name="address[streetThree]">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Postal Code</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="postal_code" name="address[postalCode]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Post Office Box Number</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="po_box_no" name="address[postOfficeBoxNumber]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3 class="form-section">Owner Details</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Owner Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="owner_name" name="owner[ownerName]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">City</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="city_o" name="owner[address][city]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Country</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="country_o" name="owner[address][country]" required="" disabled="" value="India">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Locality</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="locality_o" name="owner[address][locality]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Region</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="region_o" name="owner[address][region]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street One</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_one_o" name="owner[address][streetOne]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street Two (optional)</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_two_o" name="owner[address][streetTwo]">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street Three (optional)</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="street_three_o" name="owner[address][streetThree]">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Postal Code</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="postal_code_o" name="owner[address][postalCode]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Post Office Box Number</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="po_box_no_o" name="owner[address][postOfficeBoxNumber]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <center><button type="submit" class="btn green btn_sbmt">Submit</button></center>
                                                            <!-- <button type="button" class="btn default">Cancel</button> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="col-md-6"> </div> -->
                                            </div>
                                        </div>
                                        </form>
                                        <!-- END FORM-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END CONTENT BODY -->
    </div>
    <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->
    <?php include('include/footer.php'); ?>