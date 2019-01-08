<?php
    $__title = 'TATA SHRIMP PILOT - Create SKU';
    $__description = 'Pilot Programme for Tata Shrimp using Blockchain Technology';
?>

<?php include('include/header.php'); ?>

<body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid">
    <?php include('include/topbar.php'); ?>

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
                <h1 class="page-title">
                    <!-- Processor cliams new SKU -->
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
                            <span>Claim new SKU</span>
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
                                            <form class="form-horizontal" id="addSKU" name="addSKU" method="POST">
                                                <div class="form-body">

                                                    <!-- <video id="preview"></video> -->
                                                    <div id="qr"></div>
                                                    <div class="feedback"></div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">

                                                                <label class="control-label col-md-2">QR Code</label>
                                                                <div class="col-md-5 input-group date_date" id="id_qr">
                                                                    <input type="text" class="form-control" name="" id="qr_code">
                                                                    <span class="input-group-addon" id="scan"><i class="glyphicon glyphicon-camera"
                                                                            id="cam"></i></span>

                                                                </div>
                                                                <button id="stop1" class="btn btn dark btn-sm disabled pull-left">stop
                                                                    scanning</button>
                                                                <button id="change1" class="btn btn dark btn-sm disabled pull-left">change
                                                                    camera</button>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2">Species Cultured</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control"
                                                                        value="L. Vannamei" disabled="" id="species_cultured">
                                                                </div>

                                                                <label class="control-label col-md-2">SKU Type</label>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="sku_type">
                                                                        <option value="Type1">Type1</option>
                                                                        <option value="Type2">Type2</option>
                                                                        <option value="Type3">Type3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2">Processor ID</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" name="" id="processor_id">
                                                                </div>

                                                                <label class="control-label col-md-2">Output Weight</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="output_weight">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">

                                                                <label class="control-label col-md-2">Select Harvest</label>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="append_harvestedShrimpQR">
                                                                        <option>Select Harvested Shrimp</option>
                                                                    </select>
                                                                </div>

                                                                <label class="control-label col-md-2">Weight Claimed</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" name="" id="weight_claimed">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2">Count</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="count">
                                                                </div>

                                                                <label class="control-label col-md-2">Container Number</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="cont_number">
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">

                                                                <label class="control-label col-md-2">Container Weight</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="cont_weight">
                                                                </div>
                                                                <label class="control-label col-md-2">Container Count</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="cont_count">
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