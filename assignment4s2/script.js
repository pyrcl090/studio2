let theCursor = document.querySelector('#cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

theCursor.style.left = `${x}px`
theCursor.style.top = `${y}px`
}

let text = ["AGGGHHHHHHHH!","*BOOOOM*", "CRACK!", "DÉFONCE","EEENOUGH!","FU*K","GET REAL!","HFSAKJHF","I HATE THIS","J'EN PEUX PLUS!","KAPOW!","LAISSER-MOI TRANQUILLE","MERDE!","NO! NO! NO!","OUAHHH!","P*TAIN!","QUOI!","RAAAAAA!", "SH*T!","TAKE THAT","UNBELEIVEABLE","VA TE FAIRE FOUTRE","WHYYYY!","XIAHHHHHHHH","YAKHARAH","ZZZZAAAAAA!!" ];

let rageImage = document.createElement("img");

let images = ["./images/A.png","./images/B.png","./images/C.png","./images/D.png","./images/E.png","./images/F.png","./images/G.png","./images/H.png","./images/I.png","./images/J.png","./images/K.png","./images/L.png","./images/M.png","./images/N.png","./images/O.png","./images/P.png","./images/Q.png","./images/R.png","./images/S.png","./images/T.png","./images/U.png","./images/V.png","./images/W.png","./images/X.png","./images/Y.png","./images/Z.png"]

let oldKey = undefined; 

