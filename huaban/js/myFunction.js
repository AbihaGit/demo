function myWaterFull(){
		var boxs = $("view").getElementsByClassName("box");
		var maxWidth = 1500;
		var boxsWidth = boxs[0].offsetWidth;
		var boxsHeight = boxs[0].offsetHeight;
		console.log(boxsHeight);
		var cols = parseInt(maxWidth/boxsWidth);
		var theMargin = 15;
		var heightArr = []; 
		var boxsHeight,minBoxsHeight,minBoxsHeightIndex;
		for(var i = 0; i < boxs.length; i++){
			boxsHeight = boxs[i].offsetHeight + theMargin;
			// console.log(boxs[i].offsetHeight);

			if(i < cols){
				heightArr.push(boxsHeight);
				boxs[i].style.position = "absolute";
				boxs[i].style.top = theMargin + "px";
				boxs[i].style.left = i * (boxsWidth + theMargin) + "px";	
			}else{
				minBoxsHeight = _.min(heightArr);
				minBoxsHeightIndex = getMinValueIndex(heightArr,minBoxsHeight);
				boxs[i].style.position = "absolute";
				boxs[i].style.top = minBoxsHeight + theMargin + "px";
				boxs[i].style.left = minBoxsHeightIndex * (boxsWidth + theMargin) + "px";	
				heightArr[minBoxsHeightIndex] += boxsHeight;
			}
		}
   		$("view").style.height = boxs[boxs.length - 1].offsetTop + boxs[boxs.length - 1].offsetHeight;
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
					], txt, pic, str, htmlStr;

		str = $("view").innerHTML;

		for(var i = 0; i <getJsonLength(json); i++ ){
			str = $("view").innerHTML;
			// console.log(str);
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

function getJsonLength(jsonData){
		var length = 0;
		for(var key in jsonData){
			length++;
		}
		return length;
};

function getMinValue(arr){
		var min;
		for(var i = 0; i < arr.length-1; i++ ){
			if(arr[i] < arr[i+1]){
				min = arr[i];
			}else{
				min = arr[i+1];
			}
		}
		return min;
};

function getMinValueIndex(arr, minValue){
		var index;
		for(var i = 0; i < arr.length-1; i++ ){
			if(arr[i] == minValue ){
				return i;
			}
		}
};

