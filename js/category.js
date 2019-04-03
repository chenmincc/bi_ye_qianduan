// 判断coolie中是否有用户名，有就把“请登录”改为 “用户名”
window.onload = function () {
	var username= document.cookie.split("=")[1];
	if(document.cookie){
		for (var i = 0; i < $(".hrefA").length; i++) {
		$(".hrefA")[i].href += "&userName="+username;
		}
		for (var i = 0; i < $(".div_a").length; i++) {
			$(".div_a")[i].href += "&userName="+username;
		}
		$(".a_login").html("["+username+"]");
	}else{
		$(".a_login").html("[登录]");
	}

// 只有登陆后才可以到购物车
	$(".h_c_r_car").click(function(){
		if(document.cookie){
			location.href = "cart.html?userName="+username;
		}else{
			alert("登录后才可以进入购物车");
			location.href="login.html";
		}
	})
}
