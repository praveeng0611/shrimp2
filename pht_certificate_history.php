<?php
    $__title = 'TATA SHRIMP PILOT | Certificate History';
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
            <!-- PHT Certificates - History of PHT -->
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
                    <span>PHT LAB</span>
                    <i class="fa fa-angle-right"></i>
                </li>
                <li>
                    <span>History</span>

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
                        <table class="table table-striped table-bordered table-hover table-checkable order-column" id="sample_1">
                            <thead>
                                <tr>
                                    <th>PHT Certificate ID</th>
                                    <th> Farmer Name </th>
                                    <th> Farm ID </th>
                                    <th> Pond ID </th>
                                    <th> Expected Weight </th>
                                    <th> Issue Date </th>
                                    <th> Expiry Date </th>
                                </tr>
                            </thead>
                            <tbody id="pht_history">
                                <!-- <tr class="odd gradeX">
                                                <td>55466</td>
                                                <td> 23 Jan 2012 </td>
                                                <td>10</td>
                                                <td>40</td>
                                                <td>100</td>
                                                <td>125</td>
                                                <td>PHT_123546</td>
                                                <td><select class="form-control"><option>Select Processor to sell</option></select></td>
                                                <td><button type="button" class="btn green" data-toggle="modal" data-target="#myModal" id="myBtn">Sell</button></td>
                                            </tr>
                                            <tr class="odd gradeX">
                                                <td>96548</td>
                                                <td> 12 May 2012 </td>
                                                <td>20</td>
                                                <td>23</td>
                                                <td>200</td>
                                                <td>325</td>
                                                <td>PHT_123547</td>
                                                <td>Westcoast Surat</td>
                                                <td>Pending Confirmation</td>
                                            </tr>
                                            <tr class="odd gradeX">
                                                <td>123456</td>
                                                <td> 19 Feb 2012 </td>
                                                <td>15</td>
                                                <td>65</td>
                                                <td>155</td>
                                                <td>111</td>
                                                <td>PHT_123541</td>
                                                <td>Westcoast Surat</td>
                                                <td>Delivered</td>
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
                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
        </div>
    </div>
</div>
<?php include('include/footer.php'); ?>