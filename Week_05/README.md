学习笔记
https://time.geekbang.org/column/article/80011


## 练习2
练习：完成 StringToNumber 和 NumberToString 两个函数
数字有二进制、八进制、十进制、十六进制表示形式
二进制：‘0b’
八进制：‘0o’
十进制：‘10’、
十六进制：‘0x’

function StringToNumber(string) {
  const prefix = string.slice(0, 2).toLowerCase();
  const radixObj= {
    '0b': '2',
    '0o': '8',
    '': '10',
    '0x': '16'
  }
  if (radixObj[prefix]) {
    return parseInt(string.slice(2), radixObj[prefix])
  } else {
    return Number(string);
  }
}

function NumberToString(number, radix) {
  const radixObj= {
    '2': '0b',
    '8': '0o',
    '10': '',
    '16': '0x'
  }
  let temp = radixObj[radix] === undefined ? '' : radixObj[radix];
  return temp + Number(number).toString(radix);
}


## 练习7
G6可视化所有JS内置对象，不包括浏览器的。
作业：尝试找出 JavaScript 引擎里面 Realm 所有的对象，使用一个 JS 数据可视化的框架去做一个可视化