# 字面量、变量、常量和数据类型

## 变量和常量

声明变量的时候可以不指定初始值，此时变量会有一个特殊的默认值：undefined

```javascript
let targetTempC // 等价于 "let targetTempC = undefined"
```

let 关键字可以同时声明多个变量

```javascript
let targetTempC,
  room1 = 'conference_coom_a',
  room2 = 'lobby'
//targetTempC变量没有被赋值，所以他的值是undefined
```

常量一旦初始化就不能再改变，**(可选)凡是代表明确数字或字符串的常量名都应该由大写字母组成，并用下划线间隔多个单词**。

```javascript
const ROOM_TEMP_C = 21.5,
  MAX_TEMP_C = 30
```

## 基本类型和对象

在 JavaScript 中，只有基本类型和对象这两种值。其中包括以下 6 中基本类型

- 数字 —— Number
- 字符串 —— string
- 布尔 —— bool
- null
- undefined
- 符号 —— symbol

**注意，不可变不是指变量的内容不可变**。

```javascript
let str = 'hello'
str = 'world'
// 第一个变量str被赋值为hello，然后再被赋值为一个新的值“world”，
// 但只是变量str的值改变了，还是同一个字符串str，指向同一个地址。
```

除了上述的 6 中基本类型，剩下的都是对象

- Array
- Date
- RegExp
- Map 和 WeakMap
- Set 和 WeakSet

## 数字

有些数字可以用计算机精确地表示，而很多数字只能取近似值。比如 pi、1/3 这些无无限小数。
JavaScript 与大多编程语言一样，有两种格式的近似值：

- IEEE-764 双精度
- 浮点型（double）

**0.1+0.2 = 0.30000000000000004 ？**

JavaScript**只有一种数值数据类型**，能识别 4 种类型的数字字面量：

- 十进制数
- 二进制数
- 八进制数
- 十六进制数

```javascript
let count = 10;
console.log(typeof count)//number

const blue = 0x0000ff;                  //十六进制数
console.log(typeof blue) //number

const umask = 0o0022;                   //八进制
console.log(typeof umask) //number

const roomTemp = 21.5;                  //十进制
console.log(typeof roomTemp) //number

const c = 3.0e6;                        //指数（3.0 * 10^6 = 3,000,000）
console.log(typeof c) //number

const 3 = -1.6e-19                      //指数（-1.6 * 10^-19 = 0.00000000000000000016
console.log(typeof 3) //number

const inf = Infinity;
console.log(typeof inf) //number

const nan = NaN;                        //不是数字
console.log(typeof nan) //number

```

**无论用什么格式的字面量，创建的数字都以双精度 double 存储的**。

## 字符串

字符串在 JavaScript 中表示 Unicode 文本，涵盖了字符的字符码。

#### 转义

由于文本数据和程序本身是通过引号区分的，那么当字符串数据中也包括引号时，会发生一些问题，这时候我们要对其进行转义处理。

```javascript
const dialog = "Sam looked up and said "dont't do that!" to Max.";
// 这行代码会产生错误
```

可以通过反斜杠 **\\** 对引号进行转义，来作为一个信号告诉 JavaScript 该字符串并没有结束

```javascript
对上述例子进行重写
const dialog1 = 'Sam looked up and said "dont\'t do that!" to Max.'
const dialog2 = 'Sam looked up and said "dont\'t do that!" to Max.'
//注意单双引号的区别，用单引号就以单引号结束，用双引号就要以双引号结束。

当字符串中也包含反斜杠的情况
const s = 'In JavaScript，use \\ as an escape character in strings.'
```

## 特殊字符

| 字符         | 说明              | 实例                                 |
| ------------ | ----------------- | ------------------------------------ |
| \n           | 换行              | "Line1\nLine2"                       |
| \r           | 回车              | "Windows line 1 \r\n Windows line 2" |
| \t           | 制表符            | "Speed:\t60kph"                      |
| \\'          | 单引号            | "Don\'t"                             |
| \\"          | 双引号            | 'Sam said\"hello\"'                  |
| \\` | 重音符 |
| \$           | 美元符            |
| \\           | 反斜线            |
| \uXXXX       | 任意的 Unicode 码 |
| \xXX         | Latin1 字符       |
| \f           | 换页符            |
| \b           | 退格符            |
| \v           | 垂直制表符        |
| \0           | NUL 字符          |

#### 模板字符串

```javascript
let currentTemp = 19.5
const message = 'The current temperature is ${currentTemp} \u00b0C'
```

#### 多行字符串

```javascript
// 使用重音符 **\`** 加换行的方式
const multiline = `line1
line2
line3`

// 这样的可读性不高
// 所以通常使用双引号加换行符的字符串连接
const multilinde = 'line1 \n' + 'line2\n' + 'line3'
```

#### 数字用作字符串

必要的时候，JavaScript 会自动将包含数字的字符串转换成数字。

```javascript
const result1 = 3 + '30' // 3 被转换成字符串；结果为字符串'330'
const result2 = 3 * '30' // '30' 被转换成数字；结果为数值90
```

至于为何有这种数据类型之间的转换，在后面的章节中会叙述到。

## 布尔型

布尔型只会出现两种值

- true
- false

当使用数值表示的时候，0 表示 false，其他非 0 的值都代表 true。

```javascript
let heating = true
let cooling = false
```

## 符号

Symbol 是 ES6 的新特性：代表一个唯一的标志。

```javascript
const RED = Symbol()
const ORANGE = Symbol('The color of a sunset!')
RED === ORANGE //false
```

## null 和 undefined

这两者都表示不存在；一般的经验是：null 是给开发者用的，而 undefined 是留给 JavaScript 用的，用来表示未赋值的内容（非强制）。

## 对象

基本类型只能代表一个值，而对象可以代表多个值或者复杂的值；本质上，对象是一个容器，容器的内容可以随着时间推移而改变

```javascript
const obj = {}

obj.size //undefines
obj.color = 'yellow'

obj['not an identifier'] = 3
obj['not an identifier'] // 3
obj['color'] // "yellow"

const SIZE = Symbol()
obj[SIZE] = 8
obj[SIZE] //8
```

**在控制台中，不会讲 SIZE 符号当做 obj 的属性列出来，symbol 属性的处理方式会有些不同，一般默认是不显示的。同时要注意的是，symbol 属性的键是符号 SIZE，而不是字符串类型的“SIZE”。**

对象的键值关系与调用方法

```javascript
const sam = {
    name:'sam',
    classification:{
        kingdom:'Anamalia',
        phylum:'Chordata',
        family:'Felidae',
        genus:'Felis',
        species:'catus',
    },
}

sam.classification.family;              // 'Felidae'
sam.["classification"].family;          // 'Felidae'
sam.classification.["family"];          // 'Felidae'
sam.["classification"].["family"]       // 'Felidae'


//delete操作可以用来删除对象中的属性
delete sam.classification

```

## Number,String 和 Boolean 对象
