const levels = [

    /* =========================================
       LEVEL 1 - ARRANGE
    ========================================= */
    {
        id: 1,
        type: "arrange",
        difficulty: 1,
        menuTitle: "Arrange the Code",
        menuDesc: "Put the lines in the right order.",

        leftTitle: "YOUR CARDS",
        leftDescription: "Drag them into the correct order",
        rightTitle: "BUILD YOUR SOLUTION",
        rightDescription: "Arrange the code here",

        cards: [
            { id: "declare_a,b", text: "int a = 10 , b = 9;" },
            { id: "sum",         text: "int sum = a + b;" },
            { id: "print",       text: "cout << sum;" }
        ],
        correctOrder: ["declare_a,b", "sum", "print"],
        output: "> 19"
    },

    /* =========================================
       LEVEL 2 - LOGICAL ERROR
    ========================================= */
    {
        id: 2,
        type: "logical_Error",
        difficulty: 1,
        menuTitle: "Find the Bug",
        menuDesc: "Spot the line with the logical error.",

        leftTitle: "CODE",
        leftDescription: "Drag the line that contains the bug",
        rightTitle: "CHOOSE THE BUG",
        rightDescription: "Drop the incorrect line here",

        cards: [
            { id: "declare_age", text: "int age = 25;" },
            { id: "condition",   text: "if (age = 19) {" },
            { id: "age_19",      text: 'cout << "Age is 19" << endl; }' },
            { id: "else",        text: 'else { cout << "Age is not 19" << endl; }' }
        ],
        correctOrder: ["condition"],
        output: "Bug found on line 2!"
    },

    /* =========================================
       LEVEL 3 - COMPLETE
    ========================================= */
    {
        id: 3,
        type: "complete",
        difficulty: 1,
        menuTitle: "Complete the Loop",
        menuDesc: "Drag the missing loop condition.",

        leftTitle: "CODE PIECES",
        leftDescription: "Drag the missing piece",
        rightTitle: "COMPLETE THE CODE",
        rightDescription: "Drop the missing code here",

        codePreview: [
            { num: 1, code: "for (int i = 1; ________; i++)", missing: true },
            { num: 2, code: "{" },
            { num: 3, code: ' cout << i << " ";' },
            { num: 4, code: "}" }
        ],

        cards: [
            { id: "wrong_1", text: "i = 5;" },
            { id: "correct", text: "i <= 5;" },
            { id: "wrong_2", text: "i >= 5;" }
        ],
        correctOrder: ["correct"],
        output: "> 1 2 3 4 5 "
    },

    /* =========================================
       LEVEL 4 - DEBUG
    ========================================= */
    {
        id: 4,
        type: "debug",
        difficulty: 2,
        menuTitle: "Fix the Array Bug",
        menuDesc: "Pick the correct fix for the crash.",

        leftTitle: "FIX OPTIONS",
        leftDescription: "Drag the correct fix",
        rightTitle: "FIX THE BUG",
        rightDescription: "Drop the correct code here",

        codePreview: [
            { num: 1, code: "int numbers[] = {10, 20, 30};" },
            { num: 2, code: "cout << numbers[3]", error: true }
        ],

        cards: [
            { id: "wrong_1", text: "cout << numbers[1]" },
            { id: "correct", text: "cout << numbers[1];" },
            { id: "wrong_2", text: "cout << numbers[3];" }
        ],
        correctOrder: ["correct"],
        output: "> Code fixed successfully!"
    },

    /* =========================================
       LEVEL 5 - FUNCTION
    ========================================= */
    {
        id: 5,
        type: "function",
        difficulty: 2,
        menuTitle: "Complete the Function",
        menuDesc: "Fill in the missing return line.",

        leftTitle: "CODE PIECES",
        leftDescription: "Drag the missing line",
        rightTitle: "COMPLETE THE FUNCTION",
        rightDescription: "Drop the correct code here",

        codePreview: [
            { num: 1, code: "int multiply(int a, int b) {" },
            { num: 2, code: "___________", missing: true },
            { num: 3, code: "}" },
            { num: 4, code: "cout << multiply(4, 5);" }
        ],

        cards: [
            { id: "wrong_1", text: "return a + b;" },
            { id: "correct", text: "return a * b;" },
            { id: "wrong_2", text: "cout << a * b;" }
        ],
        correctOrder: ["correct"],
        output: "> 20"
    },

    /* =========================================
       LEVEL 6 - PREDICT THE OUTPUT
    ========================================= */
    {
        id: 6,
        type: "Display",
        difficulty: 2,
        menuTitle: "Predict the Output",
        menuDesc: "Work out what the modulo prints.",

        leftTitle: "CODE PIECES",
        leftDescription: "Choose the output",
        rightTitle: "PICK THE OUTPUT",
        rightDescription: "Drop the correct answer here",

        codePreview: [
            { num: 1, code: "int x = 10 ;" },
            { num: 2, code: "int y = 19;" },
            { num: 3, code: "cout << x % y;" }
        ],

        cards: [
            { id: "wrong_1", text: "> 2" },
            { id: "correct", text: "> 10" },
            { id: "wrong_2", text: "> 53" },
            { id: "wrong_3", text: "> 15" }
        ],
        correctOrder: ["correct"],
        output: "> 10"
    },

    /* =========================================
       LEVEL 7 - COMPLETE (two blanks)
    ========================================= */
    {
        id: 7,
        type: "complete_multi",
        difficulty: 2,
        menuTitle: "Complete the Swap",
        menuDesc: "Two lines are missing — fill in both to swap the values.",

        leftTitle: "CODE PIECES",
        leftDescription: "Drag each piece to its matching blank",
        rightTitle: "COMPLETE THE FUNCTION",
        rightDescription: "Drop one piece into each blank",

        codePreview: [
            { num: 1, code: "void swap(int &a, int &b) {" },
            { num: 2, code: "int temp = a;" },
            { num: 3, blank: "blank1" },
            { num: 4, blank: "blank2" },
            { num: 5, code: "}" }
        ],

        /* which card id is correct for each blank */
        blanks: {
            blank1: "a_eq_b",
            blank2: "b_eq_temp"
        },

        cards: [
            { id: "a_eq_b",      text: "a = b;" },
            { id: "b_eq_temp",   text: "b = temp;" },
            { id: "temp_eq_b",   text: "temp = b;" },
            { id: "a_eq_temp",   text: "a = temp;" }
        ],
        output: "> a = 20, b = 10 (swapped)"
    },

    /* =========================================
       LEVEL 8 - LOGICAL ERROR (harder, more lines)
    ========================================= */
    {
        id: 8,
        type: "logical_Error",
        difficulty: 3,
        menuTitle: "Find the Subtle Bug",
        menuDesc: "A wrong operator breaks the condition.",

        leftTitle: "CODE",
        leftDescription: "Drag the line that contains the bug",
        rightTitle: "CHOOSE THE BUG",
        rightDescription: "Drop the incorrect line here",

        cards: [
            { id: "decl_score",  text: "int score = 45;" },
            { id: "decl_pass",   text: "bool passed = true;" },
            { id: "condition",   text: "if (score >= 50 || passed) {" },
            { id: "print_pass",  text: 'cout << "Result: PASS";' },
            { id: "else",        text: 'else { cout << "Result: FAIL"; }' }
        ],
        correctOrder: ["condition"],
        output: "Bug found: should be && not ||"
    },

    /* =========================================
       LEVEL 9 - COMPLETE (recursion base case)
    ========================================= */
    {
        id: 9,
        type: "complete",
        difficulty: 3,
        menuTitle: "Complete the Recursion",
        menuDesc: "Pick the correct base case.",

        leftTitle: "CODE PIECES",
        leftDescription: "Drag the missing base case",
        rightTitle: "COMPLETE THE FUNCTION",
        rightDescription: "Drop the missing code here",

        codePreview: [
            { num: 1, code: "int factorial(int n) {" },
            { num: 2, code: "________", missing: true },
            { num: 3, code: "return n * factorial(n - 1);" },
            { num: 4, code: "}" },
            { num: 5, code: "cout << factorial(4);" }
        ],

        cards: [
            { id: "wrong_1", text: "if (n == 0) return 0;" },
            { id: "correct", text: "if (n == 0) return 1;" },
            { id: "wrong_2", text: "if (n == 1) return 0;" }
        ],
        correctOrder: ["correct"],
        output: "> 24"
    },

    /* =========================================
       LEVEL 10 - DEBUG (integer division)
    ========================================= */
    {
        id: 10,
        type: "debug",
        difficulty: 3,
        menuTitle: "Fix the Division Bug",
        menuDesc: "The result is being truncated to an int.",

        leftTitle: "FIX OPTIONS",
        leftDescription: "Drag the correct fix",
        rightTitle: "FIX THE BUG",
        rightDescription: "Drop the correct code here",

        codePreview: [
            { num: 1, code: "int a = 5, b = 2;" },
            { num: 2, code: "cout << a / b;", error: true }
        ],

        cards: [
            { id: "wrong_1", text: "cout << a / b;" },
            { id: "correct", text: "cout << (float)a / b;" },
            { id: "wrong_2", text: "cout << a / (int)b;" }
        ],
        correctOrder: ["correct"],
        output: "> 2.5"
    }

];


