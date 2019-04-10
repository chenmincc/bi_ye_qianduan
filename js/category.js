// 判断coolie中是否有用户名，有就把“请登录”改为 “用户名”
window.onload = function () {
	var username= getCookie("name");
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

var keyword = decodeURIComponent(location.search.split('?')[1].split('=')[1])
// 渲染页面
$.ajax({
	type:"post",
	url:"http://localhost:3000/goods/searchName",
	data:{
		name: keyword,
	},
	success: function (res) {
		// var json = JSON.parse(res);
		// console.log(json)
		console.log( keyword)
		console.log(res.data)
		var json = res.data
		var xptj = "";
		for (var i = 0; i < json.length; i++) {
			xptj += `
			<li>
				<a  class="div_a hrefA" target="_self" href="detalis.html?bid=${json[i]._id}"  >
					<div class="a_con4_list">
						<p class="p_img">
						<img class="lazy" src="image/${json[i].img0}" id="goods_image_187136" style="display: inline;" onerror="this.onerror=null;this.src='http://ecimg.happigo.com/resource/web/new_web/images/img_default_goods.png'">
						</p>
					</div>
					<div>
						<p class="g_other_info">${json[i].briefIntroduction}</p>
						<p class="p_title">${json[i].name}</p>
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

// $('input[type=button]').click(function(){
//   var keyword = $('.txt_searchbox').val()
//   location.href = 'category.html?keyword='+ keyword
// })

