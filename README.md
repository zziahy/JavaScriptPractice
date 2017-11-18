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
