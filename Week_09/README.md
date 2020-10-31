学习笔记

## 练习7
请写出下面选择器的优先级： div#a.b .c[id=x] 0 1 3 1 #a:not(#b) 0 2 0 0 *.a 0 0 1 0 div.a 0 0 1 1

div#a.b .c[id=x]
[0 1 3 1]
#a:not(#b)
[0 2 0 0]
*.a
[0 0 1 0]
div.a
[0 0 1 1]

## 练习9
编写一个 match 函数。它接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

function match(selector, element) {
  let selectors = parseSelector(selector);
  if (selectors.length === 0) {
    return false;
  }
  if (matchComputed(selectors[0], element)) {
    return matchSelectors(selectors.slice(1), element);
  }
  return false;
}

match("div #id.class", doucument.getElementById("id"));

## 思考题
为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

first-letter是内容的第一个字，first-line是内容的第一行。
伪元素是根据现有布局生成的东西。也就是说,必须首先根据应用于DOM树中元素的CSS构造和渲染布局


个人理解是因为first-letter是内容的第一个字母，要确认出来很直接，而first-line：不在格式化行之前,不知道元素文本的第一格式化行多长时间,而且该行的内容和长度也可能随着调整大小而改变和/或重排元素及其内容。为增强浏览器性能，first-line不支持设置float之类css，防止出现浏览器重排。