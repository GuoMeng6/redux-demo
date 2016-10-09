# Redux
## 使用
### 通过``connect()``方法包装好一个``component``，这样，该``component``可以得到一个``dispatch``方法作为该组件的``props``，也可以得到全局state中所需要的任何内容。 当有数据变化需要UI更新时，此时可以调用``dispatch``方法传入一个Action，而Action中必须有一个字符串类型的type属性，也可以将新的数据作为作为属性给Action，``dispatch``方法调用后，reducer会根据Action的Type值通过``switch``做相应的处理，返回一个最新的state(如果没有处理则需要返回旧的state),此时组件重新被渲染，``props``中的所需要的内容也将全部更新，所有使用到该内容的组件也就更新了。


## Action
   1.Action是一个对象，它必须要有一个字符串常量作为Type来表示需
要完成的动作。

```
const ADD_TODO = 'ADD_TODO'
```

   2.Action创建函数就是一个生成一个Action的方法，主要的好处就是使Action函数更容易被移植和测试。
   
```
function AddTodo(text){
	return{type:ADD_TODO,text}
}
```

   3.``store``可以直接调用``dispatch``方法，但大多数都是使用``connect``方法来调用``dispatch``方法。
   
```
store.disptach(action)
```

   4.可以使用``bindActionCreators()``将多个Action创建函数绑定到``dispatch``方法上。


## Reducer
1.根据Action来指明如何更新state，接收旧的state和action返回一
个新的state。

```
(oldState,action)=>newState
```

2.保持reducer纯净，不能执行的操作： 修改传入的参数、执行有副作用的操作，如 API 请求和路由跳转、调用非纯函数，如 Date.now() 或 Math.random()。

 
3.Redux首次执行时，给程序写一个初始的state。

4.对Action进行处理时，需要修改数组中指定的数据项不导致突变，因此可以创建一个新的数组，将那些不需要修改的项原封不动的移入，对需要修改的项用新生成的对象替换。

5.现在开发中state会涉及到多种功能，因此可以写多个reducer来处理它管理的那一部分数据，使用 combineReducers()将所有的ruducer合成一个大的对象。

##Store
1.将action与reducer联系起来，使用``store.disptach方法``传入action作为参数来更新state。

``getState()``方法获得状态

``subscribe(listener)``注册监听器

2.Redux**中只有一个单一的Store**，使用``combineReducers()``将多个reducer合并成为一个。