document.addEventListener("keydown", function(event){
    console.log("keydown");
    console.log(event.key)

if (oldKey !== event.key) {
    console.log("delete pics");
    document.querySelector(".rage-image").innerHTML = " ";
    }

    oldKey = event.key;

    let rageText=" ";
    
    if(event.key == "a"){

    rageText=text[0]

    document.getElementById('a').play();

    makeDiv(images[0]);
    
    }else if(event.key == "b"){
    
      rageText=text[1]

      document.getElementById('b').play();

      makeDiv(images[1]);
      
    }else if(event.key == "c"){
    
      rageText=text[2]

      document.getElementById('c').play();

      makeDiv(images[2]);
      
    }else if(event.key == "d"){
    
      rageText=text[3]

      document.getElementById('d').play();

      makeDiv(images[3]);

    }else if(event.key == "e"){
    
      rageText=text[4]

      document.getElementById('e').play();

      makeDiv(images[4]);

    }else if(event.key == "f"){
    
      rageText=text[5]

      document.getElementById('f').play();

      makeDiv(images[5]);
      
    }else if(event.key == "g"){
    
      rageText=text[6]

      document.getElementById('g').play();

      makeDiv(images[6]);
      
    }else if(event.key == "h"){
    
      rageText=text[7]

      document.getElementById('h').play();

      makeDiv(images[7]);
      
    }else if(event.key == "i"){
    
      rageText=text[8]

      document.getElementById('i').play();

      makeDiv(images[8]);
      
    }else if(event.key == "j"){
    
      rageText=text[9]

      document.getElementById('j').play();

      makeDiv(images[9]);
      
    }else if(event.key == "k"){
    
      rageText=text[10]

      document.getElementById('k').play();

      makeDiv(images[10]);
    
    }else if(event.key == "l"){
    
      rageText=text[11]

      document.getElementById('l').play();

      makeDiv(images[11]);
      
    }else if(event.key == "m"){
    
      rageText=text[12]

      document.getElementById('m').play();

      makeDiv(images[12]);
     
    }else if(event.key == "n"){
    
      rageText=text[13]

      document.getElementById('n').play();

      makeDiv(images[13]);
      
    }else if(event.key == "o"){
    
      rageText=text[14]

      document.getElementById('o').play();

      makeDiv(images[14]);
    
    }else if(event.key == "p"){
    
      rageText=text[15]

      document.getElementById('p').play();

      makeDiv(images[15]);
      
    }else if(event.key == "q"){
    
      rageText=text[16]

      document.getElementById('q').play();

      makeDiv(images[16]);
      
    }else if(event.key == "r"){
    
      rageText=text[17]

      document.getElementById('r').play();

      makeDiv(images[17]);
    
    }else if(event.key == "s"){
    
      rageText=text[18]

      document.getElementById('s').play();

      makeDiv(images[18]);
      
    }else if(event.key == "t"){
    
      rageText=text[19]

      document.getElementById('t').play();

      makeDiv(images[19]);
      
    }else if(event.key == "u"){
    
      rageText=text[20]

      document.getElementById('u').play();

      makeDiv(images[20]);
      
    }else if(event.key == "v"){
    
      rageText=text[21]

      document.getElementById('v').play();

      makeDiv(images[21]);
      
    }else if(event.key == "w"){
    
      rageText=text[22]

      document.getElementById('w').play();

      makeDiv(images[22]);
      
    }else if(event.key == "x"){
    
      rageText=text[23]

      document.getElementById('x').play();

      makeDiv(images[23]);
      
    }else if(event.key == "y"){
    
      rageText=text[24]

      document.getElementById('y').play();

      makeDiv(images[24]);
      
    }else if(event.key == "z"){
    
      rageText=text[25]

      document.getElementById('z').play();

      makeDiv(images[25]);
      
    }

    //capitals

    if(event.key == "A"){

      rageText=text[0]
  
      document.getElementById('a').play();
  
      makeDiv(images[0]);
      
      }else if(event.key == "B"){
      
        rageText=text[1]
  
        document.getElementById('b').play();
  
        makeDiv(images[1]);
        
      }else if(event.key == "C"){
      
        rageText=text[2]
  
        document.getElementById('c').play();
  
        makeDiv(images[2]);
        
      }else if(event.key == "D"){
      
        rageText=text[3]
  
        document.getElementById('d').play();
  
        makeDiv(images[3]);
  
      }else if(event.key == "E"){
      
        rageText=text[4]
  
        document.getElementById('e').play();
  
        makeDiv(images[4]);
  
      }else if(event.key == "F"){
      
        rageText=text[5]
  
        document.getElementById('f').play();
  
        makeDiv(images[5]);
        
      }else if(event.key == "G"){
      
        rageText=text[6]
  
        document.getElementById('g').play();
  
        makeDiv(images[6]);
        
      }else if(event.key == "H"){
      
        rageText=text[7]
  
        document.getElementById('h').play();
  
        makeDiv(images[7]);
        
      }else if(event.key == "I"){
      
        rageText=text[8]
  
        document.getElementById('i').play();
  
        makeDiv(images[8]);
        
      }else if(event.key == "J"){
      
        rageText=text[9]
  
        document.getElementById('j').play();
  
        makeDiv(images[9]);
        
      }else if(event.key == "K"){
      
        rageText=text[10]
  
        document.getElementById('k').play();
  
        makeDiv(images[10]);
      
      }else if(event.key == "L"){
      
        rageText=text[11]
  
        document.getElementById('l').play();
  
        makeDiv(images[11]);
        
      }else if(event.key == "M"){
      
        rageText=text[12]
  
        document.getElementById('m').play();
  
        makeDiv(images[12]);
       
      }else if(event.key == "N"){
      
        rageText=text[13]
  
        document.getElementById('n').play();
  
        makeDiv(images[13]);
        
      }else if(event.key == "O"){
      
        rageText=text[14]
  
        document.getElementById('o').play();
  
        makeDiv(images[14]);
      
      }else if(event.key == "P"){
      
        rageText=text[15]
  
        document.getElementById('p').play();
  
        makeDiv(images[15]);
        
      }else if(event.key == "Q"){
      
        rageText=text[16]
  
        document.getElementById('q').play();
  
        makeDiv(images[16]);
        
      }else if(event.key == "R"){
      
        rageText=text[17]
  
        document.getElementById('r').play();
  
        makeDiv(images[17]);
      
      }else if(event.key == "S"){
      
        rageText=text[18]
  
        document.getElementById('s').play();
  
        makeDiv(images[18]);
        
      }else if(event.key == "T"){
      
        rageText=text[19]
  
        document.getElementById('t').play();
  
        makeDiv(images[19]);
        
      }else if(event.key == "U"){
      
        rageText=text[20]
  
        document.getElementById('u').play();
  
        makeDiv(images[20]);
        
      }else if(event.key == "V"){
      
        rageText=text[21]
  
        document.getElementById('v').play();
  
        makeDiv(images[21]);
        
      }else if(event.key == "W"){
      
        rageText=text[22]
  
        document.getElementById('w').play();
  
        makeDiv(images[22]);
        
      }else if(event.key == "X"){
      
        rageText=text[23]
  
        document.getElementById('x').play();
  
        makeDiv(images[23]);
        
      }else if(event.key == "Y"){
      
        rageText=text[24]
  
        document.getElementById('y').play();
  
        makeDiv(images[24]);
        
      }else if(event.key == "Z"){
      
        rageText=text[25]
  
        document.getElementById('z').play();
  
        makeDiv(images[25]);
        
      }

     


  document.querySelector('#rage-text-one').innerText=rageText;
 
  function makeDiv(imgURL) {
    const theImg = document.createElement("img");
    theImg.classList.add("image");
    theImg.src = imgURL;
    document.querySelector(".rage-image").append(theImg);
  }

})

