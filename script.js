const canvas = document.getElementById("myCanvas");
const link = document.createElement('a');
const ctx = canvas.getContext("2d");
var ultimo = "#000000"
selectedColor = "#fff";
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
let isDrawing = false;
let selectedTool = "pencil";
ctx.lineWidth = 1

function startDrawing(event) {
    isDrawing = true;
    draw(event);
   }

function draw(event) {
 if (!isDrawing) return;
 const x = event.clientX - canvas.offsetLeft;
 const y = event.clientY - canvas.offsetTop;
 ctx.lineTo(x, y);
 ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
   }

   canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 ctx.fillStyle = "#fff";
});

const brushSizeSelect = document.getElementById("brushSize");
brushSizeSelect.addEventListener("change", function() {
 const brushSize = this.value;
 ctx.lineWidth = brushSize;
});

const pencilToolButton = document.getElementById("pencilTool");
pencilToolButton.addEventListener("mousedown", function() {
 selectedTool = "pencil";
 ctx.strokeStyle = ultimo
 ctx.globalCompositeOperation = "source-over";
});

const eraserToolButton = document.getElementById("eraserTool");
eraserToolButton.addEventListener("mousedown", function() {
 selectedTool = "eraser";
 ctx.strokeStyle = "#fff"
});


function color(c,ec){
    co = document.getElementById(c)
    ctx.strokeStyle = c.getAttribute(ec)
    ultimo = ctx.strokeStyle
    
}

function saveCanvasAsImage() {
    const dataURL = canvas.toDataURL('image/png');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
   }

function colorTwo(){
    c2 = document.getElementById("head")
    console.log(c2.value)
    ctx.strokeStyle = c2.value
    ultimo = c2.value
}

emojiList = ["	&#128512;", "	&#128514;", "&#128150;", "&#10024;","&#128175","&#128139;","&#128140;","&#128068;","&#128143;"]



function changeEmoji(){
    var valor = Math.floor(Math.random() * emojiList.length)
    console.log(valor)
    var sp = document.getElementById("emoji")
    sp.innerHTML = emojiList[valor]
}

setInterval(changeEmoji, 1000)