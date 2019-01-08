<?php
    $__title = 'TATA SHRIMP PILOT | Create Processor';
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
                            <span>Farmer</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Registries</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Processors</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Register Processor</span>
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
                                                        <input type="text" id="search" class="form-control" name="phtCertificateId" placeholder="Enter Processor ID" required>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <center><button type="submit" class="btn green btn_btn" id="searchProcessorData">Search</button></center>
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
                                            <h1 class="page-title"> Register New Processor</h1>
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addprocessor" name="addprocessor" method="POST">
                                                <div class="form-body">
                                                    <!-- <h3 class="form-section">Person Info</h3> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Processor ID</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="processor_id" name="processorId" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Processor Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="processor_name" name="processorName" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Processor Owner Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="processor_owner_name" name="processorOwnerName" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Status</label>
                                                                <div class="col-md-8">
                                                                    <select id="is_active" class="form-control" name="isActive" required="">
                                                                        <option value="true">Active</option>
                                                                        <option value="false">Inactive</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h3 class="form-section">Address</h3>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Building</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="building" name="address[building]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Street</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="srt_one" name="address[streetOne]" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                                <label class="control-label col-md-4">Pin Code</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="pin_code" name="address[pinCode]" required="">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <!--/row-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">State</label>
                                                                <div class="col-md-8">
                                                                    <select id="state" name="address[state]" class="form-control" required="">
                                                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                                        
                                                                    </select>
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
                                                                <label class="control-label col-md-4">Longitude</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="longitude" name="gpsCoordinates[longitude]" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Latitude</label>
                                                                <div class="col-md-8">
                                                                    <input type="number" class="form-control" id="latitude" name="gpsCoordinates[latitude]" required>
                                                                    <p id="#errorLatLng"></p>
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