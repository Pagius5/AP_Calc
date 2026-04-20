<script src="/javascripts/math_graph.js"></script>

<div id="box_multiple" style="width:100%; height:400px; border-radius: 8px; border: 1px solid #ddd;"></div>

<script>
  renderMathGraph('box_multiple', {
      boundingbox: [-4, 4, 4, -4],
      // 直接传入字符串数组，自动分配不同颜色！
      functions: [
          'sin(x)',           // 蓝线
          'x^2 - 2',          // 橙线
          '-x'                // 绿线
      ]
  });
</script>


-----

<div id="box_piecewise" style="width:100%; height:400px; border-radius: 8px; border: 1px solid #ddd;"></div>

<script>
  renderMathGraph('box_piecewise', {
      boundingbox: [-2, 5, 6, -2],
      functions: [
          // 左半段: x < 2 时，画 x/2
          { expr: 'x / 2', domain: [-2, 2] },
          
          // 右半段: x > 2 时，画 x + 1
          { expr: 'x + 1', domain: [2, 6] }
      ],
      // 统一强制使用第一种颜色(蓝色)画线，显得这是一个函数
      colors: ['#1f77b4', '#1f77b4'], 
      
      // 画端点：[x, y, isClosed(是否实心)]
      points: [
          [2, 1, false],  // 左极限在 (2,1)，空心 (false)
          [2, 3, true]    // 右极限在 (2,3)，实心 (true)
      ]
  });
</script>