/* =========================================
   GAME STATE
========================================= */

let currentLevelIndex = 0;

let completedLevels = [];

function getCompleted() {
    return completedLevels;
}

function markCompleted(id) {
    if (!completedLevels.includes(id)) {
        completedLevels.push(id);
    }
    renderHub();
}


/* =========================================
   ELEMENTS
========================================= */

const hubScreen   = document.getElementById("hubScreen");
const hubGrid     = document.getElementById("hubGrid");
const gameScreen  = document.getElementById("gameScreen");
const backToMenuBtn = document.getElementById("backToMenuBtn");

const progressText   = document.getElementById("progressText");
const progressFill   = document.getElementById("progressFill");
const cardsContainer = document.getElementById("cardsContainer");
const solutionContainer = document.getElementById("solutionContainer");
const output         = document.getElementById("output");
const resultMessage  = document.getElementById("resultMessage");
const checkBtn       = document.getElementById("checkBtn");
const resetBtn       = document.getElementById("resetBtn");
const nextLevelBtn   = document.getElementById("nextLevelBtn");
const outputSection  = document.querySelector(".output-section");

const leftPanelTitle       = document.getElementById("leftPanelTitle");
const leftPanelDescription = document.getElementById("leftPanelDescription");
const rightPanelTitle       = document.getElementById("rightPanelTitle");
const rightPanelDescription = document.getElementById("rightPanelDescription");


