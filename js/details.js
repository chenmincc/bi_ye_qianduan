
	window.onload = function(){
		// 引入头部
		$('#headerCenter').load('header.html')

		// 引入脚部
		$('#footer').load('footer.html')

		// 详情页渲染
		var i= location.search.split("=")[1].split("&")[0];
		// alert(bid)
		$.ajax({
			type:"post",
			url:"http://localhost:3000/goods/update1",
			data:{id: i},
			success : function(res){
				// var json = JSON.parse(res);
				// console.log(json)
				console.log(res)
				var json = res;
				$(".location1").html(json.category);
				$(".location2").html(json.title);
				$(".span").html(json.name);
				$("#divw img").attr("src",'image/'+json.img0);
				$("#big img").attr("src",'image/'+json.imgbig);
				$(".ul-w li:nth-child(1) img").attr("src",'image/'+json.img1);
				$(".ul-w li:nth-child(2) img").attr("src",'image/'+json.img2);
				$(".ul-w li:nth-child(3) img").attr("src",'image/'+json.img3);
				$(".ul-w li:nth-child(4) img").attr("src",'image/'+json.img4);
				$(".detail_tit b").html(json.name);
				$(".sp_hot i").html(json.briefIntroduction);
				$(".detail_tit_md").html(json.introduction);
				$(".price_now b").html(json.klj);
				$(".price_box del").html(json.del);
			}
		});
	}


	// 与购物车衔接处 存localstorage
	$(function(){

		/*$(window).scroll(function(){
			var stop = $("body,html").scrollTop();
			$("#cart").css("top",stop + 458 + "px");
		});*/
		//把需要的属性用户obj封装起来，
		/*var userName;
		if(document.cookie){
			userName = getCookie(name);
		}else{
			userName = location.search.split("&")[1].split("=")[1];
		}*/
		var obj = {
			aCart : $("#add_cart"),
			oCart : $("#cartImg"),
			cartGoodsNum : $("#cartGoodsNum"),
			userName :document.cookie.split("=")[1]
		}
		new ShowGoods(obj).init();
	})

	class ShowGoods{
		constructor(obj){
			this.aCart  = obj.aCart ;
			this.oCart  = obj.oCart ;
			this.cartGoodsNum = obj.cartGoodsNum;
			this.userName = obj.userName;
		}
		init(){
				this.addCart();

				this.computeNum();

				this.goToCartPage();
		}
		addCart(){
			//点击加入购物车按钮
			var _this = this;
			this.aCart.click(function(){

			if(document.cookie){
				var i= location.search.split("=")[1].split("&")[0];
				var bid = i;
//				alert(bid);
				var obj = [
					{
						"bid":bid,
						"num":1
					}
				];
				var objStr = JSON.stringify(obj);
				if(localStorage.getItem(_this.userName+"goods")){
					var storGoods = localStorage.getItem(_this.userName+"goods");
					var storGoodsJson = JSON.parse(storGoods);

					var flag = false;
					for (var i = 0; i < storGoodsJson.length; i++) {
						if(storGoodsJson[i].bid == bid){
							storGoodsJson[i].num++;
							flag = true;
							break;
						}
					}
					if(!flag){
						var goodObj = {"bid":bid,"num":1}
						storGoodsJson.push(goodObj);

					}
					var storGoodsStr = JSON.stringify(storGoodsJson);
					localStorage.setItem(_this.userName+"goods",storGoodsStr);

				}else{
					localStorage.setItem(_this.userName+"goods",objStr);
				}
				_this.computeNum();
			}else{
					alert("登录后才可以进入购物车");
					location.href="login.html";
				}
			})
		}
		computeNum(){
			var _this = this;
			if(localStorage.getItem(_this.userName+"goods")){//有商品信息
				var storGoodsStr = localStorage.getItem(_this.userName+"goods");
				var storGoddsJson = JSON.parse(storGoodsStr);
				var num = 0;
				for (var i = 0; i < storGoddsJson.length; i++) {
					num += Number(storGoddsJson[i].num);
				}
				this.cartGoodsNum.html(num);
			}
		}
		//点击购物车图标进入到购物车页面
		goToCartPage(){
			var _this = this;
			this.oCart.click(function(){
				if(document.cookie){
					location.href = "cart.html?userName=" + _this.userName;
				}else{
					alert("登录后才可以进入购物车");
					location.href="login.html";
				}

			});
		}
	}



	// 放大镜
	$id("box").onmouseenter = function(){
		$id("mask").style.display = "block";
		$id("big").style.display = "block";
	}
	$id("box").onmouseleave = function(){
		$id("mask").style.display = "none";
		$id("big").style.display = "none";
	}
	$id("box").onmousemove = function(e){
		var e = e || event;
		var sTop = document.documentElement.scrollTop;
		var l = e.clientX - $id("box").offsetLeft - $id("mask").offsetWidth/2;
		var t = e.clientY - $id("box").offsetTop - $id("mask").offsetHeight/2 + sTop;
		//console.log(t)
		var maxL = $id("box").clientWidth - $id("mask").offsetWidth;
		var maxT = $id("box").clientHeight - $id("mask").offsetHeight;
		l = l < 0 ? 0 : ( l > maxL ? maxL : l);
		t = t < 0 ? 0 : ( t > maxT ? maxT : t);

		//console.log(t)

		$id("mask").style.left = l + "px";
		$id("mask").style.top = t + "px";

		//大图显示：
		// bigImgLeft / l = (大图的宽度-大图可视区宽度)/(小图宽度-mask的宽度) = 大图宽度/小图宽度 = 大图可视区宽度 / 小图可视区（mask）宽度
		$id("bigImg").style.left = - l * ($id("bigImg").offsetWidth/$id("divw").offsetWidth) + "px";
		$id("bigImg").style.top = - t * ($id("bigImg").offsetHeight/$id("divw").offsetHeight) + "px";
	}




