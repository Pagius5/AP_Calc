# Welcome to Pagius' AP Calculus Notes

## I. Intro to Calculus


!!! abstract "Keywords"
    **Calculus 微积分** • **Analysis 分析** 

    **Change** • **Infinity ($\infty$)** • **infinitesimal 无穷小量**
    
    **Limit 极限** • **Differentiation 微分** • **Integral 积分**  

### 1. The Historical Paradox
Calculus is the mathematical study of **change and infinity**.

??? tip "Extension: Etymology"
    Both *calculus* and *calculation* share the same Latin root *calculus* (small pebble), used by Romans for counting. While "calculation" became a general term for arithmetic, "Calculus" was adopted in the 17th century to describe the specific "method of calculation" involving infinitesimals.
    
    Even today, dentists and doctors use "calculus" to refer to stone-like deposits on teeth (dental calculus) or in kidneys (kidney stone or renal calculus) !

**Why is Calculus referred to as "Small Pebbles"?**

It is more than just a nod to ancient counting methods. From a mathematical and philosophical standpoint, the core of Calculus is the concept of the "infinitesimal":

* Integration: The act of accumulating those infinite "pebbles" (area slices) back together.
* Differentiation: The act of deconstructing a complex curve into an infinite number of microscopic "pebbles" (linear segments).

In the history of mathematics, calculus developed in this sequence: 

**Integral 积分 → Differentiation 微分 → Limit 极限**.

* **Ancient Times (Integration):** As early as Archimedes, mathematicians used the "Method of Exhaustion" to calculate the area of circles—this was the birth of **Integration**.

<div id="jxgbox-circle-area" class="jxgbox" style="width:100%; height:430px; border-radius: 8px;"></div>
<script src="/javascripts/circle_area.js"></script>
<p style="text-align: right; font-size: 0.8em; margin-top: 10px;"><i>Interactive graph credit: <a href="https://jsxgraph.uni-bayreuth.de/share/example/approximation-of-the-circle-area" target="_blank">JSXGraph</a></i></p>

* **17th Century (Differentiation):** Newton and Leibniz developed **Differentiation** to solve problems of instantaneous velocity and tangents. They discovered the **Fundamental Theorem of Calculus**, proving that integration and differentiation are inverse operations:

    $$\int_a^b f(x)dx = F(b) - F(a)$$

* **19th Century (Limits):** Early calculus was plagued by logical inconsistencies (dubbed "the ghosts of departed quantities"). It wasn't until later that Cauchy and others developed the rigorous **Limit** theory we study today.

<iframe src="https://www.geogebra.org/material/iframe/id/mj2bXA5y" loading="lazy" width="100%" height="500px" style="border: 1px solid #e4e4e4; border-radius: 8px;" allowfullscreen></iframe>
<p style="text-align: right; font-size: 0.8em; margin-top: 10px;"><i>Interactive graph credit: <a href="https://www.geogebra.org/m/mj2bXA5y" target="_blank">GeoGebra</a></i></p>

In almost any calculus course, calculus is taught in this sequence: 

**Limit 极限 → Differentiation 微分 → Integral 积分 **.

**Why does the curriculum seem to go in the opposite order of history?**

We study limits first to provide a solid, modern foundation for the brilliant intuitive discoveries made hundreds of years ago.

??? tip "Extension: Calculus & Analysis"
    * **Calculus** is the **operational** toolset. It focuses on the "how"—the rules, formulas, and techniques used to calculate slopes, areas, and volumes. It is the language of engineers and physicists who need to solve real-world problems.
    
    * **Analysis** is the **theoretical** foundation. It focuses on the "why"—the rigorous proof and logical structure behind Calculus. It investigates the nature of real numbers, the formal definition of limits ($\epsilon$-$\delta$ proofs), and the conditions under which functions behave predictably.

### 2. Why is Calculus Challenging?
> "The word “analysis,” used to denote a branch of mathematics, is not one that features at high school level. However, the word “calculus” is much more familiar, and differentiation and integration are good examples of mathematics that would be classified as analysis rather than algebra or geometry. The reason for this is that they involve *limiting processes*. For example, the derivative of a function *f* at a point *x* is the limit of the gradients of a sequence of chords of the graph of *f* , and the area of a shape with a curved boundary is defined to be the limit of the areas of rectilinear regions that fill up more and more of the shape."

> — ***The Princeton Companion to Mathematics***

If you feel that Calculus is a "huge leap" from Algebra, you are right. It requires a fundamental shift in your thinking:

* **Elementary Math (Static):** Deals with constants and static shapes. You calculate the slope of a line or the area of a rectangle. The logic is $1 + 1 = 2$.
* **Calculus (Dynamic):** Deals with variables and motion. It is the study of **change, infinity, and limit**. It asks: "What happens as the interval becomes infinitely small?"
* **The Mindset Shift:** You move from the "certainty" of algebra to the "analysis" of trends. Embracing the concept of "approaching infinity without ever reaching it" is the core difficulty—and the core beauty—of the subject.

### 3. Calculus in the Mathematical Hierarchy
If mathematics were a tree:

* **Roots/Trunk:** Arithmetic, Algebra, and Geometry (dealing with numbers and spatial relationships).
* **The Gateway to the Canopy:** That is **Calculus**.

Calculus is the **foundation of higher mathematics**. It provided humanity with the first precise language to describe "change." Without it, there would be no modern physics (Newtonian Mechanics), no engineering (bridge stress analysis), and no Artificial Intelligence (Gradient Descent in Deep Learning).

