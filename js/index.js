
//轮播图
var timer = setInterval(autoPlay, 2000);
var index = 0;
function autoPlay() {
	index++;
	$("#img-list > li").eq(index).fadeIn(100).siblings().fadeOut(100);
	$("#banner-nav-list > span").eq(index).addClass("on").siblings().removeClass("on");
	if (index == $("#img-list > li").length - 1) {
		index = -1;
	}
}
$("#banner-nav-list > span").mouseenter(function () {
	clearInterval(timer);
	//console.log($(this).index());
	index = $(this).index() - 1;
	autoPlay()
}).mouseleave(function () {
	timer = setInterval(autoPlay, 1000);
});



// 判断coolie中是否有用户名，有就把“请登录”改为 “用户名”
window.onload = function () {
	var username = getCookie("name")
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


// 渲染页面
$.ajax({
	type: "get",
	url: "http://localhost:3000/goods/search",
	data:{
		pageSize:100
	},
	success: function (res) {
		// var json = JSON.parse(res);
		// console.log(json)
		console.log(res.data)
		var json = res.data
		var xptj = "";
		for (var i = 3; i < json.length; i++) {
			xptj += `
			<li class="hrefB">
				<a  class="div_a hrefA" target="_blank" href="detalis.html?bid=${json[i]._id}"  >
					<div class="a_con4_list">
						<p class="p_img">
						<img class="lazy" src="image/${json[i].img0}" id="goods_image_187136" style="display: inline;" onerror="this.onerror=null;this.src='http://ecimg.happigo.com/resource/web/new_web/images/img_default_goods.png'">
						</p>
					</div>
					<div>
						<p class="g_other_info">${json[i].em}</p>
						<p class="p_title">${json[i].location3}</p>
					</div>
					<p class="p_p">
						<span class="price1">￥<span>${json[i].klj}</span></span>
						<span class="price2"><del>${json[i].del}</del></span>
					</p>
				</a>
			</li>
				`
		}
		$("#ul_every_day_data").html(xptj);
	}
})



//倒计时
window.setInterval(function () {
	$('.djs_time').each(function () {
			//c = $(this).index();
			n_time = $(this).attr('data-endtime');
			n_time--;
			var day = 0,
			hour = 0,
			minute = 0,
			second = 0;//时间默认值
			if (n_time > 0) {
					day = Math.floor(n_time / (60 * 60 * 24));
					hour = Math.floor(n_time / (60 * 60)) - (day * 24);
					minute = Math.floor(n_time / 60) - (day * 24 * 60) - (hour * 60);
					second = Math.floor(n_time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (hour <= 9) hour = '0' + hour;
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;

			$(this).find(".djs_h").html(hour);
			 $(this).find(".djs_m").html(minute);
				$(this).find(".djs_s").html(second);
			$(this).attr("data-endtime", n_time);

	});
}, 1000);




