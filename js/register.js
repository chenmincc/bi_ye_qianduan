
$(".item1 >input").mouseenter(function(){
	$(".err_msg1").show().siblings().hide()
})
$(".item1 >input").mouseleave(function(){
	$(".err_msg1").hide()
})

$(".item3 >input").mouseenter(function(){
	$(".err_msg3").show().siblings().hide()
})
$(".item3 >input").mouseleave(function(){
	$(".err_msg3").hide()
})

$(".item4 >input").mouseenter(function(){
	$(".err_msg4").show().siblings().hide()
})
$(".item4 >input").mouseleave(function(){
	$(".err_msg4").hide()
})


// 点击注册

var loginsubmit = document.getElementById("loginsubmit");
//		用户名验证
	var uname = document.getElementById("uname");
	var err_msg = document.getElementsByClassName("err_msg");
	var succ_user = document.getElementById("succ_user");
	var error_user1 = document.getElementById("error_user1");
	var error_user2 = document.getElementById("error_user2");
	var userCheckSuc = false;
	var userNameReg = /^1[3-9]\d{9}$/;
	//用户名验证
	uname.onfocus = function(){
//		err_msg1.style.display = "block";
		succ_user.style.display = "none";
		error_user2.style.display = "none";
	}

	var secc =false;
	uname.onblur = function(){
//		err_msg1.style.display = "none";
		//光标离开时要对用户名进行一个验证
		if(checkUserName()){
			//验证成功
			userCheckSuc = true;
			$.ajax({
				type:"post",
				url:"http://localhost:3000/user/register1",
				data:{userName:this.value},
				success:function(res){
				//后台需要返回一个表用户名是否存在的变量，
				//-1为存在，0为不存在。
					console.log(res);
					if(res.code == -1){
						secc = false;
	//					error_user2.innerHTML = "已注册"
						succ_user.style.display = "none";
						error_user2.style.display = "none";
						error_user1.style.display = "block";

					}else if(res.code == 0){
						secc = true;
						error_user2.style.display = "none";
						error_user1.style.display = "none";
						succ_user.style.display = "block";

					}
				}
			})
		}else{
			//失败
			error_user2.style.display = "block";
			succ_user.style.display = "none";
			error_user1.style.display = "none";
		}

	}
	function checkUserName(){
		var uVal = uname.value;
		if(userNameReg.test(uVal)){//对用户名进行正则的验证
			return true;//验证成功
		}else{
			return false;//验证失败
		}
	}
//	密码验证
	var pwd = document.getElementById("pwd");
	var succ_pass = document.getElementById("succ_pass");
	var error_pass = document.getElementById("error_pass");
	var passCheckSuc = false;
	var passReg = /^\w{2,20}$/;

	pwd.onfocus = function(){
		succ_pass.style.display = "none";
		error_pass.style.display = "none";
	}
	pwd.onblur = function(){

		if(checkPass()){
			//验证成功
			passCheckSuc = true;
			succ_pass.style.display = "block";
			error_pass.style.display = "none";
		}else{
			//失败
			error_pass.style.display = "block";
			succ_pass.style.display = "none";
		}
	}
	function checkPass(){
		var pVal = pwd.value;
		if(passReg.test(pVal)){//进行正则的验证
			return true;//验证成功
		}else{
			return false;//验证失败
		}
	}

//	密码确认
	var apwd = document.getElementById("apwd");
	var succ_notpass = document.getElementById("succ_notpass");
	var error_notpass = document.getElementById("error_notpass");
	var notpassCheckSuc = false;
	apwd.onfocus = function(){
		succ_notpass.style.display = "none";
		error_notpass.style.display = "none";
	}
	apwd.onblur = function(){
		if(checknotpass()){
			//验证成功
			notpassCheckSuc = true;
			succ_notpass.style.display = "block";
			error_notpass.style.display = "none";
		}else{
			//失败
			error_notpass.style.display = "block";
			succ_notpass.style.display = "none";
		}
	}
	function checknotpass(){
		var notPVal = apwd.value;
		var pVal = pwd.value;
		if(notPVal == pVal){
			return true;
		}else{
			return false;
		}
	}


//	提交
	var insert = false;
	loginsubmit.onclick = function(){
		//if(用户名验证通过 && 密码要通过 && 密码确认通过){

		if(checkUserName && passCheckSuc && notpassCheckSuc && secc ){
			$.ajax({
				type:"post",
				url:"http://localhost:3000/user/register",
				data:{
					userName:uname.value,
					password:pwd.value
				},
				success:function(res){
					if(res.code == 0){
						insert = true;
					}else if(res.code == -1){
						insert = false;

					}
				}
			})
			return true;
		}else{
			return false;
		}
	}



