<?php
    $__title = 'TATA SHRIMP PILOT - Dashboard';
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
            <div class="page-content extra-padding">
                <!-- BEGIN PAGE HEADER-->
                <!-- BEGIN THEME PANEL -->

                <!-- END THEME PANEL -->
                <!-- <h1 class="page-title"> Admin Dashboard
                        <small>statistics, charts, recent events and reports</small>
                    </h1> -->
                <div class="page-bar">
                    <ul class="page-breadcrumb">
                        <li>
                            <i class="icon-home"></i>
                            <a href="dashboard.php">Home</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>Dashboard</span>
                        </li>
                    </ul>
                </div>
                <!-- END PAGE HEADER-->
                <!-- BEGIN DASHBOARD STATS 1-->
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 blue" href="#">
                            <div class="visual">
                                <i class="fa fa-registered"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" id="count_farms">NULL</span>
                                </div>
                                <div class="desc"> Registered Farms </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 red" href="#">
                            <div class="visual">
                                <i class="fa fa-bar-chart-o"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" id="count_registered_processors">NULL</span>
                                </div>
                                <div class="desc"> Registered Processors </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 green" href="#">
                            <div class="visual">
                                <i class="fa fa-external-link"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" id="count_exporters">NULL</span>
                                </div>
                                <div class="desc"> Registered Exporters </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 purple" href="#">
                            <div class="visual">
                                <i class="fa fa-money"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" data-value="">NULL</span></div>
                                <div class="desc"> Live Transactions </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 yellow" href="#">
                            <div class="visual">
                                <i class="fa fa-certificate"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" data-value=""></span>NULL</div>
                                <div class="desc"> Valid PHT Certificates </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 box1">
                        <a class="dashboard-stat dashboard-stat-v2 blue-hoki" href="#">
                            <div class="visual">
                                <i class="fa fa-check-square"></i>
                            </div>
                            <div class="details">
                                <div class="number">
                                    <span data-counter="counterup" data-value=""></span>NULL</div>
                                <div class="desc"> PHT Volume Claimed </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="clearfix"></div>
                <!-- END DASHBOARD STATS 1-->
            </div>
            <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->
    <?php include('include/footer.php'); ?>