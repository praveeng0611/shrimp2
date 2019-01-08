<?php
    $__title = 'TATA SHRIMP PILOT | Inventory Processing Pending';
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

                    <!-- <button type="button" class="btn red pull-right" onclick="window.location='search-exporter.html?login='+param">Search for Exporters</button> -->

                </div>
                <!-- END THEME PANEL -->
                <h1 class="page-title"> Pending for processing

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
                                            <th>
                                                <center>Internal Tracking No.</center>
                                            </th>
                                            <th>
                                                <center>Harvest QR Code</center>
                                            </th>
                                            <th>
                                                <center>Date</center>
                                            </th>
                                            <th>
                                                <center>Batch No.</center>
                                            </th>
                                            <th>
                                                <center>Total<br>Weight (KG)</center>
                                            </th>
                                            <th>
                                                <center>Processed QR Code</center>
                                            </th>
                                            <th>
                                                <center>Process</center>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd gradeX">
                                            <td>1234567890</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>100</td>
                                            <td>
                                                <center>-</center>
                                            </td>
                                            <td>
                                                <center><input type="checkbox" name=""></center>
                                            </td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>1234567887</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>120</td>
                                            <td>
                                                <center>-</center>
                                            </td>
                                            <td>
                                                <center><input type="checkbox" name=""></center>
                                            </td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>1234567837</td>
                                            <td> 1234567890 </td>
                                            <td>13 May 2018</td>
                                            <td>36</td>
                                            <td>110</td>
                                            <td>
                                                <center>-</center>
                                            </td>
                                            <td>
                                                <center><input type="checkbox" name=""></center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <form class="form-horizontal">
                                    <div class="form-body">
                                        <!-- <h3 class="form-section">Person Info</h3> -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">Batch Number</label>
                                                    <div class="col-md-8">
                                                        <input type="text" class="form-control" id="" name="" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--/span-->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">Processing type</label>
                                                    <div class="col-md-8">
                                                        <select class="form-control">
                                                            <option>Processing type dropdown options</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--/span-->
                                        </div>
                                        <!--/row-->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label col-md-4">Processed Shrimp QR Code</label>
                                                    <div class="col-md-8 input-group date_date">
                                                        <input type="text" class="form-control" name="" id="qr_code">
                                                        <span class="input-group-addon" id="scan"><i class="glyphicon glyphicon-camera" id="cam"></i></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br>
                                    <div class="form-actions">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <button type="submit" class="btn green">Confirm Processing</button>
                                                        <!-- <button type="button" class="btn default">Cancel</button> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-6"> </div> -->
                                        </div>
                                    </div>
                                </form>
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