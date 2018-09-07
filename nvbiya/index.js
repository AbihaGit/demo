window.onload = function(){
	var navPic = document.getElementById("navImage");
	var leftUl = navPic.getElementsByTagName("ul")[0];
	var iconUl = navPic.getElementsByTagName("ul")[1];
	var buttonDiv = navPic.getElementsByClassName("button")[0];
	var leftLi = leftUl.getElementsByTagName("li");
	var iconLi = iconUl.getElementsByTagName("li");
	var buttonA = buttonDiv.getElementsByTagName("a");
	var top = $("top");
	var timer = null;

	var m = parseInt(Math.random()*leftLi.length);
	timer = setInterval(move,1800)
	function move(){		
	 	for(var i = 0; i < leftLi.length; i++){
			leftLi[i].style.display = "none";
			iconLi[i].className = "";
		};	
		m += 1;
		m %= 4;
		leftLi[m].style.display = "block";
		iconLi[m].className = "nicon";
	}
	
	document.onscroll = function(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		if(scrollTop <= 500){
			top.style.display = "none";
		}else{
			top.style.display = "block";
		}
		
	}
}
function $(id){
	return typeof(id) === "string" ? document.getElementById(id) : null;
}