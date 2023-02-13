//at the end after choosing last button
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("restart")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  location.reload()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  


var Ftext = document.getElementById("DoneText")
var finished = document.getElementById("finished")
var num = document.getElementById("num")
var right = document.getElementById("right");
var left = document.getElementById("left");
var imgR = document.getElementById('imgR')
var imgL = document.getElementById('imgL')



var items = [
  //rachels
"upload /R1.jpg",
"upload /R2.jpg",
"upload /R3.jpg",
"upload /R4.jpg",
"upload /R5.jpg",
"upload /R6.jpg",
"upload /R7.jpg",
"upload /R8.jpg",
"upload /R9.jpg",
"upload /R10.jpg",
"upload /R11.jpg",
"upload /R12.jpg",
"upload /R13.jpg",
"upload /R14.jpg",
"upload /R15.jpg",
"upload /R16.jpg",
"upload /R17.jpg",
"upload /R18.jpg",
"upload /R19.jpg",
"upload /R20.jpg",
"upload /R21.jpg",
"upload /R22.jpg",
"upload /R23.jpg",
"upload /R24.jpg",
"upload /R25.jpg",
"upload /R26.jpg",
"upload /R27.jpg",
"upload /R28.jpg",
"upload /R29.jpg",
"upload /R30.jpg",
"upload /R31.jpg",
"upload /R32.jpg",
"upload /R33.jpg",
"upload /R34.jpg",
"upload /R35.jpg",
"upload /R36.jpg",
"upload /R37.jpg",
"upload /R38.jpg",


//s
"upload /E2.jpg",
"upload /E3.jpg",
"upload /E1.jpg",
"upload /E4.jpg",
"upload /E5.jpg",
"upload /E6.jpg",
"upload /E7.jpg",
"upload /E8.jpg",
"upload /E10.jpg",
"upload /E9.jpg",
"upload /E11.jpg",
"upload /E12.jpg",
"upload /E13.jpg",
"upload /E14.jpg",
"upload /E15.jpg",
"upload /E16.jpg",
"upload /E17.jpg",
"upload /E20.jpg",
"upload /E21.jpg",
"upload /E22.jpg",
"upload /E18.jpg",
"upload /E19.jpg",
"upload /E25.jpg",
"upload /E24.jpg",
"upload /E23.jpg",

//guest celeb
"upload /de946f1b-8590-41a3-88cf-3e65cb667fc4.png",
"upload /eminem's daughter.jpg",
"upload /peterson's daughter.jpg"


];




var socials = [
//rachels



//s

]

 
//shuffle array of pics
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  shuffle(items)


if(items.length <= 0){
  var done = i
}

  

//after last choice
function done(SRC){
  modal.style.display = "block";
    finished.src = SRC
    imgL.style.visibility='hidden'
    imgR.style.visibility='hidden'
    
    num.innerHTML=""
    document.getElementById("explL").innerHTML = ""
    document.getElementById("explR").innerHTML = ""
    left.style.visibility='hidden'
    right.style.visibility='hidden'
    
}

//left click()
function leftclick(){
  if(items.length>0)
  {
    imgL.src = items.pop();
    num.innerHTML= "Pictures left: "  + items.length
  } else {

    done(imgR.src)
  }
    
}
//right click()
function rightclick(){
  if(items.length>0)
  {
    imgR.src = items.pop();
    num.innerHTML= "Pictures left: "  + items.length
  } else{
    
   done(imgL.src)

  }
}


//buttons when clicked
imgR.src = items.pop();
imgL.src = items.pop();

function BNTclickL() {

    rightclick()

}
    
function BNTclickR() {

    leftclick()

}
    document.onkeydown = checkKey;

    function checkKey(e) {
    
        e = e || window.event;
    
        if (e.keyCode == '38') {
            // up arrow
            
        }
        else if (e.keyCode == '40') {
            // down arrow
            

        }
        else if (e.keyCode == '37') {
           // left arrow
           
          
           if(items.length>0){rightclick()}else{
            rightclick()


            //disable arrow keys
            document.onkeydown = function(ev)
{
   var key;
   ev = ev || event;
   key = ev.keyCode;
   if(key == 37 || key == 38 || key == 39 || key == 40)
  {

     ev.cancelBubble = true;
     ev.returnValue = false;
  }

}
            
          }
            
            
           
        }
        else if (e.keyCode == '39') {
           // right arrow
           
            if(items.length>0){leftclick()}else{
              leftclick()

              //disable arrow keys
              document.onkeydown = function(ev)
{
   var key;
   ev = ev || event;
   key = ev.keyCode;
   if(key == 37 || key == 38 || key == 39 || key == 40)
  {

     ev.cancelBubble = true;
     ev.returnValue = false;
  }

}

            }
           
        }
    
    }

  



    document.getElementById("left").addEventListener("click", BNTclickL);
    document.getElementById("right").addEventListener("click", BNTclickR);

   




   










