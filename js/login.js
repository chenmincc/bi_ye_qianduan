
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

// 点击登录
$("#loginsubmit").click(function(){
	$.ajax({
		type:"post",
		url:"http://localhost:3000/user/login",
		data:{
			userName:$("#uname").val(),
			password:$("#pwd").val()
		},
		success:function(res){
			// console.log(res.data.userName);
			if(res.code == -1){
				alert("用户名或密码错误");
				location.href="login.html";
			}else{
				alert("登录成功");
				location.href="index.html?name="+res.data.userName;
				document.cookie = "name="+res.data.userName;
				// alert(res.data.userName)
			}
		}
	});
})
