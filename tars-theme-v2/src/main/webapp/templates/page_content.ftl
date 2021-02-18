<div id="readMe" class="rs_preserve">
    <!-- Portlet Layout Containers -->
    <div class="mainContainer clearfix">
        <div>
            <div id="layoutContainers" class="wpthemeLayoutContainers wpthemeLayoutContainersHidden rtaLayoutContainer">
                <div class="outer-wrapper">
                
					<#if selectable>
						<@liferay_util["include"] page=content_include />
					<#else>
						${portletDisplay.recycle()}
			
						${portletDisplay.setTitle(the_title)}
			
						<@liferay_theme["wrap-portlet"] page="portlet.ftl">
							<@liferay_util["include"] page=content_include />
						</@>
					</#if>
					
                </div>
            </div>
        </div>
    </div>
</div>