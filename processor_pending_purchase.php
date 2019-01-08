<?php
    $__title = 'TATA SHRIMP PILOT | Pending Purchase';
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
                <h1 class="page-title"> <!-- Processor - Pending transaction and purchase history -->
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
                            <span>Purchase History</span>
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
                                            <th>Harvest QR</th>
                                            <th> Date </th>
                                            <th> No. of<br>Crates </th>
                                            <th> Count </th>
                                            <th> Total<br>Weight (KG) </th>
                                            <th> Pond ID </th>
                                            <th> Farm ID </th>
                                            <th> Processor ID </th>
                                            <th> Status </th>
                                        </tr>
                                    </thead>
                                    <tbody id="purchase_history">
                                        <!-- <tr class="odd gradeX">
                                            <td>55466</td>
                                            <td> 23 Jan 2012 </td>
                                            <td>10</td>
                                            <td>40</td>
                                            <td>100</td>
                                            <td>125</td>
                                            <td>PHT_123546</td>
                                            <td>Farmer A</td>
                                            <td><button type="button" class="btn green">VIEW</button></td>
                                        </tr> -->
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