<?php
    $__title = 'TATA SHRIMP PILOT | Inventory Processing';
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
                <h1 class="page-title"> Inventory processed batches (shows last x processed batches)

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
                            <span>Sell Harvest</span>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <!-- BEGIN EXAMPLE TABLE PORTLET-->
                        <div class="portlet light ">

                            <div class="portlet-body">
                                <div class="table-toolbar">
                                    <div class="row">

                                    </div>
                                </div>
                                <table class="table table-striped table-bordered table-hover table-checkable order-column" id="sample_1">
                                    <thead>
                                        <tr>
                                            <th>Internal Tracking No.</th>
                                            <th>Harvest QR Code</th>
                                            <th> Date</th>
                                            <th> Batch No.</th>
                                            <th> Total<br>Weight (KG) </th>
                                            <th> Processed QR Code</th>
                                            <th> Process</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd gradeX">
                                            <td>1234567890</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>100</td>
                                            <td>214782358923628</td>
                                            <td>HOSO</td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>1234567887</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>120</td>
                                            <td>214782358923628</td>
                                            <td>PND</td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>1234567837</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>110</td>
                                            <td>214782358923628</td>
                                            <td>HLSO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- END EXAMPLE TABLE PORTLET-->
                    </div>
                </div>
            </div>
            <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->
    <?php include('include/footer.php'); ?>