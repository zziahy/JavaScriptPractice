# JavaScriptPractice
积累平时练习JavaScript程序的小仓库，简简单单，一步一个脚印的往前走。

### 1、JsNode.html简介
这是一个JavaScript节点训练的小demo，实现的功能有鼠标移动改变背景颜色、添加节点和删除节点。在鼠标移动改变背景颜色中，有个点暂时无法理解：
*21行至30行，为什么把this改为tr[i]或者tr1[i]就无法实现效果。*<br />

刚刚有人提到上面那个问题，回答如下：<br />
this就等于你的trs[i]，function里面再用trs[i]  就相当于等号两边都有参数i，逻辑上过不去。<br />

不是很理解，暂时跳过它。<br />
[效果展示](https://cruxf.github.io/JavaScriptPractice/JsNode.html)

### 2、JsTab.html简介
这是一个利用JavaScript实现的简洁Tab选项卡，代码简单明了。

[效果展示](https://cruxf.github.io/JavaScriptPractice/JsTab.html)

### 3、JsSlidingDoors.html简介
这是一个利用JavaScript实现的简单滑动门效果，类似于手风琴，优点是代码简洁，缺点是没有做动画效果过渡处理。

[效果展示](https://cruxf.github.io/JavaScriptPractice/JsSlidingDoors.html)

### 4、JsEvent.html简介
点击按钮，显示登录图层或者隐藏关闭图层，代码并不复杂，主要问题在于解决IE浏览器、上古浏览器之间的兼容性。

[效果展示](https://cruxf.github.io/JavaScriptPractice/JsEvent.html)

### 5、JsQqEvent.html简介
这是一个QQ面板拖动的代码实现，代码较为庞大和复杂，需要有很好的JavaScript基础才能理解，其中涉及到了很多元素宽高之间的计算以及事件冒泡的知识。

[效果展示](https://cruxf.github.io/JavaScriptPractice/JsQqEvent.html)

### 5、JsKeyEvent.html简介
利用JavaScript实现一个抽奖程序，用到的知识点有数组、鼠标事件、键盘事件和定时器，编写程序的时候记得定时器能够叠加这回事那么实现这个抽奖就不难了。

[效果展示](https://cruxf.github.io/JavaScriptPractice/JsKeyEvent.html)
