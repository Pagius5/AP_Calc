document.addEventListener("DOMContentLoaded", function () {
    const board = JXG.JSXGraph.initBoard('jxgbox_aroc', {
        boundingbox: [-1, 6, 5, -1],
        axis: true,
        showCopyright: false,
        showNavigation: true
    });

    // Function f(x) = 0.5 * x^2 + 1
    const f = function (x) { return 0.5 * Math.pow(x, 2) + 1; };

    // Plot the function
    const graph = board.create('functiongraph', [f], {
        strokeWidth: 3,
        strokeColor: '#1f77b4' // blue
    });

    // Fixed point A at x = 1
    const x1 = 1;
    const A = board.create('point', [x1, f(x1)], {
        name: 'A (Fixed)',
        fixed: true,
        size: 4,
        color: '#ff7f0e' // orange
    });

    // Movable point B on the graph, initially at x = 3
    const B = board.create('glider', [3, f(3), graph], {
        name: 'B (Drag me towards A)',
        size: 5,
        color: '#2ca02c' // green
    });

    // Secant line through A and B
    const secant = board.create('line', [A, B], {
        strokeColor: '#d62728', // red
        strokeWidth: 2
    });

    // Real tangent line at A
    const tangent = board.create('tangent', [A], {
        strokeColor: '#9467bd', // purple
        strokeWidth: 2,
        dash: 2,
        visible: false
    });

    // Dynamic text to show AROC vs IROC
    const slopeText = board.create('text', [0.2, 5.2, function () {
        let dx = B.X() - A.X();
        let dy = B.Y() - A.Y();
        let m;

        // Threshold for "instantaneous"
        if (Math.abs(dx) < 0.05) {
            m = x1; // Derivative of 0.5x^2 + 1 is x, so at x1, m = x1
            secant.setAttribute({ strokeColor: '#9467bd', dash: 2 });
            tangent.setAttribute({ visible: true });
            return "dx = 0.00 <br><b>Instantaneous Rate of Change</b><br>(Tangent Slope) &asymp; " + m.toFixed(2) +
                "<br><span style='color: #9467bd;'><i>Points A and B are essentially the same.</i></span>";
        } else {
            m = dy / dx;
            secant.setAttribute({ strokeColor: '#d62728', dash: 0 });
            tangent.setAttribute({ visible: false });
            return "dx = " + dx.toFixed(2) + " <br><b>Average Rate of Change</b><br>(Secant Slope) = " + m.toFixed(2);
        }
    }], { fontSize: 16 });
});
