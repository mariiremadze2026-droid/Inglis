/* =========================================
   ENGLISH 20 DAY CHALLENGE
   SCRIPT.JS
========================================= */


/* =========================================
   DATA
========================================= */

const words = [

    ["Hello", "გამარჯობა", "ჰელოუ"],
    ["Goodbye", "ნახვამდის", "გუდბაი"],
    ["Please", "გთხოვ", "ფლიზ"],
    ["Thank you", "მადლობა", "თენქ იუ"],
    ["Sorry", "ბოდიში", "სორი"],
    ["Yes", "კი", "იეს"],
    ["No", "არა", "ნოუ"],
    ["Name", "სახელი", "ნეიმ"],
    ["Friend", "მეგობარი", "ფრენდ"],
    ["Family", "ოჯახი", "ფემილი"],
    ["House", "სახლი", "ჰაუს"],
    ["Home", "სახლი / სახლი როგორც ადგილი", "ჰოუმ"],
    ["Room", "ოთახი", "რუმ"],
    ["Door", "კარი", "დორ"],
    ["Window", "ფანჯარა", "უინდოუ"],
    ["Table", "მაგიდა", "თეიბლ"],
    ["Chair", "სკამი", "ჩეარ"],
    ["Floor", "იატაკი", "ფლორ"],
    ["Wall", "კედელი", "უოლ"],
    ["Bed", "საწოლი", "ბედ"],
    ["School", "სკოლა", "სქულ"],
    ["Student", "მოსწავლე / სტუდენტი", "სთიუდენთ"],
    ["Teacher", "მასწავლებელი", "თიჩერ"],
    ["Book", "წიგნი", "ბუქ"],
    ["Pen", "კალამი", "პენ"],

    ["Pencil", "ფანქარი", "ფენსილ"],
    ["Bag", "ჩანთა", "ბეგ"],
    ["Phone", "ტელეფონი", "ფოუნ"],
    ["Computer", "კომპიუტერი", "კომპიუთერ"],
    ["Water", "წყალი", "უოთერ"],
    ["Food", "საჭმელი", "ფუდ"],
    ["Bread", "პური", "ბრედ"],
    ["Milk", "რძე", "მილქ"],
    ["Egg", "კვერცხი", "ეგ"],
    ["Apple", "ვაშლი", "ეფლ"],
    ["Orange", "ფორთოხალი", "ორინჯ"],
    ["Day", "დღე", "დეი"],
    ["Night", "ღამე", "ნაით"],
    ["Morning", "დილა", "მორნინგ"],
    ["Evening", "საღამო", "ივნინგ"],
    ["Today", "დღეს", "თუდეი"],
    ["Tomorrow", "ხვალ", "თუმოროუ"],
    ["Yesterday", "გუშინ", "იესთერდეი"],
    ["Time", "დრო", "თაიმ"],
    ["Money", "ფული", "მანი"],
    ["Work", "სამუშაო", "უორქ"],
    ["Job", "სამსახური", "ჯაბ"],
    ["City", "ქალაქი", "სითი"],
    ["Country", "ქვეყანა", "ქანთრი"],
    ["Street", "ქუჩა", "სთრით"],

    ["Car", "მანქანა", "ქარ"],
    ["Bus", "ავტობუსი", "ბას"],
    ["Train", "მატარებელი", "თრეინ"],
    ["Sea", "ზღვა", "სი"],
    ["Sun", "მზე", "სან"],
    ["Moon", "მთვარე", "მუნ"],
    ["Star", "ვარსკვლავი", "სთარ"],
    ["Sky", "ცა", "სქაი"],
    ["Rain", "წვიმა", "რეინ"],
    ["Snow", "თოვლი", "სნოუ"],
    ["Big", "დიდი", "ბიგ"],
    ["Small", "პატარა", "სმოლ"],
    ["Good", "კარგი", "გუდ"],
    ["Bad", "ცუდი", "ბედ"],
    ["Beautiful", "ლამაზი", "ბიუთიფულ"],
    ["Happy", "ბედნიერი", "ჰეფი"],
    ["Sad", "სევდიანი", "სედ"],
    ["Easy", "ადვილი", "იზი"],
    ["Difficult", "რთული", "დიფიქალთ"],
    ["Fast", "სწრაფი", "ფასთ"],
    ["Slow", "ნელი", "სლოუ"],
    ["Hot", "ცხელი", "ჰოთ"],
    ["Cold", "ცივი", "ქოულდ"],
    ["New", "ახალი", "ნიუ"],
    ["Old", "ძველი", "ოულდ"],

    ["I", "მე", "აი"],
    ["You", "შენ / თქვენ", "იუ"],
    ["He", "ის — კაცი", "ჰი"],
    ["She", "ის — ქალი", "ში"],
    ["We", "ჩვენ", "უი"],
    ["They", "ისინი", "დეი"],
    ["My", "ჩემი", "მაი"],
    ["Your", "შენი / თქვენი", "იორ"],
    ["His", "მისი — კაცის", "ჰიზ"],
    ["Her", "მისი — ქალის", "ჰერ"],
    ["Our", "ჩვენი", "აუერ"],
    ["Their", "მათი", "დეირ"],
    ["What", "რა", "უოთ"],
    ["Where", "სად", "უეარ"],
    ["When", "როდის", "უენ"],
    ["Why", "რატომ", "უაი"],
    ["Who", "ვინ", "ჰუ"],
    ["How", "როგორ", "ჰაუ"],
    ["Which", "რომელი", "უიჩ"],
    ["Because", "იმიტომ რომ", "ბიქოზ"],
    ["And", "და", "ენდ"],
    ["But", "მაგრამ", "ბათ"],
    ["Or", "ან", "ორ"],
    ["With", "თან / ერთად", "უიზ"],
    ["Without", "გარეშე", "უიზაუთ"]

];


