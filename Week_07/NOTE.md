学习笔记

## 第三步总结
在computeCSS 函数中，我们必须知道元素的所有父元素才能判断元素与规则是否匹配
从上一步的stack,可以h获取本元素所有父元素
首先获取的是当前元素，所以获得和计算父元素匹配的顺序是从内向外

## 第四步总结
选择器也要从当前元素向外排列
复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列



作业（可选）：实现复合选择器，实现支持空格的 Class 选择器

function macth(element, selector) {
  if (!selector || !element.attributes) {
    return false;
  }
  if (selector.charAt(0) === '#) {
    let attr = element.attribute.find(attr => attr.name === 'id');
    if (attr && attr.value === selector.replace('#', '')) {
      return true;
    }
  } else if (selector.charAt(0) === '.') {
    let attr = element.attributes.find(attr => attr.name === 'class');
    let className = attr && attr.value && attr.value.split(/\s+/).filter(item => !!item);
    if (className.includes(selector.replace('.', ''))) {
      return true;
    }
  }
  else {
    if (element.tagName === selector) {
      return true;
    }
  }
  return false;
}

## 第六步总结
一旦选择匹配，就应用选择器到元素上，形成computedStyle

练习：请同学们尝试在 selectorParts 里面去解析复合选择器
// 比较优先级
function specificity(selector) {
  var p = [0, 0, 0, 0];
  var selectorParts = selector.split(' ');
  for (var part of selectorParts) {
    // 附加作业，解析复合选择器
    if (part.charAt(0) == '#') {
      p[1] += 1;
    } else if (part.charAt(0) == '.') {
      p[2] += 1;
    } else {
      p[3] += 1;
    }
  }
  return p;
}

