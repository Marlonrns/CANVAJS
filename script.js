document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
 
    ctx.fillStyle = "#0072CE";
    ctx.fillRect(0, 0, 1500, 55);
 
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 0, 0);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 50, 1500, 55);
 
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 0, 0);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
     
        const radius = 17;
        const numPoints = 5;
     
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        for (let i = 0; i < numPoints; i++) {
          const theta = (2 * Math.PI * i) / numPoints - Math.PI / 2;
          const x = centerX + radius * Math.cos(theta);
          const y = 128 + radius * Math.sin(theta);
     
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
 

 });