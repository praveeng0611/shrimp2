<?php
    $__title = 'TATA SHRIMP PILOT | Create PHP Certificate';
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
                <!-- BEGIN THEME PANEL -->
                <div class="theme-panel">
                </div>
                <!-- END THEME PANEL -->
                <div class="page-bar">
                    <ul class="page-breadcrumb">
                        <li>
                            <i class="icon-home"></i>
                            <a href="dashboard.php">Home</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>PHT LAB</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Create PHT Certificates</span>
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
                                                        <input type="text" id="search" class="form-control" name="phtCertificateId" placeholder="Enter PHT Certificate ID" required>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <center><button type="submit" class="btn green btn_btn" id="searchPHTCertificateData">Search</button></center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="result"></div>
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
                                            <h1 class="page-title"> Register New PHT Certificates
                                                <!-- <small>form layouts</small> -->
                                            </h1>
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addphtCertificate" name="addphtCertificate" method="POST">
                                                <div class="form-body">
                                                    <!-- <h3 class="form-section">Person Info</h3> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">PHT Certificate Id</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="phtcerti_id" name="phtCertificateId" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Expected Production (tonnes)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="expected_production" name="expectedProduction" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date Of Issue</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker6">
                                                                    <input type="text" class="form-control" id="dt_of_issue" name="dateOfIssue" required>
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date of Collection</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker8">
                                                                    <input type="text" class="form-control" id="dt_of_coll" name="dateOfCollection" required>
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
                                                                <label class="control-label col-md-4">Date of Analysis</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker7">
                                                                    <input type="text" class="form-control" id="dt_of_anlys" name="dateOfAnalysis" required>
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Valid Up To</label>
                                                                <div class="col-md-8 input-group date date_date">
                                                                    <input type="text" class="form-control" id="valid_up_to" name="validUpto" required disabled="">
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->
                                                    <h3 class="form-section">Farm Details</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Farm ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="farm_id" name="farmId" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Farm’s PHT Registration ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="farm_pht_reg_id" name="farmPhtRegistrationId" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Farm Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="farm_name" name="farmName" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Farmer's Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="farmer_name" name="farmerName" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->


                                                    <h3 class="form-section">Request Details</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Phone Number</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="caller_phone_number" name="requestDetails[phoneNumber]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Date of Request</label>
                                                                <div class="col-md-8 input-group date date_date" id="datetimepicker9">
                                                                    <input type="text" class="form-control" id="date_of_request" name="requestDetails[requestDate]" required>
                                                                    <span class="input-group-addon">
                                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Caller Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="caller_name" name="requestDetails[callerName]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">PHT Request ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="pht_req_id" name="requestDetails[phtRequestId]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->
                                                    <!--/row-->
                                                    <h3 class="form-section">Sample Details</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Pond ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="pond_id" name="sampleDetails[pondId]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Sample collector</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="sample_collector" name="sampleDetails[sampleCollector]" required="">
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Sample ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="sample_id" name="sampleDetails[sampleId]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Longitude</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="longitude" name="sampleDetails[pondCoordinates][longitude]" required=""> </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">

                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Latitude</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="latitude" name="sampleDetails[pondCoordinates][latitude]" required=""> </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <h3 class="form-section">Payment Details</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Testing Fee (Rs)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="testing_fee" name="paymentDetails[testingFee]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Receipt Serial Number</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="receipt_serial_number" name="paymentDetails[receiptSerialNumber]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Payment Status</label>
                                                                <div class="col-md-8">
                                                                    <select id="payment_status" class="form-control" required name="paymentDetails[paymentStatus]">
                                                                        <option value="Option1">Option1</option>
                                                                        <option value="Option2">Option2</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <h3 class="form-section">Test Results</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Chloramphenicol (ppm)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="chloramphenicol" name="phtTestResults[chloramphenicol]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Aoz (ppm)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="aoz" name="phtTestResults[aoz]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Amoz (ppm)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="amoz" name="phtTestResults[amoz]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Ahd (ppm)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="ahd" name="phtTestResults[ahd]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Sem (ppm)</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="sem" name="phtTestResults[sem]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Test Method</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="test_method" name="phtTestResults[testMethod]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Analyzed by</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="analyzed_by" name="phtTestResults[analyzedBy]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Verified by</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="verified_by" name="phtTestResults[verifiedBy]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Authorized by</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="authorized_by" name="phtTestResults[authorizedBy]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--/row-->
                                                </div>
                                                <div class="form-actions">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <center><button type="submit" class="btn green btn_sbmt">Submit</button></center>
                                                                </div>
                                                            </div>
                                                        </div>
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