/* =========================================
   PHRASES
========================================= */

const phrases = [

    ["Hello! How are you?", "გამარჯობა! როგორ ხარ?", "ჰელოუ! ჰაუ არ იუ?"],
    ["I am fine, thank you.", "კარგად ვარ, მადლობა.", "აი ემ ფაინ, თენქ იუ."],
    ["What is your name?", "რა გქვია?", "უოთ იზ იორ ნეიმ?"],
    ["My name is Mari.", "მე მარი მქვია.", "მაი ნეიმ იზ მარი."],
    ["Nice to meet you.", "სასიამოვნოა შენი გაცნობა.", "ნაის თუ მით იუ."],
    ["Where are you from?", "საიდან ხარ?", "უეარ არ იუ ფრომ?"],
    ["I am from Georgia.", "მე საქართველოდან ვარ.", "აი ემ ფრომ ჯორჯა."],
    ["What are you doing?", "რას აკეთებ?", "უოთ არ იუ დუინგ?"],
    ["I don't understand.", "მე არ მესმის.", "აი დოუნთ ანდერსთენდ."],
    ["Can you help me?", "შეგიძლია დამეხმარო?", "ქენ იუ ჰელფ მი?"],

    ["How old are you?", "რამდენი წლის ხარ?", "ჰაუ ოულდ არ იუ?"],
    ["I am eighteen years old.", "მე თვრამეტი წლის ვარ.", "აი ემ ეითინ იირს ოულდ."],
    ["Where do you live?", "სად ცხოვრობ?", "უეარ დუ იუ ლივ?"],
    ["I live in Georgia.", "მე საქართველოში ვცხოვრობ.", "აი ლივ ინ ჯორჯა."],
    ["What do you like?", "რა მოგწონს?", "უოთ დუ იუ ლაიქ?"],
    ["I like music.", "მე მუსიკა მომწონს.", "აი ლაიქ მიუზიქ."],
    ["I like movies.", "მე ფილმები მომწონს.", "აი ლაიქ მუვიზ."],
    ["I don't know.", "არ ვიცი.", "აი დოუნთ ნოუ."],
    ["I know.", "ვიცი.", "აი ნოუ."],
    ["Please wait.", "გთხოვ, დამელოდე.", "ფლიზ უეით."],

    ["Come here.", "მოდი აქ.", "ქამ ჰიერ."],
    ["Go there.", "წადი იქ.", "გოუ დეარ."],
    ["Listen to me.", "მომისმინე.", "ლისენ თუ მი."],
    ["Look at this.", "ამას შეხედე.", "ლუქ ეთ დის."],
    ["What happened?", "რა მოხდა?", "უოთ ჰეფენდ?"],
    ["Are you okay?", "კარგად ხარ?", "არ იუ ოუქეი?"],
    ["Yes, I am okay.", "კი, კარგად ვარ.", "იეს, აი ემ ოუქეი."],
    ["I am tired.", "დაღლილი ვარ.", "აი ემ თაიერდ."],
    ["I am hungry.", "მშია.", "აი ემ ჰანგრი."],
    ["I am thirsty.", "მწყურია.", "აი ემ თერსთი."],

    ["What time is it?", "რომელი საათია?", "უოთ თაიმ იზ ით?"],
    ["It is late.", "გვიანია.", "ით იზ ლეით."],
    ["See you tomorrow.", "ხვალ გნახავ.", "სი იუ თუმოროუ."],
    ["See you later.", "მოგვიანებით გნახავ.", "სი იუ ლეითერ."],
    ["Good morning!", "დილა მშვიდობისა!", "გუდ მორნინგ!"],
    ["Good evening!", "საღამო მშვიდობისა!", "გუდ ივნინგ!"],
    ["Good night!", "ღამე მშვიდობისა!", "გუდ ნაით!"],
    ["Have a nice day!", "კარგ დღეს გისურვებ!", "ჰევ ე ნაის დეი!"],
    ["Take care!", "თავს გაუფრთხილდი!", "თეიქ ქეარ!"],
    ["Good luck!", "წარმატებები!", "გუდ ლაქ!"],

    ["I love you.", "მე შენ მიყვარხარ.", "აი ლავ იუ."],
    ["I miss you.", "მენატრები.", "აი მის იუ."],
    ["I am happy.", "ბედნიერი ვარ.", "აი ემ ჰეფი."],
    ["I am sad.", "სევდიანი ვარ.", "აი ემ სედ."],
    ["Don't worry.", "არ ინერვიულო.", "დოუნთ უორი."],
    ["Everything is okay.", "ყველაფერი კარგადაა.", "ევრითინგ იზ ოუქეი."],
    ["That's good.", "ეს კარგია.", "დეთს გუდ."],
    ["That's great!", "ეს შესანიშნავია!", "დეთს გრეით!"],
    ["I agree.", "ვეთანხმები.", "აი ეგრი."],
    ["I don't agree.", "არ ვეთანხმები.", "აი დოუნთ ეგრი."]

];


