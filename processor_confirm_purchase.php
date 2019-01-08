<?php
    $__title = 'TATA SHRIMP PILOT | Confirm Purchase';
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
            <div class="page-content">
                <!-- BEGIN PAGE HEADER-->
                <!-- BEGIN THEME PANEL -->
                <div class="theme-panel">

                </div>
                <!-- END THEME PANEL -->
                <h1 class="page-title"> <!-- Processor – Confirm Purchase -->
                    <!-- <small>form layouts</small> -->
                </h1>

                <div class="page-bar">
                    <ul class="page-breadcrumb">
                        <li>
                            <i class="icon-home"></i>
                            <a href="dashboard.php">Home</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Processors</span>
                            <i class="fa fa-angle-right"></i>
                        </li>

                        <li>
                            <span>Confirm Purchase</span>
                        </li>
                    </ul>
                </div>
                <!-- END PAGE HEADER-->

                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_0">
                                    <div class="portlet light ">
                                        <div class="portlet-body form">
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addHarvest" name="addHarvest" method="POST">
                                                <div class="form-body">
                                                    <div id="qr"></div>
                                                    <div class="feedback"></div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">QR Code</label>
                                                                <div class="col-md-8 input-group date_date">
                                                                    <input type="text" class="form-control" name="" id="qr_code">
                                                                    <span class="input-group-addon" id="scan"><i class="glyphicon glyphicon-camera" id="cam"></i></span>

                                                                </div>
                                                                <button id="stop" class="btn btn dark btn-sm disabled pull-right" style="margin-right: 15px !important;">stop scanning</button>
                                                                <button id="change" class="btn btn dark btn-sm disabled pull-right">change camera</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <button type="button" id="get_harvest_details" class="btn green">VIEW</button>
                                                        </div>
                                                    </div>

                                                    <h3 class="form-section">Harvest Details</h3>
                                                    <form class="form-horizontal">
                                                        <div class="form-body">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Date of harvest</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static" id="dt_of_harvest"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Species Cultured</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static" id="sp_cul"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Pond No</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static" id="pond_no"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Farm ID</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static" id="farm_id"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Container Count</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static" id="con_count"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4" id="tot_weight"><b>Total Weight</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                    <h3 class="form-section">PHT Certificate</h3>
                                                    <form class="form-horizontal">
                                                        <div class="form-body">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>PHT Certificate ID</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Species Cultured</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>PHT ID</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Farm ID</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Farmer Name</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-4"><b>Total Area</b></label>
                                                                        <div class="col-md-8">
                                                                            <p class="form-control-static"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                    <!-- <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Confirm Container Count</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" disabled="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Internal tracking No</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" disabled="">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                </div>

                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <button type="submit" class="btn green btn_btn_btn" id="confirm_receipt">Confirm Receipt</button>
                                                            <!-- <button type="button" class="btn default">Cancel</button> -->
                                                        </div>
                                                        <div class="col-md-2">
                                                            <button type="submit" class="btn grey btn_btn_btn">Go Back</button>
                                                            <!-- <button type="button" class="btn default">Cancel</button> -->
                                                        </div>
                                                        <div class="col-md-2">
                                                            <button type="submit" class="btn red btn_btn_btn">Reject</button>
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