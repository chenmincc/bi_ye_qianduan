$('input[type=button]').click(function(){
  alert(3)
})




var oul = document.getElementById("oul");

$('#keyword').keyup = function(){
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




