<div class="row">
	<!-- default -->
	<script type="text/javascript">
         function getQueryString() {
             var key = false,
                 res = {},
                 itm = null;
             var qs = location.search.substring(1);
             if (arguments.length > 0 && arguments[0].length > 1)
                 key = arguments[0];
             var pattern = /([^&=]+)=([^&]*)/g;
             while (itm = pattern.exec(qs)) {
                 if (key !== false && decodeURIComponent(itm[1]) === key)
                     return decodeURIComponent(itm[2]);
                 else if (key === false)
                     res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
             }

             return key === false ? res : null;
         }
     </script>
	<div class="row scroll-header hidden">
		<nav class="container-fluid navbar">
			<div class="container container-1200">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 secondary-nav">
					<span class="pre disabled"> <a href="javascript:void(0);">left</a>
					</span>
					<div class="mobile-menus padt10">
						<div class="mob-menu">
							<a href="javascript:void(0)" class="menu-btn"> <i></i><i></i><i></i>
								<span style="display: none;">Mobile-menu</span>
							</a>
						</div>
						
						
						<!-- Mobile Notification Part Starts -->
							<!--<div class="mobile-login mt5">
                                    <div class="notification">
                                        <div class="notification-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="25px" height="25px">
                                                <g>
                                                    <g>
                                                        <g><path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" data-old_color="#000000"></path></g>
                                                    </g>
                                                    <g>
                                                        <g><path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" class="active-path" data-old_color="#000000"></path></g>
                                                    </g>
                                                </g> 
                                            </svg>
                                            <sup class="count">5</sup>
                                        </div>
                                        <div class="notification-dropdown">
                                            <h5>Notification</h5>
                                            <ul class="ul-flex ul-list w100">
                                                <li>
                                                    <div class="col-md-12 col-xs-12 col-sm-12 pad0">
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-l">
                                                            <div class="mail">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="envelope">
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                                                            </g>
                                                                        </g>
                                                                        <g>
                                                                            <g>
                                                                                <path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8    c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-xs-8 col-sm-8">
                                                            <label>Rental Agency Approvals</label>
                                                            <p>Request form <i>RENT-A-CAR</i></p>
                                                            <span>2020/06/27 18:16:15 PM <i class="fl-r txt-orange"></i></span>
                                                        </div>
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-r">
                                                            <div class="view-eye">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" id="eye-white">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#000"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#000"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="col-md-12 col-xs-12 col-sm-12 pad0">
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-l">
                                                            <div class="chat">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="chat">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-xs-8 col-sm-8">
                                                            <label>Rgd: View Details</label>
                                                            <p>Mesage form <i>Rental Agency Cars</i></p>
                                                            <span>2020/06/27 18:16:15 PM <i class="fl-r txt-orange"></i></span>
                                                        </div>
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-r">
                                                            <div class="view-eye">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" id="eye-white">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="col-md-12 col-xs-12 col-sm-12 pad0">
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-l">
                                                            <div class="chat">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="chat">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-xs-8 col-sm-8">
                                                            <label>Rgd: View Details</label>
                                                            <p>Mesage form <i>Rental Agency Cars</i></p>
                                                            <span>2020/06/27 18:16:15 PM <i class="fl-r txt-orange"></i></span>
                                                        </div>
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-r">
                                                            <div class="view-eye">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" id="eye-white">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="col-md-12 col-xs-12 col-sm-12 pad0">
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-l">
                                                            <div class="mail">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="envelope">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8    c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-xs-8 col-sm-8">
                                                            <label>Rental Agency Approvals</label>
                                                            <p>Request form <i>RENT-A-CAR</i></p>
                                                            <span>2020/06/27 18:16:15 PM <i class="fl-r txt-orange"></i></span>
                                                        </div>
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-r">
                                                            <div class="view-eye">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" id="eye-white">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="col-md-12 col-xs-12 col-sm-12 pad0">
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-l">
                                                            <div class="mail">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" id="envelope">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8    c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 col-xs-8 col-sm-8">
                                                            <label>Rental Agency Approvals</label>
                                                            <p>Request form <i>RENT-A-CAR</i></p>
                                                            <span>2020/06/27 18:16:15 PM <i class="fl-r txt-orange">1 day Over due</i></span>
                                                        </div>
                                                        <div class="col-md-2 col-xs-2 col-sm-2 pad0 txt-r">
                                                            <div class="view-eye">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" id="eye-white">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z" data-original="#000000" class="active-path" data-old_color="#000000"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>-->
                              <!-- Mobile Notification Part Ends -->  
                                
							<div class="mobile-login">
								<!--################################################
							      			Included Top Navigation FTL
							      ###################################################-->
							      
								<#include "${full_templates_path}/language_selector.ftl" />
								
							<!-- <script
										type="text/javascript">
				                      var switchLangURL = window.location.href;
				                      var strUrl = window.location.href;
				
				                      if (window.location.href.indexOf("/!ut/p/z1") != -1) {
				                        var endcount = window.location.href.indexOf("/!ut/p/z1")
				                        strUrl = window.location.href.slice(0, endcount);
				                      }
				                      if (window.location.search != "" && window.location.href.indexOf("/!ut/p/z1") == -1) {
				                        var c = getQueryString("lang");
				
				                        if (c != null && c != "") {
				                          switchLangURL = strUrl.replace("lang=en", "lang=ar");
				                        } else {
				                          switchLangURL = strUrl + "&lang=ar";
				                        }
				                      } else {
				                        switchLangURL = strUrl + "?lang=ar";
				                      }
				                      document.getElementById("switchToEnglishbtn-mob").href = switchLangURL;
				                    </script>-->
								</a>
							</div>
							
							
						<!-- 
						##############################################################################
							Added logic for Mobile login Starts 
						##############################################################################
						-->
						<div class="mobile-login">
							<#if !is_signed_in>
								<a class="login-n-register" href="${log_in_url}">
					                <@liferay.language key="label-tars-login" />
				                </a>
							<#else>
								<a class="login-n-register" href="https://login.rta.ae/rtasso/pages/slo.jsp">
					                <@liferay.language key="label-tars-logout" />
				                </a>
							</#if>
						</div>
						<!-- 
						##############################################################################
									Added logic for Mobile login Ends 
						##############################################################################
						-->
					</div>
					<ul class="main_nav_bar clearfix ul-flex header-sub__menu hidden-xs">
						<#list nav_items as nav_item>
							<#assign nav_item_url = "${nav_item.getURL()}">
							<#if nav_item.hasChildren()>
								<#assign nav_item_url = "javascript:void(0);">
							</#if>
							<li class="dropdown"><a href="${nav_item_url}">${nav_item.getName()}</a>
								<#if nav_item.hasChildren()>
									<#assign hasGrandChild=0>
									<#list nav_item.getChildren() as nav_child>
										<#if nav_child.hasChildren()>
											<#assign hasGrandChild=1>
										</#if>
									</#list>
									<#if hasGrandChild==1>
										<div class="dropdown-menu">
											<label>List of ${nav_item.getName()}</label>
											<div class="hs-menu">
												<div class="hs-menu__tab">
													<ul class="ul-flex">
														<#list nav_item.getChildren() as nav_child>
															<#assign nav_child_css_class = ""/>
	                                                        <#if nav_item.isSelected()>
	                                                            <#assign nav_child_css_class = "active" />
	                                                        </#if>
															<li class="${nav_child_css_class}" data-attr="${nav_child.getName()}-content">
																<a href="${nav_child.getURL()}">
																	${nav_child.getName()}
																</a>
															</li>
														</#list>
													</ul>
												</div>
												<div class="hs-menu__content">
													<#assign i=0>
													<#list nav_item.getChildren() as nav_child>
														<#assign noneClass = "none">
														<#if i == 0>
															<#assign noneClass = "">
														<#else>
															<#assign noneClass = "none">
														</#if>
														<#if nav_child.hasChildren()>
															<ul class="ul-flex ${nav_child.getName()}-content ${noneClass}">
																<#list nav_child.getChildren() as nav_grand_child>
																	<li><a href="${nav_grand_child.getURL()}">${nav_grand_child.getName()}</a></li>
																</#list>
															</ul>
														</#if>
														<#assign i++>
													</#list>
												</div>
											</div>
										</div>
									<#else>
										<div class="dropdown-menu small">
											<div class="hs-menu">
												<ul class="ul-flex">
													<#list nav_item.getChildren() as nav_child>
														<#assign nav_child_css_class = ""/>
	                                                    <#if nav_item.isSelected()>
	                                                        <#assign nav_child_css_class = "active" />
	                                                    </#if>
														<li>
															<a href="${nav_child.getURL()}" class="${nav_child_css_class}">${nav_child.getName()}</a>
														</li>
													</#list>
												</ul>
											</div>
										</div>
									</#if>
								</#if>
							</li>
						</#list>
					</ul>
					
					<!-- Mobile Navigation Starts -->
					
					<div class="main_nav_bar clearfix mobile hidden-lg hidden-md">

                                <div class="mobile-menulist open">
                                    <ul class="ul-flex mobile-menulist__items">
                                        <li class="main_menu">
                                            <ul class="ul-flex">
                                                <li class="">
                                                    <a href="https://rta.ae/wps/portal/rta/ae/home">
									                  <svg viewBox="0 0 33 28" width="25px" height="25px"> 	
                                                            <polygon id="path" points="14.1168166 27 14.1168166 21.160263 17.6478893 21.160263 17.6478893 27 27 27 27 14.2941176 31.7647059 14.2941176 15.8823529 0 0 14.2941176 4.76470588 14.2941176 4.76470588 27" fill="#fff"></polygon>		
                                                        </svg>
									                </a>
                                                </li>
                                                <li>
                                                    <a href="https://rta.ae/wps/portal/rta/ae/driver-and-carowner">
										                  <svg viewBox="0 0 19 25" width="25px" height="25px"> 	
                                                            <path d="M5.95338041,13.4514318 L12.4038397,13.4514318 C14.0818585,13.4514318 15.7073072,14.0368379 17,15.106741 C18.2667501,16.1551725 19,17.7138673 19,19.3582105 L19,25 L0,25 L0,19.1827831 C-1.07731699e-15,17.6383494 0.639404776,16.1628324 1.76632373,15.106741 C2.90114088,14.0432478 4.39812234,13.4514318 5.95338041,13.4514318 Z" id="Path" fill-rule="evenodd" fill="#fff"></path>
                                                            <circle id="Oval" fill="#fff" cx="9.5" cy="5.5" r="5.5"></circle>
                                                            <circle id="Oval" fill="#fff" stroke="#e00" stroke-width="2" cx="9.5" cy="26.5" r="8.5"></circle>
                                                            <rect id="Rectangle" fill="#e00" x="8.49999999" y="19" width="2" height="4"></rect>
                                                            <polygon id="Path-2" fill="#e00" points="8.49999999 22.5180287 6.39986907 25 12.8942221 25 10.5 22.5180287"></polygon>
                                                       </svg>
									                </a>
                                                </li>
                                                <li>
                                                   <a href="https://rta.ae/wps/portal/rta/ae/public-transport">
									                  <svg viewBox="0 0 31 34" width="25px" height="25px">
                                                            <title>metro</title>
                                                            <path d="M 20.9 30 h 9.4 v 3.7 H 20.9 v -3.7 H 9.7 l -7.5 -5.6 V 9.6 c 0 -5.1 4.2 -9.3 9.4 -9.3 h 7.5 c 5.2 0 9.4 4.2 9.4 9.3 v 14.8 l -7.5 5.6 z m -5.6 -9.3 c 4.1 0 7.5 -3.4 7.5 -7.4 l 0 -7.4 H 7.8 v 7.4 c 0 4 3.4 7.4 7.5 7.4 z m -7.5 3.7 c 1 0 1.9 -0.8 1.9 -1.9 c 0 -1 -0.8 -1.9 -1.9 -1.9 a 1.9 1.9 0 0 0 -1.9 1.9 c 0 1 0.8 1.9 1.9 1.9 z m 16.9 -1.9 c 0 -1 -0.8 -1.9 -1.9 -1.9 a 1.9 1.9 0 0 0 -1.9 1.9 c 0 1 0.8 1.9 1.9 1.9 c 1 0 1.9 -0.8 1.9 -1.9 z M 0.3 33.7 v -3.7 H 9.7 v 3.7 H 0.3 z" fill="#fff" fill-rule="nonzero"></path>
                                                        </svg>
									                </a>
                                                </li>
                                                <li>
                                                    <a href="https://rta.ae/wps/portal/rta/ae/corporate-services">
                                                    	<svg viewBox="0 0 28 23" width="25px" height="25px">
                                                            <title>briefcase</title>
                                                            <path fill="#fff" d="M25.57 3.78c.974 0 1.763.784 1.763 1.75v7.694H.667V5.53c0-.966.79-1.75 1.764-1.75h5.855V1.75C8.286.783 9.076 0 10.049 0h7.902c.974 0 1.764.783 1.764 1.749v2.032h5.854zm-3.951 13.221a1.897 1.897 0 0 0 1.905-1.889h3.81v5.806c0 .966-.79 1.749-1.764 1.749H2.43a1.756 1.756 0 0 1-1.763-1.749v-5.806h3.809c0 1.043.853 1.889 1.905 1.889a1.897 1.897 0 0 0 1.905-1.889h11.428c0 1.043.853 1.889 1.905 1.889zM10.19 3.781h7.62V1.888h-7.62v1.893z" fill-rule="nonzero"></path>                                            
                                                        </svg>
									                </a>
                                                </li>
                                                <li>
                                                    <a href="https://rta.ae/wps/portal/rta/ae/pod/">
									                  <svg viewBox="36 116 38 44" width="25px" height="25px">
                                                            <title>Wheel Chair</title>
                                                            <path fill="#fff" class="st0" d="M72.5,147.9c-0.4-0.3-0.9-0.4-1.4-0.4c0,0,0,0-0.1,0c0,0-1.9,0.9-2.5,1.2c-0.2,0.1-0.5-0.1-0.7-0.5v0l-4.4-9.3    c0,0-0.1-0.2-0.2-0.4c-0.1-0.1,0-0.1-0.1-0.2c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c-0.2-0.3-0.5-0.6-0.7-0.8c-1-0.8-4-1.6-4.8-1.8    c-1.2-0.5-2.8-1.3-3.2-2c-0.6-1.2,0.4-3.4,0.7-4.4c0.3-1,0.2-2.2-0.5-2.7c-1.4-0.9-4.2,0-4.2,0c-0.6,0.2-1.1,0.3-1.5,0.4    c0,0-4.4,1.2-6.8,3.1c0,0,0.1,0,0.1,0H42c0,0-6.4,7.1-4.3,8.7c2.1,1.6,6.7-7.6,8.7-7.2c0.2,0,0.4,0.1,0.5,0.2    c0.3,0.2,0.6,0.7,0.7,1.6c0.3,2.2-0.4,3.5-0.5,3.7c0,0.1-0.1,0.1-0.1,0.2c-1.9,0.9-3.5,2.3-4.6,4.1c0,0-0.2,0.2-0.5,0.8    c-0.3,0.6-1.5,3.7-1.5,5.8c0,3.8,1.8,7.2,4.5,9.4c1,0.9,2.2,1.6,3.6,1.9c1.1,0.4,2.4,0.6,3.6,0.6c1.1,0,2.2-0.2,3.3-0.5    c0.1,0,0.4-0.1,0.4-0.1c3.4-1.2,6.2-3.9,7.4-7.4c0.4-0.7,0.6-1.2,0.7-1.3c0.4,0,0.7,0.3,0.9,0.6c0,0,0.3,0.7,0.7,1.3    c0.4,0.5,0.8,0.8,1.3,0.8c1.3,0.2,4-2.3,4.1-2.4C72.1,150,73.4,148.5,72.5,147.9 M52.2,158c-5.3,0-9.6-4.3-9.6-9.7    c0-5.4,4.3-9.7,9.6-9.7s9.6,4.3,9.6,9.7C61.8,153.7,57.5,158,52.2,158"></path>
                                                            <path fill="#fff" d="M57.9,118.6c0-1.4-1.4-2.6-3.1-2.6c0,0,0,0-0.1,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.4,0-0.9,0.1-1.3,0.3    c-1.5,0.4-2.6,1.8-2.6,3.5c0,0,0,0,0,0.1c0,0,0.2,2,0.3,2.6c0.2,1.2,1.1,2.2,2.1,2.5c0.3,0.1,0.6,0.1,1,0.1c1,0,1.9-0.5,2.5-1.2    c0.8-0.9,1.4-2.2,1.6-3.4C58,120,57.9,118.7,57.9,118.6"></path>
                                                        </svg>
									                </a>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        
                                        
                                        <!-- 
										##############################################################################
											Added logic for Mobile Navigation Starts 
										##############################################################################
										-->
                                        <#list nav_items as nav_item>
                                        	<#assign nav_item_url = "${nav_item.getURL()}">
                                        	<#assign nav_item_before_class = "">
											<#if nav_item.hasChildren()>
												<#assign nav_item_url = "javascript:void(0);">
												<#assign nav_item_before_class = "">
											<#else>
												<#assign nav_item_url = "${nav_item.getURL()}">
												<#assign nav_item_before_class = "before-none">
											</#if>
	                                        <li class="mobile-dropdown">
	                                            <a class="${nav_item_before_class}" href="${nav_item_url}">${nav_item.getName()}</a>
	                                            <#if nav_item.hasChildren()>
		                                            <div class="mobile-dropdown__menu">
		                                                <ul>
		                                                	<#list nav_item.getChildren() as nav_child>
		                                                		<#assign nav_child_before_class = "">
		                                                		<#assign nav_child_url = "${nav_child.getURL()}">
																<#if nav_child.hasChildren()>
																	<#assign nav_child_url = "javascript:void(0);">
																	<#assign nav_child_before_class = "">
																<#else>
																	<#assign nav_child_url = "${nav_child.getURL()}">
																	<#assign nav_child_before_class = "before-none">
																</#if>
			                                                    <li class="mobile-dropdown">
			                                                        <a class="${nav_child_before_class}" href="${nav_child_url}">${nav_child.getName()}</a>
			                                                        <#if nav_child.hasChildren()>
				                                                        <div class="mobile-dropdown__menu">
				                                                            <ul>
				                                                            	<#list nav_child.getChildren() as nav_grand_child>
				                                                                	<li><a href="${nav_grand_child.getURL()}">${nav_grand_child.getName()}</a></li>
				                                                                </#list>
				                                                            </ul>
				                                                        </div>
		                                        					</#if>
			                                                    </li>
			                                                </#list>
		                                                </ul>
		                                            </div>
		                                        </#if>
	                                        </li>
	                                    </#list> 
	                                        
                                        <!-- 
										##############################################################################
											Added logic for Mobile Navigation Ends 
										##############################################################################
										-->
                                        
                                        
                                    </ul>
                                </div>
                                <!--start mobile global searchbox-->

                                <!-- end mobile global searchbox  -->
                            </div>
					<!-- Mobile Navigation Ends -->
					
					
					
					
					<!--<span class="next"> 
						<a href="javascript:void(0);"> More	</a>
					</span>-->
				</div>
				<div class="col-md-4 col-lg-3 header-right search__trigger">
					<div class="language-en-ar">
						<!--################################################
					      			Included Top Navigation FTL
					      ###################################################-->
					      
						<#include "${full_templates_path}/language_selector.ftl" />
						
					</div>
					
					<#if is_signed_in>
						<div class="search tars_global_search" tabindex="0" data-default="Search" data-text="Close">
							<div>
								<i>
									<svg class="global-search-icon">
				                      <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#search">
				                      </use>
	                    			</svg>
								</i>
							</div>
						</div>
					</#if>
					
					<!--################################################
				      			Notifications Part TODO -- START
				      ###################################################-->
					
					<#include "${full_templates_path}/user-notification.ftl" />
					
					<!--################################################
				      			Notifications Part TODO -- END
				      ###################################################-->
					
				</div>
				<div class="mobile-accessibility">
					<div class="mbl-search-bar" id='mbl_search_part'>
						<div class="back-btn">
							<svg class="close-svg-icon">
                    		<use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#close">
		                    </use>
		                  </svg>
						</div>
						<label class="hidepermanent rs_skip" for="searchKW-MOB">Search
							in RTA</label> <input type="text" placeholder="Search"
							name="searchKW-MOB" id="searchKW-MOB_tars"> <a href="#"
							class="voice-search" onclick="return startRecordingMob();"
							title="click and talk"> <span class="hidepermanent">Voice
								Search</span>
						</a>
						<div class="mbl_search-autosuggest">
							<div class="site clearfix">
								<ul>
									<!--
										<li><a href="#">Driver & car owner</a></li>
										<li><a href="#">Public Transport</a></li>
										-->
								</ul>
							</div>
						</div>
					</div>
					<div class="m-search">
						<svg class="global-search-icon">
                  <use class="icon"
								xlink:href="${root_folder}/images/revamp_sprite.svg#search">
                  </use>
                </svg>
					</div>
					<div class="m-acc md-trigger" data-modal="accdropDown">Accessibility</div>
					<div class="m-lang md-trigger" data-modal="langDropdown">
						<svg class="global-search-icon">
                  <use class="icon"
								xlink:href="${root_folder}/images/revamp_sprite.svg#globe">
                  </use>
                </svg>
					</div>
				</div>
			</div>
			<div class="search-box search__box-2" id='search_part'>
				<div class="container container-1200">
					<input type="button" class="search-action-btn" value="Search">
					<label class="hidepermanent rs_skip" for="searchKW">Search
						in RTA Website</label> <input type="search" name="searchKW" id="searchKW_tars"
						autocomplete="off" value="How may we help you today?"
						onfocus="if(this.value=='How may we help you today?') {this.value=''; }"
						onblur="if(this.value=='') {this.value = 'How may we help you today?'; }">
				</div>
				<!--<div class="search-autosuggest">
					<div class="site clearfix">
						<div class="col-lg-6">
							<h3>RTA services</h3>
							<ul class="services-results">
								
									<li><a href="#">Driver & car owner</a></li>
									<li><a href="#">Public Transport</a></li>
									
							</ul>
						</div>
						<div class="col-lg-6">
							<h3>Web results</h3>
							<ul class="google-results">
								
									<li><a href="#">Driver & car owner</a></li>
									<li><a href="#">Public Transport</a></li>
									
							</ul>
						</div>
					</div>
				</div>-->
			</div>
		</nav>
	</div>
</div>