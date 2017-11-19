window.onload = function(){
	var login_btn = document.getElementById("login");
	var login_box = document.getElementById("login_box");
	var close = document.getElementById("close");
	//封装添加事件监听程序
	function addEvent(ele,type,hander){
		if(ele.addEventListener){
			//支持DOM2级
			ele.addEventListener(type,hander,false);
		}else if(ele.attachEvent){
			//兼容IE浏览器
			ele.attachEvent('on'+type,hander);
		}else{
			//不支持IE，也不支持DOM2级
			ele['on'+type] = hander;
		}
	}
	
	//显示登录层函数
	function showLogin(){
		login_box.style.display = "block";
	}
	//隐藏登录层函数
	function hideLogin(){
		login_box.style.display = "none";
	}
	
	//点击登录按钮显示登录层
	addEvent(login_btn,'click',showLogin);
	
	//点击关闭按钮隐藏登录层
	addEvent(close,'click',hideLogin);
}
