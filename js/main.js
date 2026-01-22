// 主入口 - 初始化和启动
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix');
    
    // 初始化雨滴系统
    rain.init(canvas);
    
    // 初始化事件监听
    initEvents();
    
    // 启动动画
    rain.start();
});
