// 渲染页面
$.ajax({
	type: "get",
	url: "http://localhost:3000/makeup/search",
	data:{
		pageSize:100
	},
	success: function (res) {
		// var json = JSON.parse(res);
		// console.log(json)
		console.log(res.data)
		var json = res.data
		var xptj = "";
		for (var i = 0; i < json.length; i++) {
			xptj += `
			<li>
				<a  class="div_a hrefA" target="_self" href="#"  >
					<div class="a_con4_list">
						<p class="p_img">
						<img class="lazy" src="${json[i].img0}" id="goods_image_187136" style="display: inline;" onerror="this.onerror=null;this.src='http://ecimg.happigo.com/resource/web/new_web/images/img_default_goods.png'">
						</p>
					</div>
					<div>
						<p class="g_other_info">${json[i].head}</p>
						<p class="p_title">${json[i].title}</p>
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