/* =========================================
    (LEVEL SELECT SCREEN)
========================================= */

function renderHub() {

    const completed = getCompleted();
    hubGrid.innerHTML = "";

    levels.forEach(level => {

        const done = completed.includes(level.id);

        const card = document.createElement("div");
        card.className = "hub-card" + (done ? " done" : "");


        card.innerHTML = `
            <div class="hub-card-top">
                <span class="hub-num">${level.id}</span>
                ${done ? '<span class="hub-check">✓</span>' : ""}
            </div>
            <h3>${level.menuTitle}</h3>
            <p>${level.menuDesc}</p>
        `;

        card.addEventListener("click", () => openLevel(level.id));

        hubGrid.appendChild(card);
    });

    progressText.textContent = `${completed.length} / ${levels.length} completed`;
    progressFill.style.width = `${(completed.length / levels.length) * 100}%`;
}


function openLevel(id) {

    currentLevelIndex = levels.findIndex(l => l.id === id);

    hubScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    loadLevel();
}


function backToMenu() {
    gameScreen.classList.add("hidden");
    hubScreen.classList.remove("hidden");
    renderHub();
}

backToMenuBtn.addEventListener("click", backToMenu);


/* =========================================
   LOAD LEVEL
========================================= */

function loadLevel() {

    const level = levels[currentLevelIndex];

    /* RESET */
    cardsContainer.innerHTML = "";
    solutionContainer.innerHTML = "";
    solutionContainer.dataset.answer = "";

    output.innerHTML = `<span class="output-placeholder">> Waiting for your solution...</span>`;

    resultMessage.textContent = "";
    resultMessage.className = "result-message";

    nextLevelBtn.classList.add("hidden");

    /* HEADER (now shows level id / difficulty, not a locked progress bar) */
    if (leftPanelTitle) leftPanelTitle.textContent = level.leftTitle;
    if (leftPanelDescription) leftPanelDescription.textContent = level.leftDescription;
    if (rightPanelTitle) rightPanelTitle.textContent = level.rightTitle;
    if (rightPanelDescription) rightPanelDescription.textContent = level.rightDescription;

    /* RENDER LEVEL BY TYPE */
    if (level.type === "arrange") {
        renderArrangeLevel(level);
    } else if (level.type === "logical_Error") {
        renderLogicalErrorLevel(level);
    } else if (level.type === "complete") {
        renderCompleteLevel(level);
    } else if (level.type === "debug") {
        renderDebugLevel(level);
    } else if (level.type === "function") {
        renderFunLevel(level);
    } else if (level.type === "Display") {
        renderDisplayLevel(level);
    } else if (level.type === "complete_multi") {
        renderMultiCompleteLevel(level);
    }
}


