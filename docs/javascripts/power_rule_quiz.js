// docs/javascripts/derivative-quiz.js
(function() {
    // 1. Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .quiz-card { background: #ffffff; border: 1px solid #e1e4e8; border-radius: 16px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); margin: 2rem 0; font-family: sans-serif; }
        .quiz-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f2f5; padding-bottom: 15px; }
        .quiz-title { font-size: 1.4rem; font-weight: 700; color: #1a73e8; margin: 0; }
        #problem-display { background: #f8f9fa; border-radius: 12px; padding: 40px; text-align: center; font-size: 1.8rem; color: #202124; margin-bottom: 25px; }
        .input-group { display: flex; gap: 12px; }
        .quiz-input { flex: 1; padding: 14px 20px; border: 2px solid #dadce0; border-radius: 10px; font-size: 1.1rem; }
        .btn { padding: 12px 24px; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; }
        .btn-primary { background: #1a73e8; color: white; }
        .btn-secondary { background: #f1f3f4; color: #3c4043; }
        .feedback-msg { margin-top: 20px; padding: 15px; border-radius: 8px; font-weight: 500; display: none; }
        .correct { background-color: #e6f4ea !important; color: #137333 !important; }
        .error { background-color: #fce8e6 !important; color: #c5221f !important; }
    `;
    document.head.appendChild(style);

    // 2. Quiz Logic
    window.currentSolution = "";

    window.refreshProb = function() {
        const display = document.getElementById('problem-display');
        const feedback = document.getElementById('feedback-area');
        const input = document.getElementById('ans-input');
        
        if (!display || !input) return;

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

        window.currentSolution = solution;

        display.innerHTML = '<span class="arithmatex">\\( f(x) = ' + a + 'x^{' + n + '} \\implies f\'(x) = ? \\)</span>';

        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([display]);
        }
    };

    window.checkAns = function() {
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
    };

    // 3. Initialize UI
    window.initQuiz = function() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        container.innerHTML = `
            <div class="quiz-card">
                <div id="problem-display"></div>
                <div class="input-group">
                    <input type="text" id="ans-input" class="quiz-input" placeholder="e.g., 15x^2">
                    <button onclick="checkAns()" class="btn btn-primary">Submit</button>
                    <button onclick="refreshProb()" class="btn btn-secondary">Next</button>
                </div>
                <div id="feedback-area"></div>
            </div>
        `;
        refreshProb();
    };

    // Auto-init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuiz);
    } else {
        initQuiz();
    }
})();