var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var square = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebtn = document.querySelectorAll("mode");
var easybtn = document.querySelector('.easy');
var hardbtn = document.querySelector('.hard');

easybtn.addEventListener("click", function()
{
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares = 3;
    //generate new random colors
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < colors.length; i++)
    {
        square[i].style.backgroundColor = colors[i];
    }
    for(var i = 3; i < 6; i++)
    {
        square[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";

});
hardbtn.addEventListener("click", function()
{
    this.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares = 6;
    //generate new random colors
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < colors.length; i++)
    {
        square[i].style.backgroundColor = colors[i];
    }
    
    for(var i = 3; i < 6; i++)
    {
        square[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});
resetbutton.addEventListener("click", function()
{
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < colors.length; i++)
    {
        square[i].style.backgroundColor = colors[i];
    }
    resetbutton.textContent = "New Colors";
    messagedisplay.textContent = "";
});

colordisplay.textContent = pickedcolor;
for(var i = 0; i < square.length; i++)
{
    square[i].style.backgroundColor = colors[i];
    //add click listener to squares
    square[i].addEventListener("click", function()
    {
        //grab color of clicked square
        var clickedcolor = this.style.backgroundColor;
        //compare clicked color to displayed color
        if(clickedcolor === pickedcolor)
        {
            messagedisplay.textContent = "Correct";
            for(var j = 0; j < square.length; j++)
            {
                square[j].style.backgroundColor = pickedcolor;
            }
            //if play again then change bgcolor of h1
            h1.style.backgroundColor = clickedcolor;
            //if correct then ask for play again? and run reset code
            resetbutton.textContent = "Play Again";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "Try Again";
        }
    }
    );
}
function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolors(num)
{
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor()
{
    //pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}