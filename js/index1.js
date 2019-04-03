//下载快乐购app
$(".d_l_hgp").hover(function () {
	$(".down_load_hpg").show();
}, function () { $(".down_load_hpg").hide(); });


//客服中心下拉框
$(".cus_c_box").hover(function () {
	$(this).addClass("cus_c_border");
	$(".cus_center").show();
}, function () {
	$(this).removeClass("cus_c_border");
	$(".cus_center").hide();
});

//展开分类
$(".li_all_type").hover(function () {
	$(".index_type").show();
}, function () {
	if (!$(".index_type").is(':hidden')) {
		$(".index_type").hide();
	}
});

$(".index_type").hover(function () {
	$(".index_type").show();
}, function () {
	$(".index_type").hide();
});

//首页分类下拉框
$(".index_type_ul .li_has_down").hover(function () {
	$(this).addClass("cur");
	$(this).find(".nav_type_list").show();
}, function () {
	$(this).removeClass("cur");
	$(this).find(".nav_type_list").hide();
});



