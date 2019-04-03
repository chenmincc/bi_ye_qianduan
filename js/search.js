var baidu = document.getElementById("keyword");
var oul = document.getElementById("oul");

baidu.onkeyup = function(){
  oul.style.display = "block";
  var sc = document.createElement("script");
  document.body.appendChild(sc);
  sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&cb=box"

};
function box(res){
  var arr = res.s;
  var str = ""
  for (var i = 0; i < arr.length; i++) {
    str += `
      <li><a href="https://www.baidu.com/s?wd=${arr[i]}">${arr[i]}</a></li>
    `;
  }
  oul.innerHTML = str;
}


// //搜索建议
// $('#keyword').keyup(function(e){
//   var act = document.activeElement.id;
//   if (act == 'keyword') {
//     var _container = $('.search_his_list ul');
//     var len = $(".search_his_list ul").find('li').length;
//     // alert(1)
//   }
//   var _lis = _container.find('li');
//   var _keyword = $(this);
//   var index = 0;
//   var new_index = 0;
//   var keyword = '';

//   if (e.keyCode != 40 && e.keyCode != 38) {
//       search_keyword = _keyword.val();
//   }

//   if (e.keyCode == 40){
//     //向下键
//       if ($('.choose').length > 0) {
//           index = $('.choose').attr('index');

//           if (index != (len - 1)) {
//               new_index = parseInt(index) + 1;
//           } else {
//               new_index = index;
//           }

//           keyword = _lis.eq(new_index).find('a').text();
//           if (keyword == '在全球购下搜索') {
//               $('#search_act').val('go_mall');
//               keyword = search_keyword;
//           } else {
//               $('#search_act').val('index');
//           }
//           _keyword.val(keyword);
//           _lis.eq(new_index).addClass('choose').siblings().removeClass('choose');
//       } else {
//           keyword = search_keyword;
//           _keyword.val(keyword);
//           _lis.eq(0).addClass('choose');
//       }
//   }else if(e.keyCode == 38){
//     //向上键
//       if ($('.choose').length > 0) {
//           index = $('.choose').attr('index');

//           if (index != 0) {
//               new_index = parseInt(index) - 1;
//           } else {
//               new_index = index;
//           }

//           keyword = _lis.eq(new_index).find('a').text();
//           if (keyword == '在全球购下搜索') {
//               $('#search_act').val('go_mall');
//               keyword = search_keyword;
//           } else {
//               $("#search_act").val('index');
//           }
//           _keyword.val(keyword);
//           _lis.eq(new_index).addClass('choose').siblings().removeClass('choose');
//       } else {
//           keyword = search_keyword;
//           _keyword.val(keyword);
//           _lis.eq(0).addClass('choose');
//       }
//   }else{
//       var keyword = $(this).val();
//       $.ajax({
//           type:"post",
//           url:"https://www.happigo.com/index.php?act=search&op=search_suggest",
//           async:true,
//           data:{"keyword":keyword},
//           dataType:"json"
//       }).done(function(data) {
//           if (data) {
//               var str = '';

//               if (data.ec_data != '') {
//                   for (var i in data.ec_data) {
//                       if (data.mall_sum > 0) {
//                           j = parseInt(i) + 1;
//                       } else {
//                           j = i;
//                       }

//                       str += '<li index="' + j +'" class="ec_key"><a class="s_h_a_key" href="javascript:void(0);">' + data.ec_data[i]['keyword'] + '</a><span class="s_h_span_count">约' + data.ec_data[i]['object_count'] + '个结果</span></li>';
//                   }
//               }

//               if( str == '' ){
//                 $(".search_his_list").hide();
//               }else{
//                 _container.html('');
//                 _container.append(str);
//                 $('.search_his_list').css('display', 'block');
//               }
//           }
//       });
//   }
// });


// $(".txt_searchbox").focusout(function () { $(".search_his_list").hide('slow'); });

// var strstr = $('#keyword').attr('placeholder');
// $('#keyword').focus(function(){
//   $(this).css({'color':'#666'});
//   if($(this).val()==strstr){
//       $(this).val('');
//   }
// }).blur(function(){
//   if($(this).val()==''){
//       $(this).val(strstr);
//   }
// });

// $(document).keypress(function(e) {
//   var act = document.activeElement.name;
//   if (e.which == 13 && act == 'keyword') {
//       var text = '';
//       if ($('.mall_key.choose').length > 0) {
//           $('#search_act').val('go_mall');
//           text = search_keyword;
//       } else if ($('.choose').length > 0) {
//           $('#search_act').val('index');
//           text = $('.choose').find('a').text();
//       } else {
//           $('#search_act').val('index');
//           text = $('#keyword').val() ? $('#keyword').val() : $('.txt_f_sb').val();
//           text = text ? text : $("#keyword").attr('hc');
//       }
//       $('#keyword').val(text);
//       $('.btn_search').click();

//       return false;
//   }
// });

// $(".hc").children('ul').children('li').click(function(){
//   $(this).parent().children('li').removeClass("on");
//   $(this).addClass("on");
//   $('#search_act').attr("value",$(this).attr("op"));
//   $('#keyword').attr("placeholder",$(this).attr("title"));
// });

// //滑动
// $('.search_his_list ul').on("hover", "li", function() {
//   $(this).addClass('choose').siblings().removeClass('choose');
// });


// //填充搜索框
// $(".search_his_list ul").on("click", ".ec_key", function() {
//   var text = $(this).find('a').text();
//   $('#keyword').val(text);
//   $('#search_act').val('index');
//   $('.btn_search').click();
// });

// //防止用户输入空搜索词
// $('.btn_search').click(function(){
//   if($('#keyword').val()==''&&$('#keyword').attr('placeholder')==''){
//       var keyword = $('#keyword').val();
//       if(keyword.replace(/\s/g,"")==''){
//           alert('输入内容不能为空');
//           return false;
//       }
//   }
//   var de_word = $('#keyword').attr('hc');
//   if($('#keyword').val()==''){
//       $('#keyword').val(de_word);
//   }else{
//       var reg =/(^\s+)|(\s+$)/g;
//       var re = reg.test($('#keyword').val());
//       if(re){
//           if(de_word&&$('#keyword').val()==''){
//               $('#keyword').val(de_word);
//           }else if($('#keyword').val()==''){
//               alert('输入内容不能位空!');
//               return false;
//           }else{
//               if($('#keyword').val().replace(/(^\s*)|(\s*$)/g,"")==''){
//                   alert('输入内容不能为空!');
//                   return false;
//               }
//           }
//       }
//   }
//   $('#form1').submit();
// });
