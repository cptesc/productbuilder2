// Lotto Ball Web Component
class LottoBall extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const isSmall = this.hasAttribute('small');
        this.render(number, isSmall);
    }

    render(number, isSmall) {
        const num = parseInt(number);
        let colorClass = 'n1';
        if (num >= 11 && num <= 20) colorClass = 'n11';
        else if (num >= 21 && num <= 30) colorClass = 'n21';
        else if (num >= 31 && num <= 40) colorClass = 'n31';
        else if (num >= 41) colorClass = 'n41';

        this.innerHTML = `
            <div class="ball ${colorClass}">
                ${number}
            </div>
        `;
    }
}

customElements.define('lotto-ball', LottoBall);

// Main Application Logic
const drawArea = document.getElementById('draw-area');
const generateBtn = document.getElementById('generate');
const historyList = document.getElementById('history-list');

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
    generateBtn.disabled = true;
    generateBtn.textContent = 'Drawing...';

    // Move current balls to history if they exist
    const currentBalls = Array.from(drawArea.querySelectorAll('lotto-ball'));
    if (currentBalls.length > 0) {
        addToHistory(currentBalls.map(b => b.getAttribute('number')));
    }

    drawArea.innerHTML = '';
    const newNumbers = generateLottoNumbers();

    for (const num of newNumbers) {
        const ball = document.createElement('lotto-ball');
        ball.setAttribute('number', num);
        drawArea.appendChild(ball);
        await new Promise(resolve => setTimeout(resolve, 300)); // Staggered reveal
    }

    isDrawing = false;
    generateBtn.disabled = false;
    generateBtn.textContent = 'Draw Numbers';
}

function addToHistory(numbers) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    numbers.forEach(num => {
        const ball = document.createElement('lotto-ball');
        ball.setAttribute('number', num);
        ball.setAttribute('small', '');
        historyItem.appendChild(ball);
    });

    historyList.prepend(historyItem);

    // Limit history to 5 items
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

generateBtn.addEventListener('click', drawSequence);

// Initial empty state message or placeholder could go here
