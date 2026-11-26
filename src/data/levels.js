// JavaScript Basics – Practical Coding MCQ Quiz
// كل المستويات إجابة واحدة (الكروت بتتخلط عشوائي، فمكان الإجابة الصح بيتغير كل مرة)

const levels = [
    /* Q1 - Modulo (answer: B) */
    {
        id: 1,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "What does the modulo operator return?",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "console.log(7 % 3);" }
        ],
        cards: [
            { id: "wrong_1", text: "2" },
            { id: "correct", text: "1" },
            { id: "wrong_2", text: "0" },
            { id: "wrong_3", text: "2.33" }
        ],
        correctOrder: ["correct"],
        output: "> 1"
    },

    /* Q2 - Strict equality (answer: D) */
    {
        id: 2,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Strict equality checks the type too.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: 'console.log(5 === "5");' }
        ],
        cards: [
            { id: "wrong_1", text: "true" },
            { id: "wrong_2", text: "5" },
            { id: "wrong_3", text: '"5"' },
            { id: "correct", text: "false" }
        ],
        correctOrder: ["correct"],
        output: "> false"
    },

    /* Q3 - += (answer: C) */
    {
        id: 3,
        type: "Display",
        difficulty: 1,
        menuTitle: "Find the Value of x",
        menuDesc: "Mind the += operator.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the value",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let x = 4;" },
            { num: 2, code: "x += 6;" }
        ],
        cards: [
            { id: "wrong_1", text: "4" },
            { id: "wrong_2", text: "6" },
            { id: "correct", text: "10" },
            { id: "wrong_3", text: "46" }
        ],
        correctOrder: ["correct"],
        output: "> 10"
    },

    /* Q4 - Logical OR (answer: A) */
    {
        id: 4,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Logical OR returns true if any side is true.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "console.log(true || false);" }
        ],
        cards: [
            { id: "correct", text: "true" },
            { id: "wrong_1", text: "false" },
            { id: "wrong_2", text: "Error" },
            { id: "wrong_3", text: "undefined" }
        ],
        correctOrder: ["correct"],
        output: "> true"
    },

    /* Q5 - if / else if (answer: C) */
    {
        id: 5,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Follow the if / else if chain.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let score = 72;" },
            { num: 2, code: "if (score >= 90) {" },
            { num: 3, code: '  console.log("A");' },
            { num: 4, code: "} else if (score >= 80) {" },
            { num: 5, code: '  console.log("B");' },
            { num: 6, code: "} else if (score >= 70) {" },
            { num: 7, code: '  console.log("C");' },
            { num: 8, code: "} else {" },
            { num: 9, code: '  console.log("F");' },
            { num: 10, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "A" },
            { id: "wrong_2", text: "B" },
            { id: "correct", text: "C" },
            { id: "wrong_3", text: "F" }
        ],
        correctOrder: ["correct"],
        output: "> C"
    },

    /* Q6 - switch default (answer: D) */
    {
        id: 6,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "What happens when no case matches?",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let n = 3;" },
            { num: 2, code: "switch (n) {" },
            { num: 3, code: "  case 1:" },
            { num: 4, code: '    console.log("One");' },
            { num: 5, code: "    break;" },
            { num: 6, code: "  case 2:" },
            { num: 7, code: '    console.log("Two");' },
            { num: 8, code: "    break;" },
            { num: 9, code: "  default:" },
            { num: 10, code: '    console.log("Other");' },
            { num: 11, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "One" },
            { id: "wrong_2", text: "Two" },
            { id: "wrong_3", text: "Nothing" },
            { id: "correct", text: "Other" }
        ],
        correctOrder: ["correct"],
        output: "> Other"
    },

    /* Q7 - for loop (answer: A) */
    {
        id: 7,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Follow the for loop.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "for (let i = 1; i <= 3; i++) {" },
            { num: 2, code: "  console.log(i);" },
            { num: 3, code: "}" }
        ],
        cards: [
            { id: "correct", text: "1 2 3" },
            { id: "wrong_1", text: "0 1 2" },
            { id: "wrong_2", text: "1 2 3 4" },
            { id: "wrong_3", text: "3 2 1" }
        ],
        correctOrder: ["correct"],
        output: "> 1 2 3"
    },

    /* Q8 - Sum in loop (answer: B => 1+2+3+4 = 10) */
    {
        id: 8,
        type: "Display",
        difficulty: 2,
        menuTitle: "Predict the Output",
        menuDesc: "Add the numbers inside the loop.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let total = 0;" },
            { num: 2, code: "for (let i = 1; i <= 4; i++) {" },
            { num: 3, code: "  total += i;" },
            { num: 4, code: "}" },
            { num: 5, code: "console.log(total);" }
        ],
        cards: [
            { id: "wrong_1", text: "4" },
            { id: "correct", text: "10" },
            { id: "wrong_2", text: "24" },
            { id: "wrong_3", text: "1234" }
        ],
        correctOrder: ["correct"],
        output: "> 10"
    },

    /* Q9 - while countdown (answer: C) */
    {
        id: 9,
        type: "Display",
        difficulty: 1,
        menuTitle: "Predict the Output",
        menuDesc: "Follow the while loop.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "let i = 3;" },
            { num: 2, code: "while (i > 0) {" },
            { num: 3, code: "  console.log(i);" },
            { num: 4, code: "  i--;" },
            { num: 5, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "1 2 3" },
            { id: "wrong_2", text: "0 1 2 3" },
            { id: "correct", text: "3 2 1" },
            { id: "wrong_3", text: "Infinite loop" }
        ],
        correctOrder: ["correct"],
        output: "> 3 2 1"
    },

    /* Q10 - Infinite loop (answer: D) */
    {
        id: 10,
        type: "debug",
        difficulty: 2,
        menuTitle: "Find the Bug",
        menuDesc: "Why does this loop never stop?",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the right explanation",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "let i = 1;" },
            { num: 2, code: "while (i <= 5) {" },
            { num: 3, code: "  console.log(i);", error: true },
            { num: 4, code: "}" }
        ],
        cards: [
            { id: "wrong_1", text: "Because of let" },
            { id: "wrong_2", text: "Because 5 is too big" },
            { id: "wrong_3", text: "Because of console.log" },
            { id: "correct", text: "i never changes, so the condition is always true" }
        ],
        correctOrder: ["correct"],
        output: "> Bug found!"
    }
];

export default levels;