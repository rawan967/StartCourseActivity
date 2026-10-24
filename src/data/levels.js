const levels = [
    /* =========================================
       LEVEL 1 - PREDICT THE OUTPUT (compound assignment)
       x: 10 -> 16 -> 4 -> 1
    ========================================= */
    {
        id: 1,
        type: "Display",
        difficulty: 2,
        menuTitle: "ما الناتج؟",
        menuDesc: "Work out the final value of x.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "int x = 10;" },
            { num: 2, code: "x += 3 * 2;" },
            { num: 3, code: "x /= 4;" },
            { num: 4, code: "x %= 3;" },
            { num: 5, code: "cout << x;" }
        ],
        cards: [
            { id: "wrong_1", text: "0" },
            { id: "wrong_2", text: "4" },
            { id: "correct", text: "1" },
            { id: "wrong_3", text: "2" }
        ],
        correctOrder: ["correct"],
        output: "> 1"
    },

    /* =========================================
       LEVEL 2 - PREDICT THE OUTPUT (operator precedence)
       5 + 2*3 - 4/2 = 5 + 6 - 2 = 9
    ========================================= */
    {
        id: 2,
        type: "Display",
        difficulty: 2,
        menuTitle: "ما الناتج؟",
        menuDesc: "Mind the operator precedence.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the output",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Drop the correct answer here",
        codePreview: [
            { num: 1, code: "int a = 5;" },
            { num: 2, code: "int b = 2;" },
            { num: 3, code: "cout << (a + b * 3 - 4 / 2);" }
        ],
        cards: [
            { id: "wrong_1", text: "17" },
            { id: "wrong_2", text: "8" },
            { id: "wrong_3", text: "11" },
            { id: "correct", text: "9" }
        ],
        correctOrder: ["correct"],
        output: "> 9"
    },

    /* =========================================
       LEVEL 3 - WHICH EXPRESSION EQUALS 1  (single answer)
       a = 6, b = 2
       a > b && b < 3  -> true (1)   <-- correct
       a % b           -> 0
       a == 6 && b == 0 -> false (0)
       a < b && b > 0  -> false (0)
    ========================================= */
    {
        id: 3,
        type: "Display",
        difficulty: 2,
        menuTitle: "أي التعبيرات التالية قيمته النهائية 1 في C++؟",
        menuDesc: "Pick the one expression that evaluates to 1.",
        leftTitle: "ANSWER OPTIONS",
        leftDescription: "Choose the best answer",
        rightTitle: "YOUR CHOICE",
        rightDescription: "Your selected answer appears here",
        codePreview: [
            { num: 1, code: "int a = 6, b = 2;" }
        ],
        cards: [
            { id: "wrong_1", text: "a == 6 && b == 0" },
            { id: "correct", text: "a > b && b < 3" },
            { id: "wrong_2", text: "a % b" },
            { id: "wrong_3", text: "a < b && b > 0" }
        ],
        correctOrder: ["correct"],
        output: "> 1"
    }
];

export default levels;

























// const levels = [
//     {
//         id: 1,
//         type: "arrange",
//         difficulty: 1,
//         menuTitle: "Arrange the Code",
//         menuDesc: "Put the lines in the right order.",
//         leftTitle: "YOUR CARDS",
//         leftDescription: "Drag them into the correct order",
//         rightTitle: "BUILD YOUR SOLUTION",
//         rightDescription: "Arrange the code here",
//         cards: [
//             { id: "declare_a,b", text: "int a = 10 , b = 9;" },
//             { id: "sum",         text: "int sum = a + b;" },
//             { id: "print",       text: "cout << sum;" }
//         ],
//         correctOrder: ["declare_a,b", "sum", "print"],
//         output: "> 19"
//     },

//     /* =========================================
//        LEVEL 2 - LOGICAL ERROR
//     ========================================= */
//     {
//         id: 2,
//         type: "logical_Error",
//         difficulty: 1,
//         menuTitle: "Find the Bug",
//         menuDesc: "Spot the line with the logical error.",
//         leftTitle: "CODE",
//         leftDescription: "Drag the line that contains the bug",
//         rightTitle: "CHOOSE THE BUG",
//         rightDescription: "Drop the incorrect line here",
//         cards: [
//             { id: "declare_age", text: "int age = 25;" },
//             { id: "condition",   text: "if (age = 19) {" },
//             { id: "age_19",      text: 'cout << "Age is 19" << endl; }' },
//             { id: "else",        text: 'else { cout << "Age is not 19" << endl; }' }
//         ],
//         correctOrder: ["condition"],
//         output: "Bug found on line 2!"
//     },

