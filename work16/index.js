<<<<<<< HEAD
function $(id){
    return document.getElementById(id);
}
$('smallBox').onmouseover = function(){
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
$('smallBox').onmousemove = function(){
    $('mask').style.display = 'none';
    $('smallBox').style.display = 'none';
};
$('smallBox').onmousemove = function (event) {
    var event = event ||window.event;
    var pageX = event.pageX || event.clientX +document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY +document.documentElement.scrollTop;
    var boxX = pageX -$('box').offsetLeft;
    var boxY = pageY -$('box').offsetTop;
    var maskX = boxX - $('mask').offsetWidth/2;
    var maskY = boxY - $('mask').offsetHeight/2;
    if(maskX<0){
        maskX = 0;
    }
    if(maskX>$('smallBox').offsetWidth - $('mask').offsetWidth){
        maskX>$('smallBox').offsetWidth - $('mask').offsetWidth
    }
    if(maskY<0){
        maskY = 0;
    }
    if(maskY>$('smallBox').offsetHeight- $('mask').offsetHeight){
        maskY>$('smallBox').offsetHeight- $('mask').offsetHeight
    }
    $('mask').style.left = -rate *maskX +'px';
    $('mask').style.top = -rate *maskY +'px';
    var bigImgToMove =$('bigImg').offsetWidth -$('bigBox').offsetWidth;
    var maskToMove = $('smallBox').offsetWidth - $('mask').offsetWidth;
    var rate = bigImgToMove /maskToMove;
    $('bigImg').style.left = -rate *maskX +'px';
    $('bigImg').style.top = -rate *maskY +'px';
  }
=======
function $(id) {
    return document.getElementById(id);
}
$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
$('smallBox').onmouseout = function(){
    $('mask').style.display = 'none';
    $('bigBox').style.display = 'none';
}
$('smallBox').onmousemove = function (event) {
    var event = event || window.event;
    var pgeX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pgeY = event.pageX || event.clientY + document.documentElement.scrollLeft;
    var boxX = pageX - $('box').offsetLeft;
    var boxY = pageY - $('box').offsetTop;
    var maskX = boxX - $('mask').offsetWidth/2;
    var maskY = boxY - $('mask').offsetHeight/2;
    if (maskX < 0){
        maskX = 0;
    }
    if (mask > $('smallBox').offsetWidth - $('mask').offsetWidth){
        mask = $('smallBox').offsetWidth - $('mask').offsetWidth;
    }
    if (maskY < 0){
        maskY = 0;
    } 
    if (maskY > $('smallBox').offsetHeight - $('mask').offsetHeight){
        maskY = $('smallBOx').offsetHeight - $('mask').offsetHeight;
    }
    $('mask').style.left = maskX + 'px';
    $('mask').style.left = maskY + 'px';
    $('bigImg').style.left = -rate * maskX + 'px';
    $('bigImg').style.top = -rate * maskY + 'px'
};
>>>>>>> 03c17ca71fc9f92c01967f86d959794ea24775f9
