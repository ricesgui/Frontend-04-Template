学习笔记
有限状态机

## 练习3
在一个字符串中，找到字符”a”
function findCha(str, chara) {
  for (let s of str) {
    if (s === chara) {
      return true;
    }
  }
  return false;
}
findCha('qedrewa', 'a');

str.indexOf('a') > 0


## 练习4
不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”

function findCha(str) {
  let tempA = false;
  for (let s of str) {
    if (s === 'a') {
      tempA = true;
      <!-- 先找到a,再看a后面带的是不是b，是则结束，不是则继续找a然后找b进行循环 -->
    } else if (tempA && s === 'b') {
      return true;
    } else {
      tempA = false;
    }
  }
  return false;
}

## 练习5
不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”
function findCha(str) {
  let tempA = false;
  let tempB = false;
  let tempC = false;
  let tempD = false;
  let tempE = false;
  for (let s of str) {
    if (s === 'a') {
      tempA = true;
      <!-- 先找到a,再看a后面带的是不是b，是则结束，不是则继续找a然后找b进行循环 -->
    } else if (tempA && s === 'b') {
      tempB = true;
    } else if (tempA && tempB && s === 'c') {
      tempC = true;
    } else if (tempA && tempB && tempC && s === 'd') {
      tempD = true;
    } else if (tempA && tempB && tempC && tempD && s === 'e') {
      tempE = true;
    } else if (tempA && tempB && tempC && tempD && tempE && s === 'f') {
      return true;
    } else {
      tempA = false;
      tempB = false;
      tempC = false;
      tempD = false;
      tempE = false;
    }
  }
  return false;
}

## 练习7
用状态机实现：字符串“abcabx”的解析
function findStr(str) {
  let state = start;
  for(let c of str) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') {
    return findA;
  } else {
    return start(c);
  }
}

function end(c) {
  return end;
}

function findA(c) {
  if (c === 'b') {
    return findB;
  } else {
    return start(c);
  }
}
function findB(c) {
  if (c === 'c') {
    return findC;
  } else {
    return start(c);
  }
}
function findC(c) {
  if (c === 'a') {
    return findA2;
  } else {
    return start(c);
  }
}
function findA2(c) {
  if (c === 'b') {
    return findB2;
  } else {
    return start(c);
  }
}
function findB2(c) {
  if (c === 'x') {
    return end;
  } else {
    return findB(c);
  }
}
console.log(findStr('abcabx'));

作业：使用状态机完成”abababx”的处理。

function findStr(str) {
  let state = start;
  for(let c of str) {
    state = start(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') {
    return findA;
  } else {
    return start(c);
  }
}

function end(c) {
  return end;
}

function findA(c) {
  if (c === 'b') {
    return findB;
  } else {
    return start(c);
  }
}
function findB(c) {
  if (c === 'a') {
    return findA2;
  } else {
    return start(c);
  }
}

function findA2(c) {
  if (c === 'b') {
    return findB2;
  } else {
    return start(c);
  }
}
function findB2(c) {
  if (c === 'a') {
    return findA3;
  } else {
    return start(c);
  }
}
function findA3(c) {
  if (c === 'b') {
    return findB3;
  } else {
    return start(c);
  }
}
function findB3(c) {
  if (c === 'x') {
    return end;
  } else {
    return findB2(c);
  }
}
console.log(findStr('abababx'));

可选作业：我们如何用状态机处理完全未知的 pattern？ （参考资料：字符串 KMP 算法 https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm）


## HTTP请求

