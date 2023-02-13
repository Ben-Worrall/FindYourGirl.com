
var items = [
  //rachels
"uploads/R1.jpg",
"uploads/R2.jpg",
"uploads/R3.jpg",
"uploads/R4.jpg",
"uploads/R5.jpg",
"uploads/R6.jpg",
"uploads/R7.jpg",
"uploads/R8.jpg",
"uploads/R9.jpg",
"uploads/R10.jpg",
"uploads/R11.jpg",
"uploads/R12.jpg",
"uploads/R13.jpg",
"uploads/R14.jpg",
"uploads/R15.jpg",
"uploads/R16.jpg",
"uploads/R17.jpg",
"uploads/R18.jpg",
"uploads/R19.jpg",
"uploads/R20.jpg",
"uploads/R21.jpg",
"uploads/R22.jpg",
"uploads/R23.jpg",
"uploads/R24.jpg",
"uploads/R25.jpg",
"uploads/R26.jpg",
"uploads/R27.jpg",
"uploads/R28.jpg",
"uploads/R29.jpg",
"uploads/R30.jpg",
"uploads/R31.jpg",
"uploads/R32.jpg",
"uploads/R33.jpg",
"uploads/R34.jpg",
"uploads/R35.jpg",
"uploads/R36.jpg",
"uploads/R37.jpg",
"uploads/R38.jpg",


//s
"uploads/E2.jpg",
"uploads/E3.jpg",
"uploads/E1.jpg",
"uploads/E4.jpg",
"uploads/E5.jpg",
"uploads/E6.jpg",
"uploads/E7.jpg",
"uploads/E8.jpg",
"uploads/E10.jpg",
"uploads/E9.jpg",
"uploads/E11.jpg",
"uploads/E12.jpg",
"uploads/E13.jpg",
"uploads/E14.jpg",
"uploads/E15.jpg",
"uploads/E16.jpg",
"uploads/E17.jpg",
"uploads/E20.jpg",
"uploads/E21.jpg",
"uploads/E22.jpg",
"uploads/E18.jpg",
"uploads/E19.jpg",
"uploads/E25.jpg",
"uploads/E24.jpg",
"uploads/E23.jpg",

//guest celeb
"uploads/de946f1b-8590-41a3-88cf-3e65cb667fc4.png",
"uploads/eminem's daughter.jpg",
"uploads/peterson's daughter.jpg"


];




//preload all images to the cache


$(items).each(function() {
var image = $('<img />').attr('src', this);
});



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

   




   










