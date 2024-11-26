    const img = document.querySelector("img");
    let x = 1; let y = 1;
    let vx = 0.5; let vy = 0.5;

    function mover() {
        let ancho = window.innerWidth;
        let alto = window.innerHeight;
        
        if (x > ancho-img.width || x < 0 || y > alto-img.height || y < 0) {
                
                let r = Math.floor(Math.random()*256);
                let g = Math.floor(Math.random()*256);
                let b = Math.floor(Math.random()*256);

            if (x > ancho-img.width) {
                vx = -0.5;
                img.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
            if (x < 0) {
                vx = 0.5;
                img.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
            
            if (y > alto-img.height || y < 0) {
                vy = (vy * -1);
                img.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
        }
        
        y += vy;
        x += vx;
        img.style.top = `${y}px`;
        img.style.left = `${x}px`;
    }

    let hi = setInterval(mover, 1)
    // clearInterval(hi)
    setTimeout(clearInterval,5000,hi)