function renderCodePreview(codePreview) {

    const wrapper = document.createElement("div");
    wrapper.className = "code-preview";

    wrapper.innerHTML = codePreview.map(line => `
        <div class="code-line-static${line.missing ? " missing-line" : ""}${line.error ? " error-line" : ""}">
            <span>${line.num}</span>
            <code>${escapeHTML(line.code)}</code>
        </div>
    `).join("");

    cardsContainer.appendChild(wrapper);
}

function renderOptionsTitle(text) {
    const optionsTitle = document.createElement("div");
    optionsTitle.className = "options-title";
    optionsTitle.textContent = text;
    cardsContainer.appendChild(optionsTitle);
}


/* =========================================
   LEVEL TYPE: ARRANGE
========================================= */

function renderArrangeLevel(level) {

    const shuffledCards = [...level.cards].sort(() => Math.random() - 0.5);

    shuffledCards.forEach(card => {
        cardsContainer.appendChild(createDraggableCard(card));
    });

    solutionContainer.innerHTML = `<div class="empty-state">Drag your cards here</div>`;

    setupArrangeDrop();
}


/* =========================================
   LEVEL TYPE: LOGICAL ERROR
========================================= */

function renderLogicalErrorLevel(level) {

    level.cards.forEach((card, index) => {

        const line = document.createElement("div");
        line.className = "code-card draggable-line";
        line.draggable = true;
        line.dataset.id = card.id;

        line.innerHTML = `
            <span class="line-number">${index + 1}</span>
            <span>${escapeHTML(card.text)}</span>
        `;

        line.addEventListener("dragstart", function () { this.classList.add("dragging"); });
        line.addEventListener("dragend", function () { this.classList.remove("dragging"); });

        cardsContainer.appendChild(line);
    });

    solutionContainer.innerHTML = `<span></span><small></small>`;

    setupSingleAnswerDrop();
}


/* =========================================
   LEVEL TYPE: COMPLETE
========================================= */

function renderCompleteLevel(level) {

    renderCodePreview(level.codePreview);
    renderOptionsTitle("AVAILABLE CODE");

    level.cards.forEach(card => cardsContainer.appendChild(createDraggableCard(card)));

    solutionContainer.innerHTML = `<span></span><small></small>`;
    setupSingleAnswerDrop();
}


/* =========================================
   LEVEL TYPE: DEBUG
========================================= */

function renderDebugLevel(level) {

    renderCodePreview(level.codePreview);
    renderOptionsTitle("CHOOSE THE FIX");

    level.cards.forEach(card => cardsContainer.appendChild(createDraggableCard(card)));

    solutionContainer.innerHTML = `<span></span><small></small>`;
    setupSingleAnswerDrop();
}


/* =========================================
   LEVEL TYPE: FUNCTION
========================================= */

