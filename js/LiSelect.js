window.onload = function(){
	var box = document.getElementById("divselect");
	var title = box.getElementsByTagName("cite")[0];
	var menu = box.getElementsByTagName("ul")[0];
	var as = box.getElementsByTagName("a");
	var index = -1;
	
	//点击cite区域触发事件
	title.onclick = function(event){
		//兼容处理
		event = event || window.event;
		menu.style.display = "block";
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
		
		//点击事件里添加键盘事件
		document.onkeyup = function(event){
			event = event || window.event;
			if(event.keyCode == 40){
				index++;
				if(index>=as.length){
					index = 0;
				}
				for(var i=0;i<as.length;i++){
					as[i].style.background = "#fff";
				}
				as[index].style.background = "#ccc";
			}else if(event.keyCode == 38){
				index--;
				if(index<0){
					index = as.length-1;
				}
				for(var i=0;i<as.length;i++){
					as[i].style.background = "#fff";
				}
				as[index].style.background = "#ccc";
			}else if(event.keyCode == 13){
				for(var i=0;i<as.length;i++){
					as[i].style.background = "#fff";
				}
				title.innerHTML = as[index].innerHTML;
				menu.style.display = "none";
			}
		}
	}
	
	//滑过、离开和点击每个选项时
	for(var i=0;i<as.length;i++){
		as[i].onmouseover = function(){
			this.style.background = "#ccc";
		}
		as[i].onmouseout = function(){
			this.style.background = "#fff";
		}
		as[i].onclick = function(event){
			event = event || window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
			menu.style.display = "none";
			title.innerHTML = this.innerHTML;
		}
	}
	
	//点击页面空白处
	document.onclick = function(){
		menu.style.display = "none";
	}
}