//     /* =========================================
//        LEVEL 3 - COMPLETE
//     ========================================= */
//     {
//         id: 3,
//         type: "complete",
//         difficulty: 1,
//         menuTitle: "Complete the Loop",
//         menuDesc: "Drag the missing loop condition.",
//         leftTitle: "CODE PIECES",
//         leftDescription: "Drag the missing piece",
//         rightTitle: "COMPLETE THE CODE",
//         rightDescription: "Drop the missing code here",
//         codePreview: [
//             { num: 1, code: "for (int i = 1; ________; i++)", missing: true },
//             { num: 2, code: "{" },
//             { num: 3, code: ' cout << i << " ";' },
//             { num: 4, code: "}" }
//         ],
//         cards: [
//             { id: "wrong_1", text: "i = 5;" },
//             { id: "correct", text: "i <= 5;" },
//             { id: "wrong_2", text: "i >= 5;" }
//         ],
//         correctOrder: ["correct"],
//         output: "> 1 2 3 4 5 "
//     },

//     /* =========================================
//        LEVEL 4 - DEBUG
//     ========================================= */
//     {
//         id: 4,
//         type: "debug",
//         difficulty: 2,
//         menuTitle: "Fix the Array Bug",
//         menuDesc: "Pick the correct fix for the crash.",
//         leftTitle: "FIX OPTIONS",
//         leftDescription: "Drag the correct fix",
//         rightTitle: "FIX THE BUG",
//         rightDescription: "Drop the correct code here",
//         codePreview: [
//             { num: 1, code: "int numbers[] = {10, 20, 30};" },
//             { num: 2, code: "cout << numbers[3]", error: true }
//         ],
//         cards: [
//             { id: "wrong_1", text: "cout << numbers[1]" },
//             { id: "correct", text: "cout << numbers[1];" },
//             { id: "wrong_2", text: "cout << numbers[3];" }
//         ],
//         correctOrder: ["correct"],
//         output: "> Code fixed successfully!"
//     },

//     /* =========================================
//        LEVEL 5 - FUNCTION
//     ========================================= */
//     {
//         id: 5,
//         type: "function",
//         difficulty: 2,
//         menuTitle: "Complete the Function",
//         menuDesc: "Fill in the missing return line.",
//         leftTitle: "CODE PIECES",
//         leftDescription: "Drag the missing line",
//         rightTitle: "COMPLETE THE FUNCTION",
//         rightDescription: "Drop the correct code here",
//         codePreview: [
//             { num: 1, code: "int multiply(int a, int b) {" },
//             { num: 2, code: "___________", missing: true },
//             { num: 3, code: "}" },
//             { num: 4, code: "cout << multiply(4, 5);" }
//         ],
//         cards: [
//             { id: "wrong_1", text: "return a + b;" },
//             { id: "correct", text: "return a * b;" },
//             { id: "wrong_2", text: "cout << a * b;" }
//         ],
//         correctOrder: ["correct"],
//         output: "> 20"
//     },

//     /* =========================================
//        LEVEL 6 - PREDICT THE OUTPUT
//     ========================================= */
//     {
//         id: 6,
//         type: "Display",
//         difficulty: 2,
//         menuTitle: "Predict the Output",
//         menuDesc: "Work out what the modulo prints.",
//         leftTitle: "CODE PIECES",
//         leftDescription: "Choose the output",
//         rightTitle: "PICK THE OUTPUT",
//         rightDescription: "Drop the correct answer here",
//         codePreview: [
//             { num: 1, code: "int x = 10 ;" },
//             { num: 2, code: "int y = 19;" },
//             { num: 3, code: "cout << x % y;" }
//         ],
//         cards: [
//             { id: "wrong_1", text: "> 2" },
//             { id: "correct", text: "> 10" },
//             { id: "wrong_2", text: "> 53" },
//             { id: "wrong_3", text: "> 15" }
//         ],
//         correctOrder: ["correct"],
//         output: "> 10"
//     },

//     /* =========================================
//        LEVEL 7 - COMPLETE (two blanks)
//     ========================================= */
//     {
//         id: 7,
//         type: "complete_multi",
//         difficulty: 2,
//         menuTitle: "Complete the Swap",
//         menuDesc: "Two lines are missing — fill in both to swap the values.",
//         leftTitle: "CODE PIECES",
//         leftDescription: "Drag each piece to its matching blank",
//         rightTitle: "COMPLETE THE FUNCTION",
//         rightDescription: "Drop one piece into each blank",
//         codePreview: [
//             { num: 1, code: "void swap(int &a, int &b) {" },
//             { num: 2, code: "int temp = a;" },
//             { num: 3, blank: "blank1" },
//             { num: 4, blank: "blank2" },
//             { num: 5, code: "}" }
//         ],
//         blanks: {
//             blank1: "a_eq_b",
//             blank2: "b_eq_temp"
//         },
//         cards: [
//             { id: "a_eq_b",      text: "a = b;" },
//             { id: "b_eq_temp",   text: "b = temp;" },
//             { id: "temp_eq_b",   text: "temp = b;" },
//             { id: "a_eq_temp",   text: "a = temp;" }
//         ],
//         output: "> a = 20, b = 10 (swapped)"
//     },

