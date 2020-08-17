# 初探 React

## React 带来的变化

颠覆了一些 JS 框架的写法和架构。（比如 jQuery）

#### React 的声明式编程

- 声明式编程是告诉机器想要什么信息，机器就返回什么信息偏重结果。

```javascript
var arr = [1, 2, 3, 4, 5]
var doubled = arr.map((val) => val * 2)
console.log(doubled)
```

- 命令式编程是命令机器要做什么事，机器就做什么事，偏重于过程。

```javascript
<script>
    var arr = [1,2,3,4,5]
    var doubled = []
    for(var i = 0;i<arr.length;i++){
        var newArr = arr[i] * 2
        doubled.push(newArr)
    }
    console.log(doubled)
    // doubled [2,4,6,8,10]
</script>
```

React 的声明式编程就是说，把相关的实现都抽离出来，使开发者更多的去关注结果。
更加突出的是整体性的编程思路。

#### React 组件化思想

- HTML 的标签就可以理解为一个组件，比如<button></button>,这就是一个封装好的按钮组件。
- React 的整体设计思路就是实现自定义的组件。

组件化的编程有很多优势，比如：

- 一个好的组件可以在项目中多处使用，这样可以节省很多重复工作
- 组件的分离可以要让开发者更加专注每个组件内部的实现，这样高内聚的特性不会影响到其他开发者的代码模块

React 正常自定义组件方式

```JavaScript
    var MyButton = React.createClass({
        render:function(){
            return (<button id="example">This is my button</button>)
        }
    })
```

React 中通过 ES6 继承方式自定义组件

```javascript
class MyButton extends Component {
  render() {
    return (
      <div className="App">
        <button>This is my button</button>
      </div>
    )
  }
}
```

#### React 的虚拟 DOM

## 本地环境搭建

React 的三种搭建环境方式

1. 引用 React CDN 资源
   - [bootCDN](https://www.bootcdn.cn/)
2. 通过 npm 安装 React

```
$ npm install --save react
```

3. 利用脚手架 create-react-app 来安装 React

```
$ npm install -g create-react-app
create-react-app my-react-app
cd my-react-app
npm start
```

create-react-app 在构建项目时，端口号默认设置为 3000,。如果想要修改端口号，可以在 node_modules/react-script.script/start.js 文件中修改，该文件配置了项目启动的 IP 以及端口号，代码如下：

```
const DEFAULT_PRO = parseInt(process.env.PORT,10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
```

## 与传统 jQuery 对比

在开发一些比较复杂的大型项目时，传统的 jQuery 变得越来越难用。

- 一方面是性能问题，由于 jQuery 经常性地操作 DOM 元素，会小号大量的运行时间
- 另一方面是用 jQuery 编写复杂的 DOM 操作，代码会有大量的堆积现象，难以维护。

以下是写一个数值增加功能按钮的示例对比

```javascript
    <div>
        <p>1</p>
        <button class="myBtn">增加器</button>
    </div>
    ...
    ...
    $(function(){
        var num = 1
        %('.myBtn').click(function(){
            num++;
            $('p').html(num)
        })
    })
```

```javascript
    <div id='example'></div>
    ...
    ...
    class AddNumber extends React.Component{
        constructor(props){
            super(props)
            this.state = {number:1}
            this.addNum = this.addNum.bind(this)
        }
        addNum(){
            this.setState({
                number:this.state.number + 1
            })
        }
        render(){
            return(
                <div>
                    <p>this.state.number</p>
                    <button onClikc={this.addNum}>增加器</button>
                </div>
            )
        }
    }
    ReactDOM.render(
        <AddNumbber />
        document.getElementById('example')
    )
```

React 相对 jQuery 的优势:

- React 的组件化要比 jQuery 的随时操作 DOM 方式更整体，代码会更优雅
- React 的关注点更多在组件的 state 上，而不用担心组件有没有更新，因为 React 如果认为 state 发生变化，会自动调用 render 方法进行 DOM 渲染，但是 jQuery 需要开发者自己完成
- React 采用了虚拟 DOM 技术，如果 state 中间发生了很多次变化，但是第一次和最后一次的状态是相同的，那 React 会认为该组件状态未更改，不会进行真正的 DOM 渲染；但是 jQuery 不一样，它需要对每一次的状态变化都进行 DOM 操作，无疑浪费了更多的运行时间。
- React 的组件化思想，耦合度较低，各模块相对独立，后期好维护。

## React 调试

- 安装 Chrome 插件：React Developer Tools
