<?php
    $__title = 'TATA SHRIMP PILOT | View Inventory';
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
        <h1 class="page-title">
            <!-- SKU - View Inventory -->
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
                    <span>Inventory</span>

                </li>
            </ul>
        </div>
        <div id="123">

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
                        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="">
                            <thead>
                                <tr>
                                    <th>SKU QR</th>
                                    <th>SKU Type</th>
                                    <th>Processor ID</th>
                                    <th>Output Weight</th>
                                    <th>Date</th>
                                    <th>Harvested Shrimp QR</th>
                                    <th>Weight Claimed</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody id="view_inventory">
                                <!--<tr class="odd gradeX">
                                                <td>55466</td>
                                                <td> 23 Jan 2012 </td>
                                                <td>10</td>
                                                <td>40</td>
                                                <td>100</td>
                                                <td>125</td>
                                                <td>PHT_123546</td>
                                                <td><select class="form-control"><option>Select Processor to sell</option></select></td>
                                                <td><button type="button" class="btn green" data-toggle="modal" data-target="#myModal" id="myBtn">Sell</button></td>
                                            </tr>-->
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

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Title</h4>

            </div>
            <div class="modal-body">Success of Failure Message Here...</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<?php include('include/footer.php'); ?>