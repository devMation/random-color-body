setInterval(() => {
    let a = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let c = Math.floor(Math.random() * 255) + 1;
  
    let color = `rgb(${a}, ${b}, ${c})`;
  
    document.body.style.backgroundColor = color;
    document.body.innerHTML = `<h1>${color}</h1>`;
  }, 1000);
  