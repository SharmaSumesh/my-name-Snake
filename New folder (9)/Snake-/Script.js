let direction = {x:0,y:0};
let speed = 2;
let lastpaintime = 0;
let SnakeArr = [{x:11,y:9}];//position of Snake
let food = {x:3,y:5};
let score = 0;
//starting logic
function main(ctime)
{
    window.requestAnimationFrame(main);
    if((ctime-lastpaintime)/1000<1/speed)
    {
        return;
    }

// console.log(ctime);
lastpaintime = ctime;
gameEngine();

}
function iscollide(Snake) {
    for(let i=0;i<SnakeArr.length;i++)
    {
        if(Snake[i].x===Snake[i].x &&Snake[i].y===Snake[i].y)
        {
            return true;
        }
       
    }
    if(Snake[0].x>=10 || Snake[0].y<=0||Snake[0].y>=10 || Snake[0].x<=0)
    {
        return true;
    }
    return false;

    
}
function gameEngine()
{
    // if(iscollide(SnakeArr))
    // {
    //     direction = {x:0,y:0};
    //     alert("game over");
    //     SnakeArr = [{x:4,y:8}];
    //     score = 0;

    // }
    // if(SnakeArr[0].y===food.y && SnakeArr[0].x===food.x)
    // {
    //     score = score + 1;
    //     // SnakeArr.unshift({x:SnakeArr[0].x,y:SnakeArr[1].})
    //     // SnakeArr.push({x:SnakeArr[0].x+direction.x,y:SnakeArr[0].y+direction.y});
    //     SnakeArr.unshift({x: SnakeArr[0].x + inputDir.x, y: SnakeArr[0].y + inputDir.y});
    //     let a = 2;
    //     let b = 7;
    //     food =  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
    //     for(let i=0;i<SnakeArr.length;i++)
    //     {
    //         SnakeArr[i+1] = {...SnakeArr[i]};
    //     }      
    //     SnakeArr[0].y +=direction.y;
    //     SnakeArr[0].x +=direction.x;
    // if(iscollide(SnakeArr)){
    //     // gameOverSound.play();
    //     // musicSound.pause();
    //     direction =  {x: 0, y: 0}; 
    //     alert("Game Over. Press any key to play again!");
    //     SnakeArr = [{x: 13, y: 15}];
    //     // musicSound.play();
    //     score = 0; 
    // }

    // If you have eaten the food, increment the score and regenerate the food
    if(SnakeArr[0].y === food.y && SnakeArr[0].x ===food.x){
        // foodSound.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        SnakeArr.unshift({x: SnakeArr[0].x + direction.x, y: SnakeArr[0].y + direction.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Moving the snake
    for (let i = SnakeArr.length - 2; i>=0; i--) { 
        SnakeArr[i+1] = {...SnakeArr[i]};
    }

    SnakeArr[0].x += direction.x;
    SnakeArr[0].y += direction.y;

    }
    //logic 1 Snake Face
    row.innerHTML ="";
    SnakeArr.forEach((e,index)=>{
        SnakeElement = document.createElement('div');
        SnakeElement.style.gridRowStart = e.y;
        SnakeElement.style.gridcolumnStart = e.x;
        if(index===0)
        {
            SnakeElement.classList.add('head');
        }
        else
        {
            SnakeElement.classList.add('snake');
        }
        
        row.appendChild(SnakeElement);

    });
      //logic 2 Snake food
      foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridcolumnStart = food.x;
        foodElement.classList.add('food');
        row.appendChild(foodElement);











window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>
{
    
direction = {x:0,y:1};
switch(e.key) {
    case "ArrowUp":
        console.log("Keyup");
    direction.x=0;
    direction.y=-1;
  
    break;
    case "ArrowDown":
        console.log("Keydown");
    direction.x=0;
    direction.y=1;
 
    break;
    case "ArrowLeft":
        console.log("Keyleft");
    direction.x=-1;
    direction.y=0;
  
    break;
    case "ArrowRight":
        console.log("KeyRight");
    direction.x=1;
    direction.y=0;
   
    break;
    default:
        break;



}}

)