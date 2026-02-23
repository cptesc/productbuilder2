// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Lotto Ball Web Component
class LottoBall extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        const number = this.getAttribute('number');
        this.render(number);
    }
    render(number) {
        const num = parseInt(number);
        let colorClass = 'n1';
        if (num >= 11 && num <= 20) colorClass = 'n11';
        else if (num >= 21 && num <= 30) colorClass = 'n21';
        else if (num >= 31 && num <= 40) colorClass = 'n31';
        else if (num >= 41) colorClass = 'n41';
        this.innerHTML = `<div class="ball ${colorClass}">${number}</div>`;
    }
}
customElements.define('lotto-ball', LottoBall);

// Main Application Logic
const lever = document.getElementById('lever');
const pouch = document.getElementById('lotto-pouch');
const drawRows = document.querySelectorAll('.draw-row');

let isDrawing = false;

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

async function drawSequence() {
    if (isDrawing) return;
    isDrawing = true;

    // Lever Animation
    lever.classList.add('pulled');
    pouch.classList.add('active');
    
    // Clear previous results
    drawRows.forEach(row => row.innerHTML = '');

    await new Promise(resolve => setTimeout(resolve, 600));
    lever.classList.remove('pulled');

    const allSets = [];
    for (let i = 0; i < 5; i++) {
        allSets.push(generateLottoNumbers());
    }

    // Sequence for each row and ball
    for (let ballIdx = 0; ballIdx < 6; ballIdx++) {
        for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
            const num = allSets[rowIdx][ballIdx];
            const ball = document.createElement('lotto-ball');
            ball.setAttribute('number', num);
            drawRows[rowIdx].appendChild(ball);
            
            // Staggered ejection
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    pouch.classList.remove('active');
    isDrawing = false;
}

lever.addEventListener('click', drawSequence);
