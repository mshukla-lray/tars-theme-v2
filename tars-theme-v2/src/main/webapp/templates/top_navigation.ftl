<div class="row">
      <div class="container container-1200 navbar hidden-xs">
        <div class=" col-md-12 col-lg-10 col-sm-10">
          <!-- default -->
          <h1 id="pageHeaderttl" class="hidepermanent"><@liferay.language key="label-tars-page-title" /> - Home</h1>
          <div class="main-nav">
            <ul>
              <li class="">
                <a href="https://rta.ae/wps/portal/rta/ae/home">
                  <em class="header__icon">
                    <span class="sr-only hidepermanent">RTA HOME LINK</span>
                    <svg class="normal">
                      <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#home">
                      </use>
                    </svg>
                  </em>
                </a>
              </li>
              <li class=''>
                <a href="https://rta.ae/wps/portal/rta/ae/driver-and-carowner">
                  <@liferay.language key="label-tars-driver-and-car-owner" />
                </a>
                <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#driver-car-owner">
                    </use>
                  </svg>
                </em>
              </li>
              <li class=''>
                <a href="https://rta.ae/wps/portal/rta/ae/public-transport">
                  <@liferay.language key="label-tars-public-transport" />
                </a>
                <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#metro">
                    </use>
                  </svg>
                </em>
              </li>
              <li class='active'>
                <a href="https://rta.ae/wps/portal/rta/ae/corporate-services">
                  <@liferay.language key="label-tars-business-and-corporate" />
                </a>
                <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#briefcase">
                    </use>
                  </svg>
                </em>
              </li>
              <li class=''>
                <a href="https://rta.ae/wps/portal/rta/ae/pod/">
                  <@liferay.language key="label-tars-people-of-determination" />
                </a>
                <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#wheel-chair">
                    </use>
                  </svg>
                </em>
              </li>
            </ul>
          </div>
        </div>
        <div class="pull-right col-lg-2 hidden-sm">
          <!-- default -->
          <a id='logOutMob' href="https://login.rta.ae/rtasso/pages/slo.jsp" style="display: none;"> <span><@liferay.language key="label-tars-logout" /></span>
          </a>
          <div class="pull-right">
            <div class="login-n-register">
            <#if !is_signed_in>
              <a href="javascript:void(0);"> <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#user">
                    </use>
                  </svg></em><span><@liferay.language key="label-tars-login" /></span>
              </a>
             <div class="login-dropdown login-dropdown__new">
                <p class="language__dropdown-header"><@liferay.language key="label-tars-login-to-your-rta-account-as" /></p>
                
                <a href="${log_in_url}"> <span class="icon-chevron"><span
                      class="icon">
                      <svg role="img" width="18" height="10">
                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
                        </use>
                      </svg></span></span><@liferay.language key="label-tars-individual-or-company" /></a>
                    
                <!--<a href="https://www.rta.ae/trustedagents"> <span class="icon-chevron"><span class="icon">
                      <svg role="img" width="18" height="10">
                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
                        </use>
                      </svg></span></span><@liferay.language key="label-tars-trusted-agent" /></a>-->
                <a href="${log_in_int_url}"> <span class="icon-chevron"><span class="icon">
                      <svg role="img" width="18" height="10">
                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
                        </use>
                      </svg></span></span><@liferay.language key="label-tars-rta-login" /></a>
                <a href="https://rta.ae/wps/portal/rta/ae/home/registration?lang=en"> <span class="icon-chevron"><span
                      class="icon">
                      <svg role="img" width="18" height="10">
                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
                        </use>
                      </svg></span></span><@liferay.language key="label-tars-create-an-account" /></a>
              	</div>
              <#else>
              	<a href="javascript:void(0);"> <em class="header__icon">
                  <svg class="normal">
                    <use class="icon" xlink:href="${root_folder}/images/revamp_sprite.svg#user">
                    </use>
                  </svg></em><span>${user_name}</span>
              </a>
             <div class="login-dropdown login-dropdown__new">
             	<#if isInternalUser == "false">
	                <a href="https://www.rta.ae/wps/myportal/rta/ae/home/editprofile"> <span class="icon-chevron"><span class="icon">
	                      <svg role="img" width="18" height="10">
	                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
	                        </use>
	                      </svg>
	                      </span></span><@liferay.language key="label-tars-edit-profile" /></a>
                </#if>      
                      
                <a href="${logOutActionURL}"> <span class="icon-chevron"><span class="icon">
                    <svg role="img" width="18" height="10">
                        <use xlink:href="${root_folder}/images/revamp_sprite.svg#chevron">
                        </use>
                      </svg>
                    </span></span><@liferay.language key="label-tars-logout" /></a>
              	</div>
              </#if>
            </div>
          </div>
        </div>
      </div>
    </div>