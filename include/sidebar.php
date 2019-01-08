<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper">
            <!-- END SIDEBAR -->
            <div class="page-sidebar navbar-collapse collapse">
                <!-- BEGIN SIDEBAR MENU -->
                <ul class="page-sidebar-menu  page-header-fixed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                    <script>
                        document.write('<li class="nav-item active"><a href="dashboard.php" class="nav-link nav-toggle"><i class="icon-home"></i><span class="title">Dashboard</span></a></li>');
                    </script>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link nav-toggle">
                            <i class="icon-bar-chart"></i>
                            <span class="title">Farm</span>
                            <span class="caret"></span>
                        </a>
                        <ul class="sub-menu">
                            <script>
                                document.write('<li class="nav-item  "><a href="farm_create_harvest.php" class="nav-link "><span class="title">Create New Harvest</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="farm_sell_harvest.php" class="nav-link "><span class="title">Sell Harvest</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="farm_search_harvest.php" class="nav-link "><span class="title">Search Harvest</span></a></li>');
                            </script>
                            <script>
                            document.write('<li class="nav-item"><a href="harvest_sell_to_processor.html" class="nav-link "><span class="title">Harvest History</span></a></li>');
                            </script>
                            <!-- <script>
                                document.write('<li class="nav-item  "><a href="#" class="nav-link "><span class="title">View Sale</span></a></li>');
                            </script> -->
                            <script>
                                document.write('<li class="nav-item  "><a href="farm_search_pht.php" class="nav-link "><span class="title">PHT Certificates</span></a></li>');
                            </script>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;" class="nav-link nav-toggle">
                            <i class="icon-briefcase"></i>
                            <span class="title">Processors</span>
                            <span class="caret"></span>
                        </a>
                        <ul class="sub-menu">
                            <script>
                                document.write('<li class="nav-item  "><a href="processor_confirm_purchase.php" class="nav-link "><span class="title">Confirm Purchase</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="processor_pending_purchase.php" class="nav-link "><span class="title">Purchase History</span></a></li>');
                            </script>
                            <!-- <script>
                                document.write('<li class="nav-item  "><a href="#" class="nav-link "><span class="title">Purchase History</span></a></li>');
                            </script> -->
                            <script>
                                document.write('<li class="nav-item  "><a href="create_sku.php" class="nav-link "><span class="title">Create SKU</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="search_sku.php" class="nav-link "><span class="title">View SKUs</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="view_inventory.php" class="nav-link "><span class="title">View Inventory</span></a></li>');
                            </script>
                        </ul>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link nav-toggle">
                            <i class="icon-diamond"></i>
                            <span class="title">PHT LAB</span>
                            <span class="caret"></span>
                        </a>
                        <ul class="sub-menu">
                            <script>
                                document.write('<li class="nav-item"><a href="pht_create_pht.php" class="nav-link nav-toggle"><span class="title">Create PHT Certificates</span></span></a></li>');
                            </script>

                            <script>
                                document.write('<li class="nav-item"><a href="pht_search_pht.php" class="nav-link nav-toggle"><span class="title">Search PHT Certificates</span></span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item"><a href="pht_certificate_history.php" class="nav-link nav-toggle"><span class="title">PHT History</span></span></a></li>');
                            </script>
                        </ul>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link nav-toggle">
                            <i class="icon-settings"></i>
                            <span class="title">Admin</span>
                            <span class="caret"></span>
                        </a>
                        <ul class="sub-menu">
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_create_farm_with_pht.php" class="nav-link "><span class="title">Register Farm</span></a></li>');
                            </script>
                            <!-- <script>
                                document.write('<li class="nav-item  "><a href="registry_create_farm_without_pht.html" class="nav-link "><span class="title">Register Farm Without PHT ID</span></a></li>');
                            </script> -->
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_create_processors.php" class="nav-link "><span class="title">Register Processor</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_create_exporters.php" class="nav-link "><span class="title">Register Exporter</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="create_hatchery.php" class="nav-link "><span class="title">Register Hatchery</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="create_feed.php" class="nav-link "><span class="title">Register Feed</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="create_suppliment.php" class="nav-link "><span class="title">Register Supplement</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_search_farms.php" class="nav-link "><span class="title">Search Farm</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_search_processors.php" class="nav-link "><span class="title">Search Processors</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="registry_search_exporters.php" class="nav-link "><span class="title">Search Exporters</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="search_hatchery.php" class="nav-link "><span class="title">Search Hatchery</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="search_feed.php" class="nav-link "><span class="title">Search Feed</span></a></li>');
                            </script>
                            <script>
                                document.write('<li class="nav-item  "><a href="search_suppliment.php" class="nav-link "><span class="title">Search Supplement</span></a></li>');
                            </script>
                        </ul>
                    </li>
                    <script>
                        document.write('<li class="nav-item"><a href="trace_sku.php" class="nav-link nav-toggle"><i class="icon-pointer"></i><span class="title">Trace SKU</span></a></li>');
                    </script>
                    <!-- <li class="nav-item  ">
                                    <a href="javascript:;" class="nav-link nav-toggle">
                                        <span class="title">Registries</span>
                                        <span class="caret"></span>
                                    </a>
                                    <ul class="sub-menu">
                                        
                                        <script>
                                          document.write('<li class="nav-item  "><a href="create-farm.php?login='+ param +'" class="nav-link "><span class="title">Feed Supplier</span></a></li>');
                                        </script>
                                        
                                    </ul>
                                </li> -->


                    <!-- <script>
                                  document.write('<li class="nav-item  "><a href="harvest_sell_to_processor.php?login='+ param +'" class="nav-link "><span class="title">Sell to Processor</span></a></li>');
                                </script>
                                <script>
                                  document.write('<li class="nav-item  "><a href="harvest_sell_to_processor.php?login='+ param +'" class="nav-link "><span class="title">Processor Pending Purchase</span></a></li>');
                                </script>
                                <script>
                                  document.write('<li class="nav-item  "><a href="harvest_sell_to_processor.php?login='+ param +'" class="nav-link "><span class="title">Processor Inventory Processing</span></a></li>');
                                </script>
                                <script>
                                  document.write('<li class="nav-item  "><a href="harvest_sell_to_processor.php?login='+ param +'" class="nav-link "><span class="title">Processor Inventory Processing Pending</span></a></li>');
                                </script> -->
                </ul>
                <!-- END SIDEBAR MENU -->
            </div>
            <!-- END SIDEBAR -->
        </div>
        <!-- END SIDEBAR -->
