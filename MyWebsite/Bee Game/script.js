
let bee= document.getElementById("bee")
let nowposleft= bee.offsetLeft
let nowpostop= bee.offsetTop
let nowposright= bee.offsetRight
let nowposdown= bee.offsetDown
let speed=20
let oriLeft
let oriTop
let lose=new Audio("/res/d27a2ca9-cdae-4514-a3ee-f39ca88883c5/lose.mp3")
let cor=new Audio("/res/d27a2ca9-cdae-4514-a3ee-f39ca88883c5/cor.mp3")
let vic =new Audio("/res/d27a2ca9-cdae-4514-a3ee-f39ca88883c5/vic.mp3")
let bee2 = new Audio("/res/d27a2ca9-cdae-4514-a3ee-f39ca88883c5/bs.mp3")

ok1.ok = 0
ok2.ok = 0



window.onload = function(){
    nowPosLeft = bee.offsetLeft
    nowPosTop = bee.offsetTop
    nowPosRight = bee.offsetLeft
    nowPosdown = bee.offsetTop
    console.log("nowPosLeft = " + nowPosLeft);
    oriLeft= bee.offsetLeft
    oriTop=bee.offsetTop
}

    
up.onclick = function () {
  if (nowPosTop - speed > 0) {
   bee.style.top = (nowPosTop - 50) + "px"
   nowPosTop = (nowPosTop - 50) 
   hittest()
  }
}
left.onclick = function () {
   if (nowPosLeft - speed > 0 ) {
    bee.style.left = (nowPosLeft - 50) + "px"
    nowPosLeft = (nowPosLeft - 50) 
    bee.style.transform = "scaleX(-1)"
       hittest()
    }
}

right.onclick = function () {
   if (nowPosLeft + speed < 950  ) { 
    bee.style.left = (nowPosLeft + 50 ) + "px"
    nowPosLeft = (nowPosLeft + 50) 
    bee.style.transform = "scaleX(1)"
       hittest()
    }
}

down.onclick = function () {
   if (nowPosTop + speed < 500) {
    bee.style.top = (nowPosTop + 50 ) + "px"
    nowPosTop = (nowPosTop + 50) 
       hittest()
   }
}






function hittest() {
    //洋蔥
    bee2.play()
    console.log("hittest");
    let beeleft= bee.offsetLeft
    let beetop= bee.offsetTop
    let garlicleft= garlic.offsetLeft
    let garlictop= garlic.offsetTop
    console.log("beeleft=",beeleft);
    console.log(('garlicleft=',garlicleft));
    let dx= beeleft-garlicleft
    let dy= beetop-garlictop
    dx= Math.abs(dx)
    dy= Math.abs(dy)
    console.log("dx=",dx);
    console.log(('dy=',dy));
    if (dx <=40 && dy<=40) {
    console.log("hit garlic");
        speed=3
    }
    //洋蔥
    bee2.play()
    console.log("hittest");
    
    let dragonflyleft= dragonfly.offsetLeft
    let dragonflytop= dragonfly.offsetTop
    console.log("beeleft=",beeleft);
    console.log(('dragonflyleft=',dragonflyleft));
    let dx1= beeleft-dragonflyleft
    let dy1= beetop-dragonflytop
    dx1= Math.abs(dx1)
    dy1= Math.abs(dy1)
    console.log("dx1=",dx1);
    console.log(('dy1=',dy1));
    if (dx1 <=40 && dy1<=40) {
    console.log("hit dragonfly");
        speed=3
    }
    
     
    //花一
    let f1left= f1.offsetLeft
    let f1top= f1.offsetTop
    let dx2= beeleft-f1left
    let dy2= beetop-f1top
    dx2= Math.abs(dx2)
    dy2= Math.abs(dy2)
    if (dx2 <=40 && dy2<=40) {
    console.log("hit f1");
        ok1.style.visibility="visible"
        cor.play()
        ok1.ok = 1
        if (ok1.ok == 1 && ok2.ok == 1) { vic.play()
            
            
        }
    } 
 //花3
    let f2left= f2.offsetLeft
    let f2top= f2.offsetTop
    let dx3= beeleft-f2left
    let dy3= beetop-f2top
    dx3= Math.abs(dx3)
    dy3= Math.abs(dy3)
    if (dx3 <=40 && dy3<=40) {
    console.log("hit f2");
        ok2.style.visibility="visible"
        cor.play()
        ok2.ok = 1
        if (ok1.ok == 1 && ok2.ok == 1) { vic.play()
    }
}
}






























