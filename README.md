拆分完成！现在项目结构如下：
simpleWEB/
├── index.html        # HTML 结构
├── styles.css        # CSS 样式
└── js/
    ├── config.js     # 配置参数（颜色、字体大小等）
    ├── rain.js       # 雨滴核心逻辑（初始化、绘制、动画）
    ├── controls.js   # 控制函数（速度切换、全屏、重置）
    ├── events.js     # 事件处理（键盘、鼠标、窗口resize）
    └── main.js       # 主入口（初始化和启动）


各模块职责：
文件	行数	功能
config.js	~10	配置项：字体大小、默认文字、雨滴颜色
rain.js	~80	雨滴系统：画布管理、雨滴初始化、绘制、动画循环
controls.js	~18	控制函数：速度切换、全屏切换、重置效果
events.js	~45	事件绑定：输入框、键盘快捷键、鼠标交互、窗口resize
main.js	~12	程序入口：DOM 加载后初始化并启动
 