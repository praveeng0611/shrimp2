<?php
    $__title = 'TATA SHRIMP PILOT | Create Suppliment';
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
                            <span>Registries</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Register Supplement</span>
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
                                                        <input type="text" id="search" class="form-control" id="phtcerti_id" name="phtCertificateId" placeholder="Enter Suppliment ID" required>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <center><button type="submit" class="btn green btn_btn" id="searchSupplimentData">Search</button></center>
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
                                            <h1 class="page-title"> Register New Supplement</h1>
                                            <!-- BEGIN FORM-->
                                            <form class="form-horizontal" id="addsuppliment" name="addprocessor" method="POST">
                                                <div class="form-body">
                                                    <!-- <h3 class="form-section">Person Info</h3> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="_name" name="name" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="control-label col-md-4">Company Name</label>
                                                                <div class="col-md-8">
                                                                    <input type="text" class="form-control" id="company_name" name="companyName" required="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--/span-->
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