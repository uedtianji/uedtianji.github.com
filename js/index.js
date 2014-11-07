$(function () {
	$("a").click(function(event) {
		if($(this).attr("rel") == "external"){
			return true;
		}else{
			var tourl = $(this).attr("href").replace("#","");
			var to = $(".pg[data-page="+tourl+"]");
			var from = $(this).parents(".pg");
			var fromurl = from.attr("data-page");
			var back = to.find("a[data-page=back]");
			if(back.length >0){
				//后退
				back.attr("href",fromurl);
			}
			from.removeClass("an-flipInY2 an-delay600").addClass("an-flipOutY2");
			to.removeClass("an-flipOutY2 an-delay600").addClass("an-flipInY2 an-delay600");
			return false;
		}
	});
});