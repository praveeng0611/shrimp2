<?php
    $__title = 'TATA SHRIMP PILOT | Search Harvest';
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
                            <span>Shrimp</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Search Harvest</span>
                        </li>
                    </ul>
                </div>
                <!-- END PAGE HEADER-->
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
                                                    <input type="text" id="search" class="form-control" name="phtCertificateId" placeholder="Enter Harvest ID" required>
                                                </div>
                                                <div class="col-md-3">
                                                    <center><button type="submit" class="btn green btn_btn" id="searchHarvestData">Search</button></center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/span-->
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <div class="">
                                <div class="" id="">
                                    <div class="portlet light ">
                                        <div class="portlet-body form" id="result">
                                            <h1 class="page-title">Harvest Details</h1>
                                            <!-- BEGIN FORM-->

                                            <!-- END FORM-->
                                        </div>
                                        <div class="portlet-body form" id="result2">
                                            <!-- BEGIN FORM-->

                                            <!-- END FORM-->
                                        </div>
                                        <div class="portlet-body form" id="result1">
                                            <!-- BEGIN FORM-->

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