function renderFunLevel(level) {

    renderCodePreview(level.codePreview);
    renderOptionsTitle("CHOOSE THE MISSING LINE");

    level.cards.forEach(card => cardsContainer.appendChild(createDraggableCard(card)));

    solutionContainer.innerHTML = `<span></span><small></small>`;
    setupSingleAnswerDrop();
}


/* =========================================
   LEVEL TYPE: DISPLAY (predict the output)
========================================= */

function renderDisplayLevel(level) {

    renderCodePreview(level.codePreview);
    renderOptionsTitle("CHOOSE THE OUTPUT");

    level.cards.forEach(card => cardsContainer.appendChild(createDraggableCard(card)));

    solutionContainer.innerHTML = `<span></span><small></small>`;
    setupSingleAnswerDrop();
}


/* =========================================
   LEVEL TYPE: COMPLETE_MULTI
   (two independent blanks inside one code block,
   each blank is its own drop target)
========================================= */

function renderMultiCompleteLevel(level) {

   
    renderOptionsTitle("AVAILABLE CODE");
    level.cards.forEach(card => cardsContainer.appendChild(createDraggableCard(card)));

    solutionContainer.innerHTML = "";

    const preview = document.createElement("div");
    preview.className = "code-preview";

    level.codePreview.forEach(line => {

        if (line.blank) {
            const slot = document.createElement("div");
            slot.className = "code-line-static blank-slot";
            slot.dataset.blank = line.blank;
            slot.dataset.filled = "";
            slot.dataset.num = line.num;
            slot.innerHTML = `<span>${line.num}</span><span class="blank-placeholder">drop here</span>`;
            preview.appendChild(slot);
        } else {
            const div = document.createElement("div");
            div.className = "code-line-static";
            div.innerHTML = `<span>${line.num}</span><code>${escapeHTML(line.code)}</code>`;
            preview.appendChild(div);
        }
    });

    solutionContainer.appendChild(preview);

    setupMultiCompleteDrop();
}

function setupMultiCompleteDrop() {

    document.querySelectorAll("#solutionContainer .blank-slot").forEach(slot => {
        slot.addEventListener("dragover", handleBlankDragOver);
        slot.addEventListener("dragleave", handleBlankDragLeave);
        slot.addEventListener("drop", handleBlankDrop);
    });

    cardsContainer.addEventListener("dragover", handleSingleDragOver);
    cardsContainer.addEventListener("dragleave", handleSingleDragLeave);
    cardsContainer.addEventListener("drop", handleCardsDropMulti);
}

function handleBlankDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add("drag-over");
}

function handleBlankDragLeave(event) {
    event.currentTarget.classList.remove("drag-over");
}

function handleBlankDrop(event) {

    event.preventDefault();
    const slot = event.currentTarget;
    slot.classList.remove("drag-over");

    const dragged = document.querySelector(".dragging");
    if (!dragged) return;

    /* if this slot already holds a card, send it back to the pool first */
    const existing = slot.querySelector(".code-card");
    if (existing) {
        existing.classList.remove("selected-answer");
        cardsContainer.appendChild(existing);
    }

    slot.innerHTML = `<span>${slot.dataset.num}</span>`;
    dragged.classList.remove("dragging");
    dragged.classList.add("selected-answer");
    slot.appendChild(dragged);
    slot.dataset.filled = dragged.dataset.id;
}

function handleCardsDropMulti(event) {

    event.preventDefault();
    cardsContainer.classList.remove("drag-over");

    const dragged = document.querySelector(".dragging");
    if (!dragged) return;

    const slot = dragged.closest(".blank-slot");

    dragged.classList.remove("dragging");
    dragged.classList.remove("selected-answer");
    cardsContainer.appendChild(dragged);

    if (slot) {
        slot.dataset.filled = "";
        slot.innerHTML = `<span>${slot.dataset.num}</span><span class="blank-placeholder">drop here</span>`;
    }
}


/* =========================================
   CREATE DRAGGABLE CARD
========================================= */

