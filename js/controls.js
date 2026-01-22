// 控制函数
function toggleSpeed() {
    rain.speedMultiplier = rain.speedMultiplier === 1 ? 3 : rain.speedMultiplier === 3 ? 0.5 : 1;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function resetMatrix() {
    rain.initDrops();
    rain.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    rain.ctx.fillRect(0, 0, rain.canvas.width, rain.canvas.height);
}
