function showPage(pageId) {
    // 获取所有页面
    const pages = document.querySelectorAll('.page');

    // 隐藏所有页面
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 显示点击的页面
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// 默认显示属性页面
window.onload = function() {
    showPage('profile-card'); // 默认显示属性页面
};
// 绘制六边形
function drawHexagon(values) {
    const canvas = document.getElementById('hexagon');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const attributes = 6; // 六个属性

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i < attributes; i++) {
        const angle = (Math.PI / 3) * i; // 每个角度 60 度
        const value = values[i] / 100;   // 属性值比例
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.closePath();
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.fillStyle = "#00bfff";
    ctx.fill();
}

// 默认属性值
let attributeValues = [50, 50, 50, 50, 50, 50]; // 对应体育、艺术、数学、编程、社交、语言学

// 初始化绘制
drawHexagon(attributeValues);

// 打开属性调节框
function openAdjustDialog() {
    document.getElementById('adjust-dialog').classList.remove('hidden');
    document.getElementById('adjust-dialog').classList.add('show');
}

// 关闭属性调节框
function closeAdjustDialog() {
    document.getElementById('adjust-dialog').classList.remove('show');
    document.getElementById('adjust-dialog').classList.add('hidden');
}

// 应用调节后的值
function applyAdjustments() {
    attributeValues = [
        document.getElementById('sports').value,
        document.getElementById('art').value,
        document.getElementById('math').value,
        document.getElementById('coding').value,
        document.getElementById('social').value,
        document.getElementById('linguistics').value
    ];

    // 更新六边形
    drawHexagon(attributeValues);

    // 更新左下角属性值
    document.getElementById('sports-val').innerText = attributeValues[0];
    document.getElementById('art-val').innerText = attributeValues[1];
    document.getElementById('math-val').innerText = attributeValues[2];
    document.getElementById('coding-val').innerText = attributeValues[3];
    document.getElementById('social-val').innerText = attributeValues[4];
    document.getElementById('linguistics-val').innerText = attributeValues[5];

    closeAdjustDialog();
}
