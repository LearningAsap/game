let number=  Math.random() * 20;
let secretnumber=Math.trunc(number);
let chanceleft=5;
let score=100
console.log(secretnumber);

document.querySelector(".check").addEventListener("click",function(){
    let usernumber= document.querySelector(".input").value;
    if(chanceleft==1){
        alert("you lose the game ",window.location.reload());
      setTimeout(swal,3000);
      
       }
    else if(chanceleft==2){
        document.querySelector(".danger").textContent="danger! you left only one chance"
    }
    
    if(usernumber){
        document.querySelector(".input").value="";
        document.querySelector(".chances").textContent="";
        
    if (usernumber==secretnumber){
        document.querySelector(".guess").textContent="you won"; 
    }
    else if(usernumber>secretnumber){
        document.querySelector(".guess").textContent="your guess is high"
    
        if (chanceleft==0){
            document.querySelector(".chances").textContent="you won the match"
        }
        score=score-20;
        document.querySelector(".score").textContent="your current score is " +score;
    
        chanceleft=chanceleft-1;
        document.querySelector(".chances").textContent='you have '+ chanceleft + ' chances left';
    }
    else if(usernumber<secretnumber){
        document.querySelector(".guess").textContent="your number is low"
        if(chanceleft==1 ){
            document.querySelector(".chances").textContent="you lose "
        }
        score=score-20;
        document.querySelector(".score").textContent="your current score is "+score;
        chanceleft=chanceleft-1;
        document.querySelector(".chances").textContent="you have "+ chanceleft + " chances left";
    }}
});
