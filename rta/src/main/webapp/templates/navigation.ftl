<div class="row">
				<div class="row">
					<nav class="container-fluid" id="navbars">
						<div class="container container-1200">
							<div class="col-xs-12 col-sm-12 col-md-8 col-lg-9 secondary-nav">
								<span class="pre disabled">                            
								<a href="javascript:void(0);">left</a>
								</span>						
								<div class="mobile-menus">
									<div class="mob-menu">
										<a href="javascript:void(0)" class="menu-btn">
										<i></i><i></i><i></i>                                    
										<span style="display:none;">Mobile-menu</span>                                    
										</a>
									</div>
									<div class="mobile-login">
										<a href="template_ar.html" id="switchToArabicbtn-mob" class="login-n-register">
											&#1593;&#1585;&#1576;&#1610;
										</a>
									</div>
									<div class="mobile-login">
										<a class="login-n-register" href="https://www.rta.ae/wps/myportal/rta/ae/home/dashboard?lang=en">
										Login
										</a>
									</div>
								</div>
								<ul class="main_nav_bar clearfix">
									<li class='hide-mobile'>
										<a href="https://www.rta.ae/wps/portal/rta/ae/home" class="menu-col col-xs-12 m-acc" >
											<div class="title">Home</div>
										</a>
										<ul>
											<!-- start of second level -->										
											<li class="shortMenu has_submenu">
                                                        <#assign  count = 0 />
                                                            <#list nav_items as nav_item>
                                                                <#assign  count = count +1  />
                                                                <#assign  nav_item_class = "item-" + count />
                                                        
                                                                <#if count == 1>
                                                                    <#assign  nav_item_class = nav_item_class + " first" />
                                                                </#if>

                                                                <#if nav_item.isSelected() >
                                                                    <#assign nav_item_class = nav_item_class + " selected" />
                                                                </#if>
                                                                
                                                                <li class="${nav_item_class}">
                                                                    <a href="${nav_item.getURL()}" ${nav_item.getTarget()}>
                                                                        <span>${nav_item.getName()}</span>
                                                                    </a>
                                                                </li>

                                                                    <div class="full-grid">
                                                                        <span class="title-sub-menu">
                                                                            <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/" 
                                                                                >Learn more about RTA 
                                                                            </a>												
                                                                            </span>
                                                                            <ul class="first-sub-menu">
                                                                                <li>                   
                                                                                    <#if nav_item.hasChildren()>
                                                                                        <#list nav_item.getChildren() as nav_child>
                                                                                            
                                                                                            <#assign nav_child_css_class = ""/>

                                                                                                <#if nav_item.isSelected()>
                                                                                                    <#assign nav_child_css_class = "selected" />
                                                                                                </#if>

                                                                                            <li class="${nav_child_css_class}" id="layout_${nav_child.getLayoutId()}" role="presentation">
                                                                                                    <a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()}>${nav_child.getName()}</a>
                                                                                            </li>
                                                                                        </#list>
                                                                                    </#if>  
                                                                                </li>
                                                                            </ul>

                                                                    </div>

                                                            </#list>
											</li>
											
											<!-- end of second level -->
										</ul>
									</li>
									<li class="hide-desktop" >
										<a href="https://www.rta.ae/wps/portal/rta/ae/home" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#home"></use>
												</svg>
											</div>
											<div class="title">Home</div>
										</a>
									</li>
									<!--  Added for About RTA menu in Mobile mega menu - STARTS -->
									<li class="hide-desktop" >
										<a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#news"></use>
												</svg>
											</div>
											<div class="title">About RTA </div>
										</a>
									</li>
									<!--  Added for About RTA menu in Mobile mega menu -ENDS -->							
									<li class="hide-desktop">
										<a href="https://www.rta.ae/wps/portal/rta/ae/driver-and-carowner" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="/rta-assets/svg/revamp_sprite.svg#driver-car-owner-mob"></use>
												</svg>
											</div>
											<div class="title">Driver and car owner</div>
										</a>
									</li>
									<li class="hide-desktop">
										<a href="https://www.rta.ae/wps/portal/rta/ae/public-transport" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#metro"></use>
												</svg>
											</div>
											<div class="title">Public Transport</div>
										</a>
									</li>
									<li class="hide-desktop">
										<a href="https://www.rta.ae/wps/portal/rta/ae/corporate-services" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#briefcase"></use>
												</svg>
											</div>
											<div class="title">Business and Corporate</div>
										</a>
									</li>
									<li class="hide-desktop">
										<a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#press-release"></use>
												</svg>
											</div>
											<div class="title">Our Services</div>
										</a>
									</li>
									<li class="hide-desktop">
										<a href="https://www.rta.ae/wps/portal/rta/ae/home/promotions-and-campaigns" class="menu-col col-xs-12">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#dashboard"></use>
												</svg>
											</div>
											<div class="title">Campaigns and promotions</div>
										</a>
									</li>
									<li class="hide-desktop">
										<a class="menu-col col-xs-12" id="view_dsk">
											<div class="icon-mn">
												<svg class="normal">
													<use class="icon" xlink:href="/rta-assets/svg/revamp_sprite.svg#desktop"></use>
												</svg>
											</div>
											<div class="title">
												View Desktop Version
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="col-md-4 col-lg-3 header-right search__trigger">
								<div class="search" tabindex="0" 
									data-default="Search" data-text="Close"
									>
									<div>
										<i>
											<svg class="global-search-icon">
												<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#search"></use>
											</svg>
										</i>
									</div>
								</div>
							</div>
							<div class="mobile-accessibility">
								<div class="mbl-search-bar" id='mbl_search_part'>
									<div class="back-btn">
										<svg class="close-svg-icon">
											<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#close"></use>
										</svg>
									</div>
									<label class="hidepermanent rs_skip" for="searchKW-MOB">Search in RTA</label>
									<input type="text" placeholder="Search" name="searchKW-MOB" id="searchKW-MOB">
									<a href="#" class="voice-search" onclick="return startRecordingMob();" title="click and talk">
									<span class="hidepermanent">Voice Search</span>
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
										<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#search"></use>
									</svg>
								</div>
								<div class="m-acc md-trigger" data-modal="accdropDown">
									Accessibility
								</div>
								<div class="m-lang md-trigger" data-modal="langDropdown">
									<svg class="global-search-icon">
										<use class="icon" xlink:href="${root_folder}/rta-assets/svg/revamp_sprite.svg#globe"></use>
									</svg>
								</div>
							</div>
						</div>
						<div class="search-box search__box-2" id='search_part'>
							<div class="container container-1200">
								<input type="button" class="search-action-btn" value="Search">
								<label class="hidepermanent rs_skip" for="searchKW">Search in RTA Website</label>
								<input type="search" name="searchKW" id="searchKW" autocomplete="off" value="How may we help you today?" onfocus="if(this.value=='How may we help you today?') {this.value=''; }"
									onblur="if(this.value=='') {this.value = 'How may we help you today?'; }">
								<a href="#" class="voice-search" onclick="return startRecording();" title="click and talk">
								<span class="hidepermanent">Voice Search</span>
								</a>
							</div>
							<div class="search-autosuggest">
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
					</nav>
				</div>
			</div>