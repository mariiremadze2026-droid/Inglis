// ==========================================
// 1. მონაცემთა ბაზის გენერატორი (20 დღე)
// ==========================================
// (აქ მოცემულია სტრუქტურა — შეგიძლიათ განავრცოთ 500-ვე სიტყვამდე)
const daysData = {};

for (let d = 1; d <= 20; d++) {
    daysData[d] = {
        words: [
            { en: "Hello", ka: "გამარჯობა", tr: "ჰელოუ" },
            { en: "World", ka: "სამყარო", tr: "უორლდ" },
            { en: "Time", ka: "დრო", tr: "თაიმ" },
            { en: "Person", ka: "ადამიანი", tr: "პერსონ" },
            { en: "Year", ka: "წელი", tr: "იერ" },
            { en: "Way", ka: "გზა / საშუალება", tr: "უეი" },
            { en: "Day", ka: "დღე", tr: "დეი" },
            { en: "Thing", ka: "ნივთი / რამ", tr: "თინგ" },
            { en: "Man", ka: "კაცი", tr: "მენ" },
            { en: "World", ka: "მსოფლიო", tr: "უორლდ" },
            { en: "Life", ka: "ცხოვრება", tr: "ლაიფ" },
            { en: "Hand", ka: "ხელი", tr: "ჰენდ" },
            { en: "Part", ka: "ნაწილი", tr: "ფართ" },
            { en: "Child", ka: "ბავშვი", tr: "ჩაილდ" },
            { en: "Eye", ka: "თვალი", tr: "აი" },
            { en: "Woman", ka: "ქალი", tr: "უუმან" },
            { en: "Place", ka: "ადგილი", tr: "ფლეის" },
            { en: "Work", ka: "სამუშაო", tr: "უორკ" },
            { en: "Week", ka: "კვირა", tr: "უიკ" },
            { en: "Case", ka: "შემთხვევა", tr: "ქეის" },
            { en: "Point", ka: "წერტილი / აზრი", tr: "ფოინთ" },
            { en: "Government", ka: "მთავრობა", tr: "გავერნმენტ" },
            { en: "Company", ka: "კომპანია", tr: "ქომფანი" },
            { en: "Number", ka: "რიცხვი", tr: "ნამბერ" },
            { en: "Group", ka: "ჯგუფი", tr: "გრუფ" }
        ],
        phrases: [
            { en: "How are you?", ka: "როგორ ხარ?", tr: "ჰაუ არ იუ?" },
            { en: "Good morning", ka: "დილა მშვიდობისა", tr: "გუდ მორნინგ" },
            { en: "Thank you very much", ka: "დიდი მადლობა", tr: "თენქ იუ ვერი მაჩ" },
            { en: "See you later", ka: "მოგვიანებით შეხვედრამდე", tr: "სი იუ ლეითერ" },
            { en: "What is your name?", ka: "რა ჰქვია შენს სახელს?", tr: "უოთ იზ იორ ნეიმ?" },
            { en: "Nice to meet you", ka: "სასიამოვნოა თქვენი გაცნობა", tr: "ნაის თუფ მით იუ" },
            { en: "Excuse me", ka: "უკაცრავად", tr: "ექსკიუზ მი" },
            { en: "I don't understand", ka: "ვერ ვხვდები / ვერ ვიგებ", tr: "აი დონთ ანდერსტენდ" },
            { en: "Could you help me?", ka: "შეგიძლიათ დამეხმაროთ?", tr: "ქუდ იუ ჰელფ მი?" },
            { en: "Have a nice day", ka: "კარგ დღეს გისურვებთ", tr: "ჰევ ე ნაის დეი" }
        ]
    };
}

// ==========================================
// 2. State & LocalStorage
// ==========================================
let currentDay = 1;
let learnedItems = JSON.parse(localStorage.getItem('learnedItems')) || {};

function saveProgress() {
    localStorage.setItem('learnedItems', JSON.stringify(learnedItems));
    updateProgressUI();
}

// ==========================================
// 3. Web Speech API (ხმოვანი ფუნქცია)
// ==========================================
function speak(text, rate = 1.0) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // წინა ხმის შეჩერება
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate; // 1.0 ჩვეულებრივი, 0.6 ნელი
        window.speechSynthesis.speak(utterance);
    } else {
        alert("თქვენს ბრაუზერს არ აქვს ხმოვანი მხარდაჭერა.");
    }
}

// ==========================================
// 4. UI რენდერი (სწავლის რეჟიმი)
// ==========================================
const wordsContainer = document.getElementById('words-container');
const phrasesContainer = document.getElementById('phrases-container');
const daySelect = document.getElementById('day-select');

// დღეების ოფციების შევსება
for (let i = 1; i <= 20; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.innerText = `დღე ${i}`;
    daySelect.appendChild(opt);
}

