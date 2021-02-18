function escapeHTML(str) {
     var out = "";
	 if(str !=null && str.trim()!=""){
		 for(var i=0; i<str.length; i++) {
			 if(str[i] === '<' || str[i] === '%3C') {
				 out += '&amp;lt;';
			 } else if(str[i] === '>' || str[i] === '%3E') {
				 out += '&amp;gt;';
			 } else if(str[i] === "'" || str[i] === '%27') {
				 out += '&amp;#39;'; 
			 } else if(str[i] === '"' || str[i] === '%27') {
				 out += '&amp;quot;';                        
			 } else if(str[i] === '/') {
				 out += '&amp;#47;';                        
			 } else {
				 out += str[i];
			 }
		 }
	 }
     return out;                    
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function () { 

if(window.location.href.indexOf("true") > -1) {
		$("#leftnav_part #show_login").css("display", "none");
	  $("#leftnav_part #loggedin").html('<a id="show_manage_account" href="/wpsv5/wps/myportal/rta/ae/home/my-rta-account"><span>Manage<br>Account</span></a><a id="show_logout" href="/wpsv5/wps/myportal/rta/ae/home/saml/samllogout"><span>Log out</span></a>');
}
	//var kw = encodeURIComponent(getUrlVars()["kw"]);
	//var kw = getUrlVars()["kw"];
	
	var url =new URL(window.location.href);
	var kw = escapeHTML(url.searchParams.get("kw"));
	
	var canCallGoogle = false;
	var callGoogleCount = 0;
	if (kw != "") {
		if (typeof kw != 'undefined') {
			$("#searchKW").val(decodeURIComponent(kw));
			canCallGoogle = true;
			callGoogleCount = 0;
			doneTyping();
		} 
	}
		$("#search_part .search-autosuggest ul").empty();
	$("#search_part").on("mouseleave", function() {
		$(".search-autosuggest").hide();	
	}).on("mouseover", function() {$(".search-autosuggest").show();});
	if(typeof permore == 'undefined')
		permore = 5;
	$('.more-visible').slice(permore).hide();
	var $more = $('.load-more-search');
	
	$(window).scroll(function() {
		if ($('.load-more-search').length > 0) {
			if ($(window).scrollTop() + $(window).height() >= $('.load-more-search').offset().top+100) {
				if ($('.load-more-search').attr('data-load') == "true") {
					if (!$('.load-more-search').attr('loaded')) {
						//not in ajax.success due to multiple sroll events
						$('.load-more-search').attr('loaded', true);
						$more.trigger("click"); 
					}
				}
			}
		}
	});
	$more.click(function(){
		$me = $(this); 
		permore = $me.attr("data-id");
		$('.more-visible:hidden').slice(0, permore).fadeToggle(500); 
		if($('.more-visible:hidden').length == 0)
			$more.hide();
		$('.load-more-search').attr('loaded', ""); 
	});
	
	/*$("#searchKW").keypress(function(event) {
	   if (event.which == 13) {
		  location.href ="search.html?kw=" + $(this).val();
		  event.preventDefault();
	   }
	});*/
	
	/*$("#searchKW").keypress(function(event) {			
			
	   if (event.which == 13) {
		  //location.href ="search.html?kw=" + $(this).val();
		  if ($.cookie('locale_new') == 'ar') {
		  	location.href ="/wpsv5/links/Design/asearch.html?kw=" + encodeURI($(this).val());
		  } else {
		  	location.href ="/wpsv5/links/Design/esearch.html?kw=" + encodeURI($(this).val());
		  }
		  event.preventDefault();
	   }
	});*/
	
	$("#searchKW").keypress(function(event) {		   
		if (event.which == 13) {		   
			location.href ="/wps/portal/rta/ae/home/search?kw=" + encodeURI($(this).val());		  
			event.preventDefault();
	   }
	});
	
	$(".sugclose").click( function() {
		$("#search_part .search-autosuggest").hide(); 
		$(this).hide(); 
	});
	
	var typingTimer;                //timer identifier
	var doneTypingInterval = 1000;
	var extAllowed = ['png', 'jpg', 'gif', 'jpeg'];
	$('#searchKW, #searchServicesKW').bind("focusin", function() { $("#search_part").addClass("active"); });
	$('#searchKW, #searchServicesKW').bind("focusout", function() { $("#search_part").removeClass("active"); });
	
	$('#searchKW').keyup(function(){
		clearTimeout(typingTimer);
		typingTimer = setTimeout(doneTyping, doneTypingInterval);
		if(!canCallGoogle && callGoogleCount > 2 ){
			callGoogleCount = 0;
			canCallGoogle = true;
		}
	});
	
	//on keydown, clear the countdown 
	$('#searchKW').keydown(function(){
		clearTimeout(typingTimer);
	});
	 
	//user is "finished typing," do something
	var jsonData = null;
	var googleResultJson = null;

	function doneTyping () {
		var host = window.location.host;
		var protocol = window.location.protocol;
		host = protocol + '//' + host;
		
		$("#searchResultsLoader").show();
		$("#searchResultsNone").hide();
		$me = $("#searchKW");
		$next = $(".load-more-search").attr("data-next");
		var $kw = escapeHTML($me.val());  
		//var vis = permore;
		var suggestions = new Array();  
		if ($kw.length > 0) { 		    
			if(jsonData != null && jsonData.length > 0){
				if ($kw.length <3 ) { 
					canCallGoogle = false;
					googleResultJson=null;
				}
				if (canCallGoogle) { 
					console.log(">>google call");
					googleSearch($kw);
				}else{
					console.log(">> no google call");
					callGoogleCount += 1;
					populateSearchResults($kw);
				}

			}else{
				$.ajax({url: host + '/wps/PA_IDOS/getServicesNamesServlet?methodName=getServicesNamesWithIDs&lang=all', type:'GET', async:true, crossDomain: true, success: function(jData) {
					jsonData = JSON.parse(jData);
					//populateSearchResults($kw);		  
				}}).done(function(){
					if ($kw.length > 3) { 
						console.log(">>google call");	
						googleSearch($kw);
					}else{
						console.log(">> no google call");
						callGoogleCount += 1;
						populateSearchResults($kw);
					}
				});
			}
									  
		} else {
			$("#search_part .search-autosuggest ul").empty();
			$("#search_part .search-autosuggest ul").attr("style", "padding-bottom:0px;");  
			$("#searchResultsLoader").hide();	
			$(".search-result").empty();	
			$("#searchTags").html("<b>\u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0645\u0627\u062a \u0644\u0644\u0628\u062d\u062b</b>");			
		}
		if ($('.load-more-search').length > 0)
			$('.load-more-search').attr('data-load', "true");
	}
	function googleSearch($kw){
		canCallGoogle = false;
		callGoogleCount = 0;
		//googleResult
		var innerHtml = '';
        $.ajax({
        type: "GET",
  		dataType: "jsonp",
        url:"https://www.googleapis.com/customsearch/v1?key=AIzaSyDsHIXERHmMBuRsdV3sRkgrO00qMM1zW3c&cx=009893524337576109019:z-7gavuhcme&hl=ar&cr=countryAE&safe=high&num=10&q="+$kw,
        success:function(response){
         console.log("1111>>response " + JSON.stringify(response));
         if(typeof response.items !== 'undefined'){
				googleResultJson = response.items;
				 
		 }
         		 
        }
      }).done(function(){ 
		  populateSearchResults($kw);
		});
	}
	function populateSearchResults($kw){
		var $count = 0;
		var regex = /\\/g; 		
		for(var i in jsonData) {
			if ($count === 8) { break; }	
			var regex = new RegExp($kw.trim(), "gi"); 					  
			var value = jsonData[i].value;
			var label_en = jsonData[i].label_en ? jsonData[i].label_en : ""; 
			var label_ar = jsonData[i].label_ar ? jsonData[i].label_ar : "";
			var label = label_ar + '<br/>'+label_en;
			var regex = new RegExp($kw.trim().toLowerCase(), "gi"); 
			if (label.toLowerCase().match(regex)){
				$count++;
				if (value.trim() != "") {
					//console.log(label);  
					$("#search_part .search-autosuggest ul").prepend('<li><a href="/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + value.trim() + '">' + label.trim() + '</a></li>');
				}
			}
		}
	if(googleResultJson !=null && googleResultJson !=""){
			for(var i=0;i<googleResultJson.length;i++){
				$count++;			
				$("#search_part .search-autosuggest ul").append('<li><a href="' + googleResultJson[i].link + '">' + googleResultJson[i].htmlTitle + '</a></li>');
			 }
		}
		//Results
		if ($(".search-result").length > 0) {
			
			$("#search_part .search-autosuggest ul").empty();
			$("#search_part .search-autosuggest ul").attr("style", "padding-bottom:0px;");    
			
			//var kw = getUrlVars()["kw"]; 
			var kw = escapeHTML(url.searchParams.get("kw"));
			if (typeof kw == 'undefined' || kw == "") {  
				$("#search_part .search-autosuggest ul").attr("style", "padding-bottom:10px;");
				$(".sugclose").show();
				$("#search_part .search-autosuggest").show();
			}
		
			$(".search-result").empty();   
			
			var jStr = []; 
				
			for(var i in jsonData) {   
				var regex = new RegExp($kw.trim(), "gi"); 
				
				var value = jsonData[i].value;
			var label_en = jsonData[i].label_en ? jsonData[i].label_en : ""; 
			var label_ar = jsonData[i].label_ar ? jsonData[i].label_ar : "";
			var label = label_ar + '<br/>'+label_en;
				if (label != "")
					label = label.replace(regex, '<b>$&</b>');
				var description = jsonData[i].description + '';
				if (description != "")
					description = description.replace(regex, '<b>$&</b>');
				var regex = new RegExp($kw.trim().toLowerCase(), "gi"); 
				if (label.toLowerCase().match(regex)){
					if (value.trim() != "") {
						var item1 = {};
						item1["value"] = value;
						item1["label"] = label;
						item1["desription"] = description;
						jStr.push(item1);
					}
				}
			} 
			var idosDesription = "";
			$("#searchResults table").html('<thead><tr><th></th></tr></thead><tbody class="search-result"></tbody>');
			for (var k = 0; k < jStr.length; k ++) {
				tags = "";
				$.each(suggestionKW2, function(i, val){
					var regex = new RegExp(val.toLowerCase(), "gi");
					if (jStr[k].desription.toLowerCase().match(regex) || jStr[k].label.toLowerCase().match(regex))  { 
						if (tags != "")
							tags += ", ";
						tags += val; 
					}
				});
				idosDesription = '\u0647\u064a\u0626\u0629 \u0627\u0644\u0637\u0631\u0642 \u0648 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062a \u002d \u062f\u0644\u064a\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a : ' + jStr[k].label.trim();																				
				//$(".search-result").prepend('<li class="more-visible" data-show="1" data-tag="' + tags + '">' + '<span><a href="/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '" class="tlink" target="_blank">' + jStr[k].label.trim() + '</a><br>' + idosDesription + '</span><a href="/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '" target="_blank">www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '</a></li>');
				$(".search-result").prepend('<tr><td>' + '<li data-show="1" data-tag="' + tags + '"><span><a class="search-result-item" href="/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '" class="tlink" target="_blank">' + jStr[k].label.trim() + '</a><br>' + idosDesription + '</span></li><a href="/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '" target="_blank">www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=' + jStr[k].value.trim() + '</a></td></tr>');
			} 	

		    /*Appending google search result*/
			if(googleResultJson !=null && googleResultJson !=""){
					for(var i=0;i<googleResultJson.length;i++){
									
						$(".search-result").append('<tr><td>' + '<li data-show="1" data-tag=""><span><a class="search-result-item" href="'+googleResultJson[i].link + '" class="tlink" target="_blank">' + googleResultJson[i].htmlTitle + '</a><br>' + googleResultJson[i].snippet + '</span></li><a href="' + googleResultJson[i].link + '" target="_blank">'+googleResultJson[i].link + '</a></td></tr>');
						
					 }
			}
				 
			//$count = $count + jStr.length;
											
			$("#searchTags").html("<b>" + $kw + "</b>" + " " + $count + " \u0646\u062a\u0627\u0626\u062c");

			if ($count > 1){
				$("#searchTags").html("<b>" + $kw + "</b>" + " " + $count + " \u0646\u062a\u0627\u0626\u062c");
				$("#page-size-ddl").show();
				if ($(window).width() > 768) {
					$.fn.DataTable.ext.pager.numbers_length = 8;
				}else{
					$.fn.DataTable.ext.pager.numbers_length = 3;
				}	
				$("#searchResults table").DataTable({
					pageLength: parseInt($('#pageSizeList').find(":selected").text()),
					bLengthChange: false,
					ordering: false,
					destroy: true,
					searching: false,
					language: {
						"info": '\u0627\u0644\u0635\u0641\u062D\u0629:  _PAGE_ \u0645\u0646 _PAGES_',
						"paginate": {
							"next": '\u0627\u0644\u062A\u0627\u0644\u064A',
							"previous": '\u0627\u0644\u0633\u0627\u0628\u0642'
						}                    
					}  
				}); 
			}
			else{
      
      $("#searchTags").html("<b>" + $kw + "</b>" + " " + $count + " \u0646\u062a\u064a\u062c\u0629");
				$("#page-size-ddl").hide();
			}				
			$("#searchResults").show();
			$("#searchResultsLoader").hide();
		} 		
	}
	
	$('#pageSizeList').on('change', function() {
	  	$('#searchResults table').DataTable().page.len(this.value).draw();
	})
	
	$(".suggestions").on("click", "a", function() { 
		$me = $(this); 
		var vis = $('.load-more-search').attr('data-id');
		$(".search-msg").html("");
		if ($me.hasClass("active")) {
			var html = $('.search-result').html(); 
			$('.search-result').html(function(i,h){ return h.replace(/<b>/g,'').replace(/<\/b>/g,''); });  
			$me.removeClass("active");
		}
		else {
			$me.addClass("active"); 
		}
		$kw = "";  
		$(".search-result li").hide(); 
		$resultsvis = 0;
		$(".suggestions li a").each(function(index, element) {
			$c = $(this);
			if ($c.hasClass("active")) {
				$(".search-result span").each(function(index, element) {
					$t = $(this);
					var html = $t.html(); 
					var regex = new RegExp($c.html(), "gi");
					$t.html(html.replace(regex, '<b>$&</b>')); 
				});
				if ($kw != "")
					$kw += ", ";
				$kw += $c.html(); 
				$(".search-result li").each(function(index, element) {
					$t = $(this); 
					var regex = new RegExp($c.html(), "gi");
					var _tags = $t.attr('data-tag'); 
					if (_tags.match(regex)) {
						$t.show();  
						$resultsvis ++;
					}
				});
			}
			$(".suggestions-all a").removeClass("active");
		}); 
		$more.hide();		
		var $count = $('.search-result > li:visible').length;
		if ($count > 1)
			$("#searchTags").html("<b>" + $kw + "</b>" + " " + $count + " \u0646\u062a\u0627\u0626\u062c");
		else
			$("#searchTags").html("<b>" + $kw + "</b>" + " " + $count + " \u0646\u062a\u064a\u062c\u0629"); 

		if ($count <= 0)
			$(".search-msg").html ("\u0646\u0623\u0633\u0641\u0021 \u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c.");
		else
			$(".search-msg").html(""); 
		$('.load-more-search').attr('data-load', "false"); 
		if ($(".suggestions li a.active").length <= 0)
			$(".suggestions-all a").trigger("click"); 
	});
	
	$(".suggestions-all a").click(function() {
		var vis = $('.load-more-search').attr('data-id');
		$me = $(this);
		$me.addClass("active");
		$(".search-result li").show();
		$(".suggestions li a").each(function(index, element) {
			$(this).removeClass("active");
		});
		console.log(vis);
		$(".search-result li").slice(vis).hide();
		$more.show();
		if ($(".search-result li:hidden").length == 0)
			$more.hide();		
		var $count = $('.search-result > li').length;
		if ($count > 1)
			$("#searchTags").html("<b>" + $("#searchKW").val() + "</b>" + " " + $count + " \u0646\u062a\u0627\u0626\u062c");
		else
			$("#searchTags").html("<b>" + $("#searchKW").val() + "</b>" + " " + $count + " \u0646\u062a\u064a\u062c\u0629"); 
		 
		if ($count <= 0)
			$(".search-msg").html ("\u0646\u0623\u0633\u0641\u0021 \u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c.");
		else
			$(".search-msg").html("");
		
		$('.load-more-search').attr('data-load', "true");
	}); 
	 
});