function createDraggableCard(card) {

    const cardElement = document.createElement("div");
    cardElement.className = "code-card";
    cardElement.draggable = true;
    cardElement.dataset.id = card.id;
    cardElement.textContent = card.text;

    cardElement.addEventListener("dragstart", handleDragStart);
    cardElement.addEventListener("dragend", handleDragEnd);

    return cardElement;
}

function handleDragStart() {
    this.classList.add("dragging");
}

function handleDragEnd() {
    this.classList.remove("dragging");
    updateEmptyState();
}


/* =========================================
   LEVEL 1 / 7 DROP (ordered arrange)
========================================= */

function setupArrangeDrop() {

    cardsContainer.addEventListener("dragover", handleArrangeDragOver);
    cardsContainer.addEventListener("dragleave", handleDragLeave);
    cardsContainer.addEventListener("drop", handleArrangeDrop);

    solutionContainer.addEventListener("dragover", handleArrangeDragOver);
    solutionContainer.addEventListener("dragleave", handleDragLeave);
    solutionContainer.addEventListener("drop", handleArrangeDrop);
}

function handleArrangeDragOver(event) {

    event.preventDefault();
    const container = event.currentTarget;

    const emptyState = container.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    container.classList.add("drag-over");

    const draggable = document.querySelector(".dragging");
    if (!draggable) return;

    const afterElement = getDragAfterElement(container, event.clientY);

    if (afterElement == null) container.appendChild(draggable);
    else container.insertBefore(draggable, afterElement);
}

function handleArrangeDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove("drag-over");
    updateEmptyState();
}

function handleDragLeave(event) {
    event.currentTarget.classList.remove("drag-over");
}

