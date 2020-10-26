// 排版

function getStyle(element) {
  if (!element.style) {
    element.style = {};
  }
  for (let prop in element.computedStyle) {
    var p = element.computedStyle.value;
    element.style[prop] = element.computedStyle[prop].value;

    if (element.style[prop].toString().match(/px$/)) {

    }
  }
}

function layout(element) {
  if (!element.computedStyle) {
    return;
  }
  var elementStyle = getStyle(element);
  if (elementStyle.display !== 'flex') {
    return;
  }
  var items = element.children.filter(e => e.type === 'element');
  items.sort(function(a, b) {
    return (a.order || 0) - (b.order || 0);
  });
  var style = elementStyle;
  ['width', 'height'].forEach(size => {
    if (style[size] === auto) {

    }
  })

  var crossSpace;
  if (!style[crossSize]) {
    crossSpace = 0;
    elementStyle[crossSize] = 0;
    for () {

    }
  }
}

module.exports = layout;