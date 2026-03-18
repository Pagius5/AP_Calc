// docs/javascripts/derivative-quiz.js
(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .feedback-msg { 
            padding: 10px; 
            margin-top: 10px; 
            border-radius: 4px; 
            font-weight: 500;
        }
        .correct { background-color: #e6f4ea !important; color: #137333 !important; }
        .error { background-color: #fce8e6 !important; color: #c5221f !important; }
    `;
    document.head.appendChild(style);
})();

function refreshProb() {
    const display = document.getElementById('problem-display');
    const feedback = document.getElementById('feedback-area');
    const input = document.getElementById('ans-input');
    
    if (!display || !input) return; // 安全检查

    feedback.style.display = 'none';
    input.value = "";

    const a = Math.floor(Math.random() * 8) + 3; 
    const n = Math.floor(Math.random() * 4) + 2; 

    let coef = a * n;
    let power = n - 1;
    let solution = "";

    if (power === 0) {
        solution = coef.toString();
    } else if (power === 1) {
        solution = coef + "x";
    } else {
        solution = coef + "x^" + power;
    }

    // 将答案存入 window 全局变量，方便 checkAns 访问
    window.currentSolution = solution;

    display.innerHTML = '<span class="arithmatex">\\( f(x) = ' + a + 'x^{' + n + '} \\implies f\'(x) = ? \\)</span>';

    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([display]);
    }
}

function checkAns() {
    const input = document.getElementById('ans-input');
    const feedback = document.getElementById('feedback-area');
    if (!input || !feedback) return;

    const val = input.value.replace(/\s+/g, '').toLowerCase().replace(/x\^1$/, 'x');
    
    feedback.style.display = 'block';
    if (val === window.currentSolution.toLowerCase()) {
        feedback.className = "feedback-msg correct";
        feedback.innerHTML = "🎉 <b>Correct!</b>";
    } else {
        feedback.className = "feedback-msg error";
        feedback.innerHTML = "❌ <b>Try again!</b> Target: <span class='arithmatex'>\\( " + window.currentSolution + " \\)</span>";
    }

    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([feedback]);
    }
}