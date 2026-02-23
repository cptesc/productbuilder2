/**
 * Gossip Note - Main JavaScript
 * Implementing Web Components for high-performance UI
 */

// --- Mock Data ---
const GOSSIP_DATA = [
    {
        id: 1,
        category: '로컬/성수',
        title: '성수동 팝업스토어의 비밀',
        fact: '최근 성수동 팝업스토어 임대료가 하루 2,000만원을 돌파했습니다.',
        twist: '하지만 실제 매출보다 인스타그램 해시태그 발생량이 기업의 주가에 더 큰 영향을 미친다는 데이터가 나왔습니다.',
        question: '단순한 판매보다 "브랜드 경험"에 돈을 쓰는 요즘 트렌드, 어떻게 생각하세요?',
        tags: ['성수', '트렌드', '경제'],
        successRate: 92
    },
    {
        id: 2,
        category: 'IT/테크',
        title: '애플 비전 프로와 대인기피증',
        fact: '애플 비전 프로는 사용자의 눈을 외부 디스플레이에 투사하는 "아이사이트" 기능을 탑재했습니다.',
        twist: '심리학자들은 이것이 오히려 타인과의 눈 맞춤을 방해하여 사회적 불안을 고조시킬 수 있다고 경고합니다.',
        question: '기술이 연결을 돕는 걸까요, 아니면 벽을 쌓는 걸까요?',
        tags: ['IT', '심리', '애플'],
        successRate: 85
    },
    {
        id: 3,
        category: '연애/심리',
        title: 'MBTI보다 정확한 대화법',
        fact: '첫 만남에서 MBTI를 묻는 것은 대화의 주도권을 넘기는 쉬운 방법입니다.',
        twist: '하지만 상대방의 "최근에 가장 돈을 많이 쓴 것"을 묻는 것이 가치관 파악에 3배 더 효과적이라는 통계가 있습니다.',
        question: '오늘 만약 누군가를 만난다면, MBTI 대신 무엇을 물어보고 싶으신가요?',
        tags: ['심리', 'MBTI', '연애'],
        successRate: 98
    }
];

// --- Web Component: GossipCard ---
class GossipCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const data = JSON.parse(this.getAttribute('data'));
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    perspective: 1000px;
                }
                .card {
                    background: oklch(25% 0.04 260);
                    border-radius: 1.5rem;
                    padding: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .card:hover {
                    transform: translateY(-5px);
                    border-color: oklch(70% 0.2 40 / 0.3);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px oklch(70% 0.2 40 / 0.1);
                }
                .badge {
                    display: inline-block;
                    font-size: 0.7rem;
                    background: oklch(70% 0.2 40 / 0.15);
                    color: oklch(70% 0.2 40);
                    padding: 0.2rem 0.6rem;
                    border-radius: 0.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    font-weight: 800;
                    line-height: 1.3;
                }
                .step {
                    margin-bottom: 1rem;
                    padding-left: 1.2rem;
                    position: relative;
                }
                .step::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.5rem;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }
                .fact::before { background: #50fa7b; }
                .twist::before { background: #ff79c6; }
                .question::before { background: #8be9fd; }
                
                .step-label {
                    display: block;
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.2rem;
                    opacity: 0.6;
                }
                .step-content {
                    font-size: 0.9rem;
                    color: oklch(90% 0.02 250);
                }
                .question {
                    margin-top: auto;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 0.8rem;
                    border-left: 3px solid oklch(85% 0.15 90);
                }
                .success-rate {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    font-size: 0.7rem;
                    font-weight: bold;
                    color: oklch(85% 0.15 90);
                }
            </style>
            <div class="card">
                <div class="success-rate">${data.successRate}% Success</div>
                <span class="badge">${data.category}</span>
                <h3>${data.title}</h3>
                
                <div class="step fact">
                    <span class="step-label">Step 1. Fact</span>
                    <div class="step-content">${data.fact}</div>
                </div>
                
                <div class="step twist">
                    <span class="step-label">Step 2. Twist</span>
                    <div class="step-content">${data.twist}</div>
                </div>
                
                <div class="step question">
                    <span class="step-label">Step 3. Deep Question</span>
                    <div class="step-content">${data.question}</div>
                </div>
            </div>
        `;
    }
}

// --- Web Component: TPOFilter ---
class TPOFilter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .filter-container {
                    background: linear-gradient(135deg, oklch(25% 0.04 260), oklch(20% 0.05 280));
                    padding: 2rem;
                    border-radius: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    align-items: flex-end;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .filter-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    flex: 1;
                    min-width: 200px;
                }
                label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: oklch(70% 0.2 40);
                    text-transform: uppercase;
                }
                select, input {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.8rem 1rem;
                    border-radius: 0.8rem;
                    color: white;
                    font-family: inherit;
                    outline: none;
                    transition: all 0.3s ease;
                }
                select:focus, input:focus {
                    border-color: oklch(70% 0.2 40);
                    background: rgba(0, 0, 0, 0.3);
                }
                button {
                    background: oklch(70% 0.2 40);
                    color: black;
                    border: none;
                    padding: 0.8rem 2rem;
                    border-radius: 0.8rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    height: 50px;
                }
                button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 20px oklch(70% 0.2 40 / 0.4);
                }
            </style>
            <div class="filter-container">
                <div class="filter-group">
                    <label>누구를 만나나요? (MBTI)</label>
                    <select id="mbti">
                        <option value="any">상관없음</option>
                        <option value="E">외향형 (E)</option>
                        <option value="I">내향형 (I)</option>
                        <option value="N">직관형 (N)</option>
                        <option value="S">감각형 (S)</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>어디서 만나나요?</label>
                    <input type="text" id="location" placeholder="예: 성수, 강남, 홍대">
                </div>
                <div class="filter-group">
                    <label>어떤 분위기인가요?</label>
                    <select id="mood">
                        <option value="fun">유쾌한</option>
                        <option value="deep">진지한</option>
                        <option value="smart">지적인</option>
                    </select>
                </div>
                <button id="apply-filter">큐레이션 시작</button>
            </div>
        `;

        this.shadowRoot.getElementById('apply-filter').addEventListener('click', () => {
            const event = new CustomEvent('filter-change', {
                detail: {
                    mbti: this.shadowRoot.getElementById('mbti').value,
                    location: this.shadowRoot.getElementById('location').value,
                    mood: this.shadowRoot.getElementById('mood').value
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
}

// Define Custom Elements
customElements.define('gossip-card', GossipCard);
customElements.define('tpo-filter', TPOFilter);

// --- App Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('gossip-feed');

    const renderFeed = (data) => {
        feed.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('gossip-card');
            card.setAttribute('data', JSON.stringify(item));
            feed.appendChild(card);
        });
    };

    // Initial Render
    renderFeed(GOSSIP_DATA);

    // Filter Interaction
    document.addEventListener('filter-change', (e) => {
        console.log('Filtering with:', e.detail);
        // Simulate loading
        feed.style.opacity = '0.5';
        setTimeout(() => {
            // In a real app, this would fetch from an API
            // For now, we just shuffle or filter based on a simple logic
            const filtered = [...GOSSIP_DATA].sort(() => Math.random() - 0.5);
            renderFeed(filtered);
            feed.style.opacity = '1';
        }, 500);
    });
});
