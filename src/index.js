import 'fabric';

let textContent;

const canvas = new fabric.Canvas('c');
document.getElementById('download').addEventListener('click', save);
document.getElementById('apply').addEventListener('click', apply);

const reactiveInputs = document.querySelectorAll('.reactive');
reactiveInputs.forEach(myel => myel.addEventListener('change', apply));


const imgBlob = new Image;
imgBlob.src = '../assets/image.png';
imgBlob.crossorigin = "anonymous";

imgBlob.onload = () => {
   const imgInstance = new fabric.Image(imgBlob);
   canvas.add(imgInstance);
}

const contentEl = document.getElementById('content');
const fontSizeEl = document.getElementById('font-size')
const colorEl = document.getElementById('color');
const topEl = document.getElementById('top');
const leftEl = document.getElementById('left');

function apply(){
if (textContent !== undefined) canvas.remove(textContent);
   const content = contentEl.value;
   const fontSize = Number(fontSizeEl.value);
   const color = colorEl.value;
   let top = Number(topEl.value);
   let left = Number(leftEl.value);
   if (top == 0 ) top = 400 - fontSize;
   if (left == 0 ) left = (400 - fontSize*5.5/2)/2

   textContent = new fabric.Text(content, { top, left, fontSize, fill: color });
   canvas.add(textContent);
   canvas.renderAll();
}

function save() {
   console.log('saving');
   const myEl = document.createElement('a');
   document.body.appendChild(myEl);
   myEl.download = 'data';
   myEl.href = canvas.toDataURL();
   myEl.click();
}


document.addEventListener('keydown', e => {
   const key = e.key;
   
   if (key === 'u') topEl.value = Number(topEl.value) + 1;
   else if (key === 'i') topEl.value = Number(topEl.value) - 1;

   else if (key === 'l') leftEl.value = Number(leftEl.value) + 1;
   else if (key === 'm') leftEl.value = Number(leftEl.value) - 1;

   else if (key === 'f') fontSizeEl.value = Number(fontSizeEl.value) + 1;
   else if (key === 'g') fontSizeEl.value = Number(fontSizeEl.value) - 1;

   apply()
})