//     /* =========================================
//        LEVEL 8 - LOGICAL ERROR (harder, more lines)
//     ========================================= */
//     {
//         id: 8,
//         type: "logical_Error",
//         difficulty: 3,
//         menuTitle: "Find the Subtle Bug",
//         menuDesc: "A wrong operator breaks the condition.",
//         leftTitle: "CODE",
//         leftDescription: "Drag the line that contains the bug",
//         rightTitle: "CHOOSE THE BUG",
//         rightDescription: "Drop the incorrect line here",
//         cards: [
//             { id: "decl_score",  text: "int score = 45;" },
//             { id: "decl_pass",   text: "bool passed = true;" },
//             { id: "condition",   text: "if (score >= 50 || passed) {" },
//             { id: "print_pass",  text: 'cout << "Result: PASS";' },
//             { id: "else",        text: 'else { cout << "Result: FAIL"; }' }
//         ],
//         correctOrder: ["condition"],
//         output: "Bug found: should be && not ||"
//     },

//     /* =========================================
//        LEVEL 9 - COMPLETE (recursion base case)
//     ========================================= */
//     {
//         id: 9,
//         type: "complete",
//         difficulty: 3,
//         menuTitle: "Complete the Recursion",
//         menuDesc: "Pick the correct base case.",
//         leftTitle: "CODE PIECES",
//         leftDescription: "Drag the missing base case",
//         rightTitle: "COMPLETE THE FUNCTION",
//         rightDescription: "Drop the missing code here",
//         codePreview: [
//             { num: 1, code: "int factorial(int n) {" },
//             { num: 2, code: "________", missing: true },
//             { num: 3, code: "return n * factorial(n - 1);" },
//             { num: 4, code: "}" },
//             { num: 5, code: "cout << factorial(4);" }
//         ],
//         cards: [
//             { id: "wrong_1", text: "if (n == 0) return 0;" },
//             { id: "correct", text: "if (n == 0) return 1;" },
//             { id: "wrong_2", text: "if (n == 1) return 0;" }
//         ],
//         correctOrder: ["correct"],
//         output: "> 24"
//     },

//     /* =========================================
//        LEVEL 10 - DEBUG (integer division)
//     ========================================= */
//     {
//         id: 10,
//         type: "debug",
//         difficulty: 3,
//         menuTitle: "Fix the Division Bug",
//         menuDesc: "The result is being truncated to an int.",
//         leftTitle: "FIX OPTIONS",
//         leftDescription: "Drag the correct fix",
//         rightTitle: "FIX THE BUG",
//         rightDescription: "Drop the correct code here",
//         codePreview: [
//             { num: 1, code: "int a = 5, b = 2;" },
//             { num: 2, code: "cout << a / b;", error: true }
//         ],
//         cards: [
//             { id: "wrong_1", text: "cout << a / b;" },
//             { id: "correct", text: "cout << (float)a / b;" },
//             { id: "wrong_2", text: "cout << a / (int)b;" }
//         ],
//         correctOrder: ["correct"],
//         output: "> 2.5"
//     },
//     {
//         id: 11, // يمكنك تعديل الرقم حسب ترتيب المستوى
//         type: "complete", // استخدمنا هذا النوع لأنه يعتمد على إجابة واحدة
//         difficulty: 1,
//         menuTitle: "DOM Manipulation",
//         menuDesc: "Complete the code to change the heading's text.",
        
//         // العناوين مطابقة تماماً للصورة
//         leftTitle: "ANSWER OPTIONS",
//         leftDescription: "Choose the best answer",
//         rightTitle: "YOUR CHOICE",
//         rightDescription: "Your selected answer appears here",

//         // الكود المعروض في الشاشة العلوية السوداء
//         codePreview: [
//             { num: 1, code: '<h1 id="title">Old Title</h1>' },
//             { num: 2, code: '' }, // سطر فارغ لتنسيق المسافة
//             { num: 3, code: 'const title = document.querySelector("#title");' },
//             { num: 4, code: 'title.________ = "New Title";', missing: true }
//         ],

     
//         cards: [
//             { id: "correct", text: "textContent" },
//             { id: "wrong_1", text: "href" },
//             { id: "wrong_2", text: "src" },
//             { id: "wrong_3", text: "querySelector" }
//         ],
        
//         correctOrder: ["correct"],
//         output: "> Heading updated to 'New Title' successfully!"
//     }
// ];

// export default levels;