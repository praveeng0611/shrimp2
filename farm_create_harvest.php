<?php
    $__title = 'TATA SHRIMP PILOT | Create Harvest';
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
                <h1 class="page-title"> <!-- Create New Harvest -->
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
                            <span>Farmer</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Shrimp</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Harvest</span>
                        </li>
                    </ul>

                </div>
                <!-- END PAGE HEADER-->

                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <div class="">
                                <div class="" id="">
                                    <div class="portlet light ">
                                        <div class="portlet-body form">
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addHarvest" name="addHarvest" method="POST">
                                                <div class="form-body">
                                                    <!-- <h3 class="form-section">Person Info</h3> -->
                                                    <div id="addHatchery">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-2">
                                                                    <? echo $langs['hatchery']; ?>
                                                                    </label>
                                                                    <div class="col-md-3">
                                                                        <select id="hatchery" class="form-control" name="hatcheries" required="">
                                                                        </select>
                                                                    </div>
                                                                    <!-- <div class="col-sm-3">
                                                                        <a href="" id="addHatcherybtn" class="pull-left">Add more</a>

                                                                        <a href="" id="remHatcherybtn" class="pull-left">Remove</a>
                                                                    </div> -->
                                                                </div>
                                                            </div>

                                                            <!--/span-->
                                                        </div>
                                                        <!--/row-->
                                                    </div>

                                                    <div id="addFeeds">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-2">Feeds</label>
                                                                    <div class="col-md-3">
                                                                        <input type="text" class="form-control" required="" id="feed_suplier" name="feeds">
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <a href="" id="addFeedsbtn" class="pull-left">Add more</a>

                                                                        <a href="" id="remFeedsbtn" class="pull-left">Remove</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--/span-->
                                                        </div>
                                                        <!--/row-->
                                                    </div>

                                                    <div id="addSupp">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-2">Supplements</label>
                                                                    <div class="col-md-3">
                                                                        <input type="text" class="form-control" required="" id="supplements" name="supplements">
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <a href="" id="addSuppbtn" class="pull-left">Add more</a>

                                                                        <a href="" id="remSuppbtn" class="pull-left">Remove</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--/span-->
                                                        </div>
                                                        <!--/row-->
                                                    </div>
                                                    <!-- <video id="preview"></video> -->
                                                    <div id="qr"></div>
                                                    <div class="feedback"></div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">


                                                                <label class="control-label col-md-2">Species Cultured</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" value="L. Vannamei" disabled="" id="species_cultured">
                                                                </div>

                                                                <label class="control-label col-md-2">QR Code</label>
                                                                <div class="col-md-5 input-group date_date" id="id_qr">
                                                                    <input type="text" class="form-control" name="" id="qr_code">
                                                                    <span class="input-group-addon" id="scan"><i class="glyphicon glyphicon-camera" id="cam"></i></span>

                                                                </div>
                                                                <button id="stop" class="btn btn dark btn-sm disabled pull-right">stop scanning</button>
                                                                <button id="change" class="btn btn dark btn-sm disabled pull-right">change camera</button>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>
                                                    <!--/row-->

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2">Pond No.</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" name="" id="pond_no">
                                                                </div>

                                                                <label class="control-label col-md-2">Farm ID</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="farm_id">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2">Count</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" name="" id="_count">
                                                                </div>

                                                                <label class="control-label col-md-2">Total Weight</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" name="" class="form-control" id="total_weight">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">

                                                                <label class="control-label col-md-2" hidden>Container No</label>
                                                                <div class="col-md-3" hidden>
                                                                    <input type="text" name="" class="form-control" id="cont_no" value="1">
                                                                </div>

                                                                <label class="control-label col-md-2">Container Count</label>
                                                                <div class="col-md-3">
                                                                    <input type="text" class="form-control" name="" id="container_count">
                                                                </div>
                                                                <label class="control-label col-md-2">PHT Certificate</label>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="append_pht">
                                                                        <option>Select PHT Certificate</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-2" hidden>Container Weight</label>
                                                                <div class="col-md-3" hidden>
                                                                    <input type="text" name="" class="form-control" id="cont_weight" value="1">
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-2">PHT Certificate</label>
                                                                    <div class="col-md-3">
                                                                        <select class="form-control" id="append_pht">
                                                                            <option>Select PHT Certificate</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->

                                                    <!-- <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-2">PHT Certificate</label>
                                                                    <div class="col-md-2" id="phtcer">
                                                                        Certificate ID
                                                                    </div>
                                                                    <div class="col-md-2" id="phtcer">
                                                                        Pond ID
                                                                    </div>
                                                                    <div class="col-md-2" id="phtcer">
                                                                        Weight
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