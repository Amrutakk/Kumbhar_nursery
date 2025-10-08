function openSidebar(){
  document.getElementById("sidebar").style.left="0";
  document.getElementById("overlay").style.display="block";
}
document.getElementById("overlay").onclick=function(){
  document.getElementById("sidebar").style.left="-260px";
  document.getElementById("overlay").style.display="none";
}
