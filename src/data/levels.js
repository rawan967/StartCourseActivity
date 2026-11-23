// Session 4 – Practical Coding MCQ Quiz
// كل المستويات إجابة واحدة (الكروت بتتخلط عشوائي، فمكان الإجابة الصح بيتغير كل مرة)

const levels = [
    /* Q1 - Media query (answer: B) */
    {
        id: 1,
        type: "complete",
        difficulty: 1,
        menuTitle: "Complete the Media Query",
        menuDesc: "Pick the condition that matches the comment.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* apply only on screens 600px wide or smaller */" },
            { num: 2, code: "@media ________ {", missing: true },
            { num: 3, code: "body { background-color: lightblue; }" },
            { num: 4, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "(min-width: 600px)" },
            { id: "correct", text: "(max-width: 600px)" },
            { id: "wrong_2", text: "(width: 600px)" },
            { id: "wrong_3", text: "(screen: 600px)" }
        ],
        correctOrder: ["correct"],
        output: "> Media query completed!"
    },

    /* Q2 - Responsive layout (answer: A) */
    {
        id: 2,
        type: "debug",
        difficulty: 2,
        menuTitle: "Fix the Responsive Layout",
        menuDesc: "100% width on small screens, 50% on larger screens.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the correct code",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* The element must take 100% width on small screens and 50% width on larger screens. Which code is correct? */" }
        ],
        cards: [
            { id: "correct", text: ".box { width: 50%; } @media (max-width: 600px) { .box { width: 100%; } }" },
            { id: "wrong_1", text: ".box { width: 100%; } @media (max-width: 600px) { .box { width: 50%; } }" },
            { id: "wrong_2", text: ".box { width: 50px; }" },
            { id: "wrong_3", text: ".box { width: auto; media: responsive; }" }
        ],
        correctOrder: ["correct"],
        output: "> Layout fixed!"
    },

    /* Q3 - Grid (answer: B) */
    {
        id: 3,
        type: "complete",
        difficulty: 1,
        menuTitle: "Find the Missing CSS Property",
        menuDesc: "Create a 3-column grid.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: ".container {" },
            { num: 2, code: "display: grid;" },
            { num: 3, code: "________: repeat(3, 1fr);", missing: true },
            { num: 4, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "grid-gap" },
            { id: "correct", text: "grid-template-columns" },
            { id: "wrong_2", text: "flex-direction" },
            { id: "wrong_3", text: "justify-content" }
        ],
        correctOrder: ["correct"],
        output: "> Grid completed!"
    },

    /* Q4 - Flexbox (answer: B) */
    {
        id: 4,
        type: "complete",
        difficulty: 1,
        menuTitle: "Complete the Flexbox Code",
        menuDesc: "Center the items along the main axis.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* center the items horizontally (main axis) */" },
            { num: 2, code: ".container {" },
            { num: 3, code: "display: flex;" },
            { num: 4, code: "________: center;", missing: true },
            { num: 5, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "align-items" },
            { id: "correct", text: "justify-content" },
            { id: "wrong_2", text: "flex-direction" },
            { id: "wrong_3", text: "position" }
        ],
        correctOrder: ["correct"],
        output: "> Flexbox completed!"
    },

    /* Q5 - Transition (answer: A) */
    {
        id: 5,
        type: "debug",
        difficulty: 1,
        menuTitle: "Fix the Transition",
        menuDesc: "Smooth background change on hover.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the correct code",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* Which code makes a button's background color change smoothly over 0.3 seconds when hovered? */" }
        ],
        cards: [
            { id: "correct", text: "button { transition: background-color 0.3s; }" },
            { id: "wrong_1", text: "button { animation: background-color; }" },
            { id: "wrong_2", text: "button { hover: 0.3s; }" },
            { id: "wrong_3", text: "button { background-color: transition; }" }
        ],
        correctOrder: ["correct"],
        output: "> Transition fixed!"
    },

    /* Q6 - console.log (answer: B) */
    {
        id: 6,
        type: "complete",
        difficulty: 1,
        menuTitle: "Complete the JavaScript Code",
        menuDesc: "Print a message to the console.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* print the message to the browser console */" },
            { num: 2, code: '________("Welcome to JavaScript");', missing: true }
        ],
        cards: [
            { id: "wrong_1", text: "print" },
            { id: "correct", text: "console.log" },
            { id: "wrong_2", text: "document.write" },
            { id: "wrong_3", text: "display" }
        ],
        correctOrder: ["correct"],
        output: "> Welcome to JavaScript"
    },

    /* Q7 - let (answer: B) */
    {
        id: 7,
        type: "debug",
        difficulty: 1,
        menuTitle: "Fix the JavaScript Code",
        menuDesc: "Declare a variable whose value can change.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the correct code",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "/* Which code correctly declares a variable whose value can change? */" }
        ],
        cards: [
            { id: "wrong_1", text: "const age = 20; age = 21;" },
            { id: "correct", text: "let age = 20; age = 21;" },
            { id: "wrong_2", text: "variable age = 20;" },
            { id: "wrong_3", text: "change age = 21;" }
        ],
        correctOrder: ["correct"],
        output: "> Variable declared!"
    },

    /* Q8 - Output (answer: B => 10 + 5*2 = 20) */
    {
        id: 8,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Mind the operator precedence.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let x = 10;" },
            { num: 2, code: "let y = 5;" },
            { num: 3, code: "console.log(x + y * 2);" }
        ],
        cards: [
            { id: "wrong_1", text: "30" },
            { id: "correct", text: "20" },
            { id: "wrong_2", text: "25" },
            { id: "wrong_3", text: "15" }
        ],
        correctOrder: ["correct"],
        output: "> 20"
    },

    /* Q9 - script tag (answer: B) */
    {
        id: 9,
        type: "complete",
        difficulty: 1,
        menuTitle: "Complete the HTML Code",
        menuDesc: "Connect an external JavaScript file.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "<!-- Connect an external JavaScript file named script.js -->" },
            { num: 2, code: "________", missing: true }
        ],
        cards: [
            { id: "wrong_1", text: '<link src="script.js">' },
            { id: "correct", text: '<script src="script.js"></script>' },
            { id: "wrong_2", text: '<style src="script.js"></style>' },
            { id: "wrong_3", text: '<javascript href="script.js"></javascript>' }
        ],
        correctOrder: ["correct"],
        output: "> Script connected!"
    },

    /* Q10 - Find the bug (answer: B) */
    {
        id: 10,
        type: "debug",
        difficulty: 2,
        menuTitle: "Find the Bug",
        menuDesc: "What is the problem?",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the right explanation",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: '<h1 id="title">Old Text</h1>' },
            { num: 2, code: 'document.querySelector(".title").textContent = "Hello Students";', error: true }
        ],
        cards: [
            { id: "wrong_1", text: "textContent cannot change text." },
            { id: "correct", text: 'The selector should be "#title" instead of ".title".' },
            { id: "wrong_2", text: "querySelector only selects classes." },
            { id: "wrong_3", text: "JavaScript cannot change HTML content." }
        ],
        correctOrder: ["correct"],
        output: "> Bug found!"
    }
];

export default levels;