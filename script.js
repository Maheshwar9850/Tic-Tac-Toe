const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".reset-bt");
const newbtn = document.querySelector(".btt");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector("#msg-container");

let turn0 = true;

const winpatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = true;
    enablebox();
    msgcontainer.style.display='none';

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box is clicked");
        if(turn0=== true){
            box.textContent = "O";
            turn0 = false;
        }else{
            box.textContent = "X";
            turn0 = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disablebox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText=`Congrats, Winner is ${winner}`;
    msgcontainer.style.display="block";
    disablebox();

}

const checkWinner = () =>{
    for(pattern  of winpatt){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innertext,boxes[pattern[2]].innerText);
        if(pos1val != "" && pos2val!="" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);


