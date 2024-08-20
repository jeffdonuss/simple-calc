var r="";
var h;
var o;
var t;
$(".clr").click(function(){
  r="";
  h="";
  o="";
  $("p").text(`${r}`);
});
$(".number1").click(function(){
  if(r===""){
    var p=$(`#${this.id}`).text();
    r=p;
    $("p").text(`${p}`);
  }
  else{
  r=r+$(`#${this.id}`).text();
  $("p").text(`${r}`);
}});
$(".p").click(function(){
 h=r;
 r="";
 o="+";
 $("p").text(`${r}`);
});
$(".x").click(function(){
  h=r;
  r="";
  o="x";
  $("p").text(`${r}`);
 });
 $(".m").click(function(){
  h=r;
  r="";
  o="-";
  $("p").text(`${r}`);
 });
 $(".d").click(function(){
  h=r;
  r="";
  o="/";
  $("p").text(`${r}`);
 });
$(".e").click(function(){
  if(o===""&&r==""){
    alert("pick operation to do");
  }
  else if(r===""){
    alert("enter numbers");
  }
  else if(h===""){
    alert("enter number and operations");
  }
  else if(o==="+"){
    if(h!=""&&o!=""){
      t=parseFloat(h)+parseFloat(r);
     $("p").text(`${t}`);
     r="";
     h="";
     o="";
    }
  }
 else if(o==="-"){
    if(h!=""&&o!=""){
      t=parseFloat(h)-parseFloat(r);
     $("p").text(`${t}`);
     r="";
     h="";
     o="";
    }
  }
  else if(o==="x"){
    if(h!=""&&o!=""){
      t=parseFloat(h)*parseFloat(r);
     $("p").text(`${t}`);
     r="";
     h="";
     o="";
    }
  }
  else{
    if(h!=""&&o!=""){
      t=parseFloat(h)/parseFloat(r);
     $("p").text(`${t}`);
     r="";
     h="";
     o="";}
  }
 
 });