/* =========================================
   CREATE 20 DAYS
========================================= */

const DAYS = 20;
const WORDS_PER_DAY = 25;
const PHRASES_PER_DAY = 10;


/*
   რადგან ჯერჯერობით მონაცემებში 500 სიტყვა
   და 200 ფრაზა არ გვაქვს, დარჩენილი დღეები
   არსებული მონაცემებიდან ავტომატურად მეორდება.
*/

function getDayWords(day) {

    const start = ((day - 1) * WORDS_PER_DAY) % words.length;

    let result = [];

    for (let i = 0; i < WORDS_PER_DAY; i++) {
        result.push(
            words[(start + i) % words.length]
        );
    }

    return result;
}


function getDayPhrases(day) {

    const start = ((day - 1) * PHRASES_PER_DAY) % phrases.length;

    let result = [];

    for (let i = 0; i < PHRASES_PER_DAY; i++) {
        result.push(
            phrases[(start + i) % phrases.length]
        );
    }

    return result;
}


/* =========================================
   STATE
========================================= */

let currentDay =
    Number(localStorage.getItem("currentDay")) || 1;

let currentType = "words";

let progress =
    JSON.parse(
        localStorage.getItem("englishProgress")
    ) || {};


/* =========================================
   ELEMENTS
========================================= */

const daysContainer =
    document.getElementById("days");

const content =
    document.getElementById("content");

const dayNumber =
    document.getElementById("dayNumber");

const learnedWords =
    document.getElementById("learnedWords");

const learnedPhrases =
    document.getElementById("learnedPhrases");

const percent =
    document.getElementById("percent");

const progressBar =
    document.getElementById("progressBar");

const streak =
    document.getElementById("streak");

const goalStatus =
    document.getElementById("goalStatus");

const wordsTab =
    document.getElementById("wordsTab");

const phrasesTab =
    document.getElementById("phrasesTab");


/* =========================================
   INITIALIZE DAY DATA
========================================= */

function createDayProgress(day) {

    if (!progress[day]) {

        progress[day] = {
            words: [],
            phrases: []
        };

    }

}


/* =========================================
   SAVE
========================================= */

function saveProgress() {

    localStorage.setItem(
        "englishProgress",
        JSON.stringify(progress)
    );

    localStorage.setItem(
        "currentDay",
        currentDay
    );
}


/* =========================================
   RENDER DAYS
========================================= */

function renderDays() {

    daysContainer.innerHTML = "";

    for (let i = 1; i <= DAYS; i++) {

        createDayProgress(i);

        const button =
            document.createElement("button");

        button.className = "day-button";

        if (i === currentDay) {
            button.classList.add("active");
        }

        const totalCompleted =
            progress[i].words.length +
            progress[i].phrases.length;

        if (totalCompleted >= 35) {
            button.classList.add("completed");
        }

        button.textContent = `დღე ${i}`;

        button.addEventListener(
            "click",
            () => selectDay(i)
        );

        daysContainer.appendChild(button);
    }
}


/* =========================================
   SELECT DAY
========================================= */

function selectDay(day) {

    currentDay = day;

    currentType = "words";

    saveProgress();

    renderDays();

    renderTabs();

    renderContent();

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   RENDER TABS
========================================= */

function renderTabs() {

    wordsTab.classList.remove("active");
    phrasesTab.classList.remove("active");

    if (currentType === "words") {
        wordsTab.classList.add("active");
    } else {
        phrasesTab.classList.add("active");
    }
}


/* =========================================
   TAB EVENTS
========================================= */

wordsTab.addEventListener(
    "click",
    () => {

        currentType = "words";

        renderTabs();
        renderContent();

    }
);


phrasesTab.addEventListener(
    "click",
    () => {

        currentType = "phrases";

        renderTabs();
        renderContent();

    }
);


/* =========================================
   RENDER CONTENT
========================================= */

function renderContent() {

    content.innerHTML = "";

    createDayProgress(currentDay);

    const data =
        currentType === "words"
            ? getDayWords(currentDay)
            : getDayPhrases(currentDay
