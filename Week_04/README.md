学习笔记
## 练习2

产生式（BNF）
四则运算： 1 + 2 * 3
终结符：Number + - * /
非终结符：MultiplicativeExpression AddtiveExpression

四则运算的BNF
<MultiplicativeExpression>::=<Number>|
  <MultiplicativeExpression>"*"<Number>|<MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
  <AddtiveExpression>"+"<MultiplicativeExpression>|
  <AddtiveExpression>"-"<MultiplicativeExpression>|

带括号的四则运算BNF
式子： (1 + 2) * 3
思考：括号应该只能括加减表达式

<BracketExpression>::=<Number>|<AddtiveExpression>"("<BracketExpression>")"

<MultiplicativeExpression>::=<BracketExpression>|
  <MultiplicativeExpression>"*"<BracketExpression>|<MultiplicativeExpression>"/"<BracketExpression>|
<AddtiveExpression>::=<MultiplicativeExpression>|
  <AddtiveExpression>"+"<MultiplicativeExpression>|
  <AddtiveExpression>"-"<MultiplicativeExpression>|

## 练习4
常见的几种分类
1. 高级语言和低级语言
高级语言有：C、C++、Java、Python、PHP、C#、Ruby、go、Kotlin、Swift
低级语言有：机器码、汇编语言
2. 动态类型和静态类型
动态类型是指在程序运行期间才给变量指定数据的类型，常见Python和Ruby
静态类型是指在写程序代码的时候就要指定变量的类型，常见C、C++、Java
3. 强制类型和弱类型
强制类型指一个变量只能定义为一种类型，如float类型就只能是float类型而不能在不发生转化的情况下赋予int类型，常见C语言
弱类型是指没有类型的界限，可以任意的复制，常见Python
4. 编译型，解释型，半编译半解释
编译型常见于C、C++
解释型常见于Python、Javascript、Perl、Shell
半编译半解释常见于Java
5. 面向对象型和面向过程型
C++是部分面向对象的，Java具有封装性是完全面向对象的，C语言是面对过程的语言

数据描述语言：JSON、HTML、XAML、SQL、CSS
编程语言：C、C++、JAVA、C#、Python、go
声明式语言：JSON、SQL、CSS
命令式语言：C、C++、JAVA、Javascript、Python、C#


## 练习8

笔记
String 由字符组成，字符有ASCLL值，用编码存于字节中

编写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。

function UTF8_Encoding(string) {

}


## 练习10 
练习：用 JavaScript 去设计狗咬人的代码

## 练习11
作业：找出 JavaScript 标准里面所有具有特殊行为的对象

特殊行为的对象是相对于原生对象和固有对象来说的，原生对象和固有对象都属于内置对象，即Javascript提供的对象

Array 可以根据元素的最大下标的变化，length会随之变化
Object.prototype 是所有对象的默认原型对象，无法给自己设定原型
String 为了支持下标运算，字符串正整数下标，访问会去找对应字符串的对应位置，负数为undefined
Arguments arguments非负整数下标属性，跟对应的变量（形参/实参）联动
模块的namespace对象
类数组和数组缓冲区，跟内存块联系在一起，下标运算比较特殊
bind之后的function 与原function相关联