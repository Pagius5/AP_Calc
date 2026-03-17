console.log("脚本已加载！");

(function() {
    const initChart = function() {
        const boardId = 'jxgbox_vertical';
        if (!document.getElementById(boardId)) return;

        const board = JXG.JSXGraph.initBoard(boardId, {
            boundingbox: [-7, 2, 7, -1.5], 
            axis: true,
            showCopyright: false,
            pan: {enabled: true},
            zoom: {wheel: true}
        });

        // 1. 定义 Sinc 函数
        const f = x => (Math.abs(x) < 0.001) ? NaN : Math.sin(x) / x;
        const graph = board.create('functiongraph', [f], {strokeColor: '#0072B2', strokeWidth: 3});

        // 2. 在曲线旁标注函数名 f(x) = sin(x)/x
        board.create('text', [1.5, 1.5, 'f(x) = sin(x) / x'], {
            fontSize: 16,
            display: 'internal',
            color: '#0072B2',
            fontStyle: 'italic'
        });

        // 3. 绘制极限点 (0, 1) - 使用数学极限符号表示
        // 注意：这里使用 \lim 这种数学表达习惯
        board.create('point', [0, 1], {
            name: 'lim_{x→0} f(x) = 1',
            fillColor: 'white',
            strokeColor: '#0072B2',
            size: 4,
            fixed: true,
            withLabel: true,
            label: {
                offset: [0, 20],
                anchorX: 'middle',
                anchorY: 'bottom',
                fontSize: 14,
                strokeColor: '#0072B2'
            }
        });

        // 4. 创建滑块 (y=0)
        const pX = board.create('slider', [[-6, 0], [6, 0], [-6, 1.5, 6]], {
            name: 'x_0', // 使用下标表示特定点
            snapWidth: 0.01,
            fillColor: '#D55E00',
            strokeColor: '#D55E00',
            label: {offset: [0, -15], fontSize: 14}
        });

        // 5. 曲线上的动点
        const pOnCurve = board.create('point', [
            () => (Math.abs(pX.Value()) < 0.01) ? NaN : pX.Value(),
            () => f(pX.Value())
        ], {
            // 使用数学函数记号 f(x_0)
            name: function() { 
                const val = pX.Value();
                const yVal = Math.sin(val)/val;
                return "f(" + val.toFixed(2) + ") ≈ " + yVal.toFixed(4);
            },
            withLabel: true,
            label: {
                offset: [15, 10],
                backgroundColor: 'rgba(255,255,255,0.7)',
                visible: () => Math.abs(pX.Value()) > 0.01 
            },
            color: '#D55E00',
            size: 5
        });

        // 6. 垂直虚线
        board.create('segment', [pX, pOnCurve], {
            dash: 2,
            strokeColor: '#D55E00',
            strokeWidth: 1.5
        });
    };

    if (typeof app !== "undefined" && app.document$) {
        app.document$.subscribe(initChart);
    } else {
        document.addEventListener("DOMContentLoaded", initChart);
        if (document.readyState === "complete" || document.readyState === "interactive") initChart();
    }
})();