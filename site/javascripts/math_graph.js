/**
 * 高级数学绘图封装函数 (基于 JSXGraph + Math.js)
 * @param {string} divId - 容器的 ID
 * @param {object} options - 配置参数
 */
function renderMathGraph(divId, options) {
    let retryCount = 0;
    const maxRetries = 20; // 最多重试 20 次 (应对 MkDocs 的即时加载机制)

    // 将原本的逻辑封装成内部函数，方便没加载好时重复调用
    function tryRender() {
        // 检查依赖：如果没有加载，执行重试机制
        if (typeof JXG === 'undefined' || typeof math === 'undefined') {
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(tryRender, 200); // 等待 200ms 后再检查一次
                return;
            }
            // 重试 20 次还是失败了才报错
            console.error("缺少 JSXGraph 或 Math.js 依赖！");
            let div = document.getElementById(divId);
            if (div) div.innerHTML = "<p style='text-align:center; padding-top:100px;'>Missing Libraries. Please refresh the page.</p>";
            return;
        }

        // ==========================================
        // 以下是你原封不动的原始核心代码
        // ==========================================

        // 默认配置
        const bbox = options.boundingbox || [-5, 5, 5, -5]; // [左, 上, 右, 下]
        const showAxis = options.axis !== false;

        // 预设几种好看的颜色 (蓝, 橙, 绿, 红, 紫)
        const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

        // 1. 初始化画板
        var board = JXG.JSXGraph.initBoard(divId, {
            boundingbox: bbox,
            axis: showAxis,
            showCopyright: false,
            pan: {
                enabled: true,
                needShift: false,
            },
            zoom: {
                enabled: true,
                wheel: true
            },
            defaultAxes: {
                x: { ticks: { insertTicks: false } },
                y: { ticks: { insertTicks: false } }
            }
        });

        // 2. 渲染函数 (支持多个、支持分段)
        if (options.functions && Array.isArray(options.functions)) {
            options.functions.forEach((funcData, index) => {
                let exprStr, minX, maxX;

                // 判断传入的是纯字符串 'sin(x)' 还是对象 {expr: 'x/2', domain: [-2, 2]}
                if (typeof funcData === 'string') {
                    exprStr = funcData;
                    minX = bbox[0]; // 默认填满横坐标
                    maxX = bbox[2];
                } else {
                    exprStr = funcData.expr;
                    minX = funcData.domain ? funcData.domain[0] : bbox[0];
                    maxX = funcData.domain ? funcData.domain[1] : bbox[2];
                }

                // 核心：使用 Math.js 编译人类自然语言公式
                const compiled = math.compile(exprStr);
                const jsFunc = function (x) {
                    try {
                        return compiled.evaluate({ x: x });
                    } catch (e) {
                        return NaN;
                    }
                };

                // 画线，自动分配颜色
                board.create('functiongraph', [jsFunc, minX, maxX], {
                    strokeColor: options.colors ? options.colors[index] : colors[index % colors.length],
                    strokeWidth: 2
                });
            });
        }

        // 3. 渲染关键点 (用于分段函数的空心/实心点)
        // 格式: points: [[x, y, isClosed], [2, 1, false]]
        if (options.points && Array.isArray(options.points)) {
            options.points.forEach(pt => {
                const x = pt[0], y = pt[1], isClosed = pt[2];
                board.create('point', [x, y], {
                    fillColor: isClosed ? '#1f77b4' : 'white',
                    strokeColor: '#1f77b4',
                    size: 3,
                    name: '',
                    fixed: true
                });
            });
        }

        // ==========================================
        // 新增的第四步：执行添加标签的回调函数
        // ==========================================
        if (typeof options.onInit === 'function') {
            options.onInit(board);
        }
    }

    // 第一次尝试渲染 (延迟 100ms)
    setTimeout(tryRender, 100);
}