function getDragAfterElement(container, mouseY) {

    const draggableElements = [...container.querySelectorAll(".code-card:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = mouseY - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset, element: child };
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


/* =========================================
   SINGLE ANSWER DROP
   (logical_Error / complete / debug / function / Display)
========================================= */

function setupSingleAnswerDrop() {

    solutionContainer.addEventListener("dragover", handleSingleDragOver);
    solutionContainer.addEventListener("dragleave", handleSingleDragLeave);
    solutionContainer.addEventListener("drop", handleSolutionDrop);

    cardsContainer.addEventListener("dragover", handleSingleDragOver);
    cardsContainer.addEventListener("dragleave", handleSingleDragLeave);
    cardsContainer.addEventListener("drop", handleCardsDrop);
}

function handleSingleDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add("drag-over");
}

function handleSingleDragLeave(event) {
    event.currentTarget.classList.remove("drag-over");
}

function handleSolutionDrop(event) {

    event.preventDefault();
    solutionContainer.classList.remove("drag-over");

    const dragged = document.querySelector(".dragging");
    if (!dragged) return;

    solutionContainer.dataset.answer = dragged.dataset.id;
    solutionContainer.innerHTML = "";

    dragged.classList.remove("dragging");
    dragged.classList.add("selected-answer");
    dragged.draggable = true;

    solutionContainer.appendChild(dragged);
}

function handleCardsDrop(event) {

    event.preventDefault();
    cardsContainer.classList.remove("drag-over");

    const dragged = document.querySelector(".dragging");
    if (!dragged) return;

    dragged.classList.remove("dragging");
    dragged.classList.remove("selected-answer");

    cardsContainer.appendChild(dragged);
    solutionContainer.dataset.answer = "";
}


/* =========================================
   EMPTY STATE (level type "arrange" only)
========================================= */

function updateEmptyState() {

    const level = levels[currentLevelIndex];
    if (level.type !== "arrange") return;

    const cards = solutionContainer.querySelectorAll(".code-card");

    if (cards.length === 0) {
        solutionContainer.innerHTML = `<div class="empty-state">Drag your cards here</div>`;
    }
}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer() {

    const level = levels[currentLevelIndex];

    outputSection.scrollIntoView({ behavior: "smooth", block: "center" });

    /* ARRANGE TYPE (ordered sequence) */
    if (level.type === "arrange") {

        const solutionCards = [...solutionContainer.querySelectorAll(".code-card")];

        if (solutionCards.length !== level.correctOrder.length) {
            showError("Complete your solution first!");
            return;
        }

        const currentOrder = solutionCards.map(card => card.dataset.id);
        const isCorrect = currentOrder.every((id, index) => id === level.correctOrder[index]);

        if (isCorrect) {
            output.textContent = level.output;
            showSuccess("CORRECT!");
            markCompleted(level.id);
        } else {
            output.textContent = "> ERROR: Invalid sequence";
            showError("Wrong sequence. Try again!");
        }

        return;
    }

    /* COMPLETE_MULTI TYPE (two independent blanks) */
    if (level.type === "complete_multi") {

        const slots = [...solutionContainer.querySelectorAll(".blank-slot")];
        const allFilled = slots.every(slot => slot.dataset.filled);

        if (!allFilled) {
            showError("Fill in both blanks first!");
            return;
        }

        const allCorrect = slots.every(slot => slot.dataset.filled === level.blanks[slot.dataset.blank]);

        if (allCorrect) {
            output.textContent = level.output;
            showSuccess("BOTH BLANKS CORRECT!");
            markCompleted(level.id);
        } else {
            output.textContent = "> ERROR: one or more blanks wrong";
            showError("At least one blank is wrong. Try again!");
        }

        return;
    }

    /* SINGLE-ANSWER TYPES */
    const selectedCard = solutionContainer.querySelector(".code-card");
    const selectedAnswer = selectedCard ? selectedCard.dataset.id : "";

    if (!selectedAnswer) {
        showError("Drag an answer into the box first!");
        return;
    }

    const isCorrect = selectedAnswer === level.correctOrder[0];

    if (isCorrect) {
        output.textContent = level.output;
        showSuccess(getSuccessMessage(level.type));
        markCompleted(level.id);
    } else {
        output.textContent = "> ERROR: Wrong answer";
        showError(getErrorMessage(level.type));
    }
}


function getSuccessMessage(type) {
    if (type === "logical_Error") return "BUG FOUND!";
    if (type === "complete") return "CODE COMPLETED!";
    if (type === "debug") return "CODE FIXED!";
    if (type === "function") return "FUNCTION COMPLETED!";
    if (type === "Display") return "OUTPUT PREDICTED CORRECTLY!";
    return "CORRECT!";
}

function getErrorMessage(type) {
    if (type === "logical_Error") return "That's not the bug. Try again!";
    if (type === "complete") return "That's not the missing code!";
    if (type === "debug") return "That's not the correct fix!";
    if (type === "function") return "That's not the right line!";
    if (type === "Display") return "That's not what this prints. Try again!";
    return "Wrong answer. Try again!";
}

function showSuccess(message) {
    resultMessage.textContent = message;
    resultMessage.className = "result-message success";
    nextLevelBtn.classList.remove("hidden");
}

function showError(message) {
    resultMessage.textContent = message;
    resultMessage.className = "result-message error";
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


/* =========================================
   RESET / NEXT 
========================================= */

function resetLevel() {
    loadLevel();
}

function nextLevel() {

    if (currentLevelIndex < levels.length - 1) {
        currentLevelIndex++;
        loadLevel();
    } else {
        output.textContent = "> ALL LEVELS COMPLETED!";
        resultMessage.textContent = "🎉 YOU COMPLETED THE GAME!";
        resultMessage.className = "result-message success";
        nextLevelBtn.classList.add("hidden");
        launchConfetti();
    }
}


/* =========================================
   BUTTON EVENTS
========================================= */

checkBtn.addEventListener("click", checkAnswer);
resetBtn.addEventListener("click", resetLevel);
nextLevelBtn.addEventListener("click", nextLevel);


function launchConfetti() {

    const container = document.getElementById("confettiContainer");
    container.innerHTML = "";

    const colors = ["#ff4d4d", "#ffd93d", "#6bcB77", "#4d96ff", "#c77dff", "#ff85a1"];

    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
        confetti.style.animationDelay = Math.random() * 1.5 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);
    }

    setTimeout(() => { container.innerHTML = ""; }, 6000);
}


/* =========================================
   START — 
========================================= */

renderHub();