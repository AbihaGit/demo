window.onload = function(){
	autoPlay();
	autoAddBox();
	// setInterval(function(){
	// 	myWaterFull();
	// 	},50);
	myWaterFull();
	$("login_btn").addEventListener("click",function(){
		$("login").style.display = "block";
		$("login").addEventListener("click",function(e){
			var e = event || window.event;
			var theId = event.target ? event.target.id : event.srcElement.id;
			if(theId == "login"){
				$("login").style.display = "none";
			}
		},false)
	},false)
	  
	var as = $("icons").getElementsByTagName("a");
	for(var i = 0; i < as.length; i++ ){
		var x = -80 * i;
		as[i].style.backgroundPositionX = x + "px";
	}

	var as = $("tab").getElementsByTagName("a");
	theIndex = 0
	for(var i = 0; i < as.length; i++){
		as[theIndex].className = "selected";
		(function(index){
			as[i].onclick = function(){
				as[theIndex].className = "";
				this.className = "selected";
				theIndex = index;
			}
		})(i)
	}

	document.onscroll = function(){
		var theTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		var login = $("register").children[0];
		var a = $("top_nav").getElementsByClassName("nav-a");
		var li0 = $("top_nav").children[0];
		var li4 = $("top_nav").children[4];
		
		for(var i = 0; i < a.length; i++){
			if(theTop > 200){
				$("nav").style.backgroundColor = "#fff";
				a[i].style.color = "#444";
				a[1].style.color = "#c90000"
				a[i].onmouseover = function(){
					this.style.color = "#C90000";	
				}
				a[i].onmouseout = function(){
					this.style.color = "#444";
				}
				li0.style.backgroundImage = "url(images/logo2.png)";
				li4.style.backgroundPosition = "0 -248px";
				login.style.backgroundColor = "rgb(216,216,216)"
				login.style.color = "#444";
				$("aside").style.display = "block";
			}else{
				$("nav").style.backgroundColor = "";
				a[i].style.color = "#fff";
				a[i].onmouseover = function(){
					this.style.color = "#fff";	
				}
				a[i].onmouseout = function(){
					this.style.color = "#fff";
				}
				li0.style.backgroundImage = "url(images/logo.png)";
				li4.style.backgroundPosition = "-50px -558px";
				login.style.backgroundColor = "rgba(216,216,216,0.2)"
				login.style.color = "#fff";
				$("aside").style.display = "none";
			}
		}
		if(checkWillLoadImage()){
            autoAddBox();
            myWaterFull();
        }
	};

	// window.onscroll = function () {
 //        if(checkWillLoadImage()){
 //            autoAddBox();
 //            myWaterFull();
 //        }
 //    };

	function autoPlay(){
		var n = parseInt(Math.random()*2);
		var m = parseInt(Math.random()*3);
		var ad = $("head_ad").getElementsByTagName("a")[0];
		ad.style.backgroundImage = "url(images/headad"+ (n+1) +".jpg)";
		bgc.style.backgroundImage = "url(images/bgc"+ (m+1) +".jpg)";
		$("close").onclick = function(){
		$("head_ad").style.display = "none";
		}
	};
	
	function autoAddBox(){
		// 创建josn对象
		var json = [
					{"txt": "图片描述信息", "pic": "images/pic1.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic2.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic3.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic4.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic5.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic6.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic7.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic8.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic9.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic10.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic11.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic12.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic13.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic14.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic15.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic16.jpg"},
					{"txt": "图片描述信息", "pic": "images/pic17.jpg"}
					]; 
		var txt, pic, str, htmlStr;

		str = $("view").innerHTML;

		for(var i = 0; i <getJsonLength(json); i++ ){
			str = $("view").innerHTML;
			txt = json[i].txt;
			pic = json[i].pic;
		htmlStr =
					"<div class='box' id='box'>" +
		 				"<div class='box-top'>" +
							"<a href='#' target='_blank' class='pic'>" + "<img src=" + pic + ">" + "</a>" +
							"<a href='#' target='_blank' class='cover'></a>" +
							"<span class='collect'>采集</span>" +
							"<span class='like'></span>" +
						"</div>"+
						"<div class='box-bottom'>" +
							"<p class='text' id='text'>" + txt + " </p>" +
							"<a href='#' target='_blank' class='user-head'></a>" +
							"<a href='#' target='_blank' class='user-id'>用户ID</a>" +
							"<span class='txt'>采集到</span>" +
							"<a href='#' target='_blank' class='photography'>用户相册</a>" +
						"</div>" +
					"</div>";
			str += htmlStr;
			$("view").innerHTML = str;
		}
	};

	function myWaterFull(){
		var boxs = $("view").getElementsByClassName("box");
		var maxWidth = 1500;
		var boxsWidth = boxs[0].offsetWidth;
		var boxsHeight = boxs[0].offsetHeight;
		var cols = parseInt(maxWidth/boxsWidth);
		var theMargin = 10;
		var heightArr = []; 
		var boxsHeight,minBoxsHeight,minBoxsHeightIndex;
		for(var i = 0; i < boxs.length; i++){
			boxsHeight = boxs[i].offsetHeight + theMargin;

			if(i < cols){
				heightArr.push(boxsHeight);
				boxs[i].style.position = "absolute";
				boxs[i].style.top = theMargin + "px";
				boxs[i].style.left = i * (boxsWidth + theMargin) + "px";

			}else{
				minBoxsHeight = _.min(heightArr);
				minBoxsHeightIndex = getMinBoxIndex(heightArr,minBoxsHeight);
				boxs[i].style.position = "absolute";
				boxs[i].style.top = minBoxsHeight + theMargin + "px";
				boxs[i].style.left = minBoxsHeightIndex * (boxsWidth + theMargin) + "px";	
				heightArr[minBoxsHeightIndex] += boxsHeight;
			}
			
			
		}
		$("Barea").style.height = boxs[boxs.length - 1].offsetTop + boxs[boxs.length - 1].offsetHeight + "px";
	};

	function getMinBoxIndex(arr, val) {
	    for(var i=0; i<arr.length; i++){
	        if(arr[i] === val){
	            return i;
	        }
	    }
	};

	function $(id){
		return typeof(id) === 'string' ? document.getElementById(id) : null;
	};	

	function getJsonLength(jsonData){
		var length = 0;
		for(var key in jsonData){
			length++;
		}
		return length;
	};

	function checkWillLoadImage() {
	    // 1. 获取最后一个盒子
	    var allBox = document.getElementsByClassName("box");
	    var lastBox = allBox[allBox.length - 1];

	    // 2. 求出最后一个盒子自身高度的一半 + offsetTop
	    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;

	    // 3. 求出屏幕的高度
	    var screenH = document.body.clientHeight || document.documentElement.clientHeight;

	    // 4. 求出页面偏离浏览器的高度
	    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	    // 5.比较
	    return lastBoxDis <= screenH + scrollTop;
	}
}
