// 雨滴核心逻辑
const rain = {
    canvas: null,
    ctx: null,
    columns: 0,
    drops: [],
    speeds: [],
    colors: [],
    speedMultiplier: 1,

    init(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resizeCanvas();
        this.initDrops();
    },

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / config.fontSize);
    },

    initDrops() {
        this.drops = [];
        this.speeds = [];
        this.colors = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
            this.speeds[i] = Math.random() * 3 + 1;
            this.colors[i] = Math.random() * 0.4 + 0.6;
        }
    },

    draw() {
        const { ctx, canvas, drops, speeds, colors } = this;
        const fontSize = config.fontSize;

        // 半透明黑色覆盖，创建拖尾效果
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < drops.length; i++) {
            const x = i * fontSize + fontSize / 2;
            const y = drops[i] * fontSize;
            const intensity = Math.max(0, 1 - y / canvas.height);
            const [r, g, b] = config.rainColors[i % config.rainColors.length];
            const alpha = Math.min(1, 0.3 + 0.7 * intensity * colors[i]);

            // 绘制雨滴主体
            ctx.beginPath();
            ctx.ellipse(x, y, fontSize * 0.35, fontSize * 0.8, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fill();
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * intensity})`;
            ctx.stroke();

            // 绘制高光
            ctx.beginPath();
            ctx.ellipse(x, y - fontSize * 0.25, fontSize * 0.2, fontSize * 0.25, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * intensity})`;
            ctx.fill();

            // 重置雨滴
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
                speeds[i] = Math.random() * 3 + 1;
                colors[i] = Math.random() * 0.4 + 0.6;
            }

            // 更新位置
            drops[i] += speeds[i] * this.speedMultiplier;
        }
    },

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    },

    start() {
        this.animate();
    }
};
