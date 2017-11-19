var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'];
var timer = null;
var flag = 0;
window.onload = function(){
	var title = document.getElementById("title");
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");
	
	//鼠标事件
	play.onclick = playFun;
	stop.onclick = stopFun;
	
	//键盘事件
	document.onkeyup = function(event){
		event = event || window.event;
		if(event.keyCode == 13){
			if(flag == 0){
				playFun();
				flag = 1;
			}else{
				stopFun();
				flag = 0;
			}
		}
	}
	
	//定义开始抽奖函数
	function playFun(){
		//避免定时叠加
		clearInterval(timer);
		
		timer = setInterval(function(){
			var rondom = Math.floor(Math.random()*data.length);
			title.innerHTML = data[rondom];
		},30)
		play.style.background = "#CCCCCC";
	}
	
	//定义停止抽奖函数
	function stopFun(){
		clearInterval(timer);
		play.style.background = "#036";
	}
}
