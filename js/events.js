// 事件处理
function initEvents() {
    const customInput = document.getElementById('custom-text');
    const customMessage = document.getElementById('custom-message');

    // 自定义消息更新
    function updateCustomMessage() {
        if (!customMessage) return;
        const value = customInput ? customInput.value.trim() : '';
        customMessage.textContent = value || config.defaultCustomText;
    }
    updateCustomMessage();
    customInput?.addEventListener('input', updateCustomMessage);

    // 窗口大小改变
    window.addEventListener('resize', () => {
        rain.resizeCanvas();
        rain.initDrops();
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case ' ':
                e.preventDefault();
                toggleSpeed();
                break;
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
            case 'r':
            case 'R':
                resetMatrix();
                break;
        }
    });

    // 鼠标交互
    rain.canvas.addEventListener('mousemove', (e) => {
        const rect = rain.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const column = Math.floor(x / config.fontSize);
        
        if (column >= 0 && column < rain.drops.length) {
            rain.drops[column] = Math.max(0, rain.drops[column] - 5);
            rain.speeds[column] = Math.min(5, rain.speeds[column] + 0.5);
        }
    });
}