daySelect.addEventListener('change', (e) => {
    currentDay = parseInt(e.target.value);
    renderDayData();
});

function renderDayData() {
    const data = daysData[currentDay];
    
    // სიტყვები
    wordsContainer.innerHTML = data.words.map((item, index) => createCardHTML(item, `d${currentDay}_w${index}`)).join('');
    // ფრაზები
    phrasesContainer.innerHTML = data.phrases.map((item, index) => createCardHTML(item, `d${currentDay}_p${index}`)).join('');

    updateProgressUI();
}

function createCardHTML(item, id) {
    const isLearned = learnedItems[id] ? 'learned' : '';
    const isChecked = learnedItems[id] ? 'checked' : '';

    return `
        <div class="card ${isLearned}" id="card-${id}">
            <div class="card-header">
                <span class="word-en">${item.en}</span>
                <input type="checkbox" class="checkbox-btn" ${isChecked} onchange="toggleLearned('${id}')">
            </div>
            <div class="word-ka">${item.ka}</div>
            <div class="word-transcription">[ ${item.tr} ]</div>
            <div class="card-actions">
                <button class="icon-btn" onclick="speak('${item.en}', 1.0)">🎧 მოსმენა</button>
                <button class="icon-btn" onclick="speak('${item.en}', 0.6)">🐢 ნელი</button>
            </div>
        </div>
    `;
}

window.toggleLearned = function(id) {
    if (learnedItems[id]) {
        delete learnedItems[id];
    } else {
        learnedItems[id] = true;
    }
    const card = document.getElementById(`card-${id}`);
    if (card) card.classList.toggle('learned');
    saveProgress();
};

function updateProgressUI() {
    const totalItems = 20 * (25 + 10);
    const learnedCount = Object.keys(learnedItems).length;
    const percentage = Math.round((learnedCount / totalItems) * 100);

    document.getElementById('total-progress-fill').style.width = `${percentage}%`;
    document.getElementById('total-progress-text').innerText = `${percentage}%`;
}

// ==========================================
// 5. ტესტების სისტემა (Quiz System)
// ==========================================
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const btnLearnMode = document.getElementById('btn-learn-mode');
const btnQuizMode = document.getElementById('btn-quiz-mode');
const learnSection = document.getElementById('learning-section');
const quizSection = document.getElementById('quiz-section');

btnLearnMode.addEventListener('click', () => {
    btnLearnMode.classList.add('active');
    btnQuizMode.classList.remove('active');
    learnSection.classList.add('active');
    quizSection.classList.remove('active');
});

btnQuizMode.addEventListener('click', () => {
    btnQuizMode.classList.add('active');
    btnLearnMode.classList.remove('active');
    quizSection.classList.add('active');
    learnSection.classList.remove('active');
    startQuiz();
});

function startQuiz() {
    // მიმდინარე დღის მონაცემებისგან შევქმნათ კითხვები
    const dayWords = daysData[currentDay].words;
    quizQuestions = dayWords.map(w => {
        // არასწორი პასუხების გენერირება
        const wrongOptions = dayWords
            .filter(item => item.ka !== w.ka)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(item => item.ka);

        const options = [...wrongOptions, w.ka].sort(() => 0.5 - Math.random());

        return {
            question: `რა არის "${w.en}"-ის თარგმანი?`,
            en: w.en,
            correct: w.ka,
            options: options
        };
    }).sort(() => 0.5 - Math.random()).slice(0, 10); // 10 კითხვა

    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-progress-text').innerText = `კითხვა ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('quiz-score-text').innerText = `ქულა: ${score}`;
    document.getElementById('quiz-question').innerText = q.question;
    document.getElementById('next-question-btn').style.display = 'none';

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(btn, opt, q.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, selectedOpt, correctOpt) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selectedOpt === correctOpt) {
        selectedBtn.classList.add('correct');
        score += 10;
        document.getElementById('quiz-score-text').innerText = `ქულა: ${score}`;
    } else {
        selectedBtn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.innerText === correctOpt) b.classList.add('correct');
        });
    }

    const nextBtn = document.getElementById('next-question-btn');
    if (currentQuestionIndex < quizQuestions.length - 1) {
        nextBtn.innerText = "შემდეგი კითხვა ➔";
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            showQuestion();
        };
    } else {
        nextBtn.innerText = "ტესტის დასრულება 🎉";
        nextBtn.onclick = () => {
            alert(`ტესტი დასრულდა! თქვენ დააგროვეთ ${score} ქულა!`);
            startQuiz();
        };
    }
    nextBtn.style.display = 'block';
}

// ==========================================
// 6. ანიმაციური ფონი (Canvas Particles)
// ==========================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 70; i++) {
    particles.push(new Particle());
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateBackground);
}
animateBackground();

// საწყისი ჩატვირთვა
renderDayData();
