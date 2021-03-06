function kmp(source, pattern) {
  // 计算table 初始化table为一个数组以0初始化
  let table = new Array(pattern.length).fill(0);
  {
    // 从i开始，j表示有没有重复
    let i = 1, j = 0;
    while(i < pattern.length) {
      // 自重复
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;
      } else {
        // 
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
    // console.log(table);
  }
  
  // 匹配
  {
    let i = 0, j = 0;
    while (i < source.length) {
      if (j === pattern.length) {
        return true;
      }
      if (pattern[j] === source[i]) {
        ++j, ++i;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
    return false;
  }
}

console.log(kmp('hello', 'll'));