// mcq.js
(function() {
    if (!document.getElementById('mcq-styles')) {
        const style = document.createElement('style');
        style.id = 'mcq-styles';
        style.innerHTML = `
            .quiz-card { background: #ffffff; border: 1px solid #e1e4e8; border-radius: 16px; padding: 8px 30px 30px 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); margin: 2rem 0; font-family: sans-serif; }
            .quiz-title-box { border-bottom: 2px solid #f0f2f5; margin-bottom: 20px; padding-bottom: 10px; }
            .quiz-title { font-size: 1.2rem; font-weight: 700; color: #1a73e8; margin: 0; }
            .option-label { display: block; margin: 15px 0; cursor: pointer; padding: 12px; border: 1px solid #f0f2f5; border-radius: 8px; transition: background 0.2s; }
            .option-label:hover { background: #f8f9fa; border-color: #dadce0; }
            .btn-primary { background: #1a73e8; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
            .btn-primary:hover { opacity: 0.9; }
            .feedback-box { margin-top: 20px; padding: 15px; border-radius: 10px; font-weight: 500; display: none; }
        `;
        document.head.appendChild(style);
    }

    window.renderMCQ = function(containerId, config) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const { title, question, options, correctIndex, feedback } = config;

        // 生成选项 HTML
        const optionsHTML = options.map((opt, index) => `
            <label class="option-label">
                <input type="radio" name="${containerId}-input" value="${index}" style="margin-right: 10px;">
                ${opt}
            </label>
        `).join('');

        container.innerHTML = `
            <div class="quiz-card">
                <div class="quiz-title-box"><h3 class="quiz-title">${title}</h3></div>
                <p style="font-size: 1.1rem; color: #202124;">${question}</p>
                <div style="margin-top: 20px;">${optionsHTML}</div>
                <button class="btn-primary" id="${containerId}-btn" style="margin-top: 10px;">Check Answer</button>
                <div id="${containerId}-res" class="feedback-box"></div>
            </div>
        `;

        // 绑定点击事件 (避开 onclick 字符串转义问题)
        const btn = document.getElementById(`${containerId}-btn`);
        btn.addEventListener('click', function() {
            const selected = container.querySelector(`input[name="${containerId}-input"]:checked`);
            const res = document.getElementById(`${containerId}-res`);

            if (!selected) {
                alert("Please select an answer first!");
                return;
            }

            res.style.display = "block";
            const isCorrect = parseInt(selected.value) === correctIndex;

            if (isCorrect) {
                res.innerHTML = `🎉 <b>Correct!</b> ${feedback.correct}`;
                res.style.cssText = "display:block; background:#e6f4ea; color:#137333; border:1px solid #ceead6;";
            } else {
                res.innerHTML = `❌ <b>Try again:</b> ${feedback.wrong}`;
                res.style.cssText = "display:block; background:#fce8e6; color:#c5221f; border:1px solid #fad2cf;";
            }

            if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([res]);
        });

        if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([container]);
    };
})();