### 4. Don't Give Up, Skeletons. Check Out Some Mind-blowing Videos.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" 
    loading="lazy"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    title="3Blue1Brown - Essence of Calculus Playlist" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="//player.bilibili.com/player.html?bvid=BV1N2dGYxEyf&page=1&high_quality=1&danmaku=0&autoplay=0" 
    loading="lazy"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    title="3Blue1Brown - Essence of Calculus Playlist" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="//player.bilibili.com/player.html?bvid=BV1wc411w7Dr&page=1&high_quality=1&danmaku=0&autoplay=0" 
    loading="lazy"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    title="3Blue1Brown - Essence of Calculus Playlist" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

---

## II. Intro to AP Calculus
**AP Calculus** (also known as AP Calc) is a set of two distinct AP calculus courses and exams offered by College Board. **AP Calculus AB** covers basic introductions to limits, derivatives, and integrals. **AP Calculus BC** covers all AP Calculus AB topics plus integration by parts, infinite series, parametric equations, vector calculus, and polar coordinate functions, among other topics.

This site will cover all the topics with an emphasis on AP Calc BC.

<div style="background-color: #f8f9fa; border: 2px solid #0070d2; border-radius: 12px; padding: 20px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #0070d2;">📌 Official Course Guide</h4>
  <p>Make sure you access the complete curriculum, topics, and exam details directly from College Board:</p>
  <p style="font-size: 0.9em;"><strong>🔗 <a href="https://apstudents.collegeboard.org/courses/ap-calculus-bc">AP Calculus BC Official Hub</a></strong></p>
  <p style="font-size: 0.9em;"><strong>📄 <a href="https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf">AP Calculus Exam Description PDF</a></strong></p>
</div>

| Units                                                                                        | Exam Weighting (AB) | Exam Weighting (BC) |
| :------------------------------------------------------------------------------------------- | :-----------------: | :-----------------: |
| **Unit 1:** Limits and Continuity                                                            |     **10–12%**      |      **4–7%**       |
| **Unit 2:** Differentiation: Definition and Fundamental Properties                           |     **10–12%**      |      **4–7%**       |
| **Unit 3:** Differentiation: Composite, Implicit, and Inverse Functions                      |      **9–13%**      |      **4–7%**       |
| **Unit 4:** Contextual Applications of Differentiation                                       |     **10–15%**      |      **6–9%**       |
| **Unit 5:** Analytical Applications of Differentiation                                       |     **15–18%**      |      **8–11%**      |
| **Unit 6:** Integration and Accumulation of Change                                           |     **17–20%**      |     **17–20%**      |
| **Unit 7:** Differential Equations                                                           |      **6–12%**      |      **6–9%**       |
| **Unit 8:** Applications of Integration                                                      |     **10–15%**      |      **6–9%**       |
| **Unit 9:** Parametric Equations, Polar Coordinates, and Vector-Valued Functions **BC ONLY** |                     |     **11–12%**      |
| **Unit 10:** Infinite Sequences and Series **BC ONLY**                                       |                     |     **17–18%**      |

---

## III. Useful Resources
### 1. Textbooks
* **James Stewart - Calculus** 
* **George B. Thomas - Thomas' Calculus**
### 2. Prep Books
* **Barron's AP Calculus Premium**
* **The Princeton Review: Premium Prep**
### 3. Exam Questions
* [Past Exam FRQ Questions](https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions)
### 4. Online Guide
* <img src="https://www.google.com/s2/favicons?domain=3blue1brown.com/" width="16" vertical-align="middle"> [3Blue1Brown - Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) God tier.
* <img src="https://www.google.com/s2/favicons?domain=tutorial.math.lamar.edu/" width="16" vertical-align="middle"> [Paul's Online Notes](https://tutorial.math.lamar.edu/) Top tier.
* <img src="https://www.google.com/s2/favicons?domain=khanacademy.org" width="16" vertical-align="middle"> [Khan Academy - AP Calculus BC](https://www.khanacademy.org/math/ap-calculus-bc) Solid.
* [漫士沉思录](https://space.bilibili.com/266765166/lists/1703914) 3b1b风格的中文科普。
* [长河劫](https://space.bilibili.com/35868098) 主要是数学史讲解。

### 5. Tools
* <img src="https://www.google.com/s2/favicons?domain=desmos.com" width="16" vertical-align="middle"> [Desmos](https://www.desmos.com/calculator) A graphing calculator.
* <img src="https://www.google.com/s2/favicons?domain=geogebra.org" width="16" vertical-align="middle"> [Geogebra](https://www.geogebra.org/calculator) A graphing calculator.
* <img src="https://www.google.com/s2/favicons?domain=wolframalpha.com" width="16" vertical-align="middle"> [Wolfram Alpha](https://www.wolframalpha.com/) An online calculator. As well as integrals and derivatives, it does limits, series expansions, vector analysis, integral transforms etc. A powerful tool.

### 6. Misc.
* [清华大学数学课程学习指南](https://mathloveyou.github.io/)
* [清华大学计算机系课程攻略](https://github.com/PKUanonym/REKCARC-TSC-UHT)
* [MIT牛人解说数学体系](https://in.iphy.ac.cn/emagazine/o/news.php?id=22962)
* [The Map of Mathematics](https://www.youtube.com/watch?v=OmJ-4B-mS-Y)







<!-- For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files. -->
