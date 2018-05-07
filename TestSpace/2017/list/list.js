function add() {
var newn=document.createElement("tr");
for(var i=0;i<3;i++)
{
  var on=document.createElement("td");
  newn.appendChild(on);
  if(i==2){
    var aa=document.createElement("a");
    on.appendChild(aa);
    var tt=document.createTextNode("删除");
    aa.appendChild(tt);
    aa.setAttribute("href","javascript:void(0)");
    aa.onclick = function () {
      rem(this);
    }
  }
}
document.getElementById("table").appendChild(newn);
}
function rem(ssc)
{
  var paa=ssc.parentNode.parentNode;
  document.getElementById("table").removeChild(paa);
}