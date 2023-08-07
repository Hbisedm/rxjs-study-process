# Rxjs - study - Process

## 介绍

一些例子适合入门学习 `RxJs`

`Reactive` 的概念懂了去学习比较容易

`src/README.md` 每个案例文件的介绍

推荐使用`esno`去跑 ts 文件, 解决 运行`ts` 报错

## 引用

直接上代码, 下面有解释代码

```ts
import { Observable } from "rxjs";

const stream = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next([1, 2, 3]);
  }, 500);

  setTimeout(() => {
    subscriber.next({ a: 100 });
  }, 1000);

  setTimeout(() => {
    subscriber.unsubscribe();
    subscriber.next("end");
  }, 2000);

  setTimeout(() => {
    subscriber.complete();
  }, 2300);
});

// 流是独立运行
const subscription = stream.subscribe({
  complete: () => console.log("done"),
  error: (e) => console.log(e),
  next: (value) => console.log(value),
});

const subscription02 = stream.subscribe({
  complete: () => console.log("done"),
  error: (e) => console.log(e),
  next: (value) => console.log(value),
});

// 流是可以终止的
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 1998);
```

1. `stream`, 对应到 Rxjs 中，就是一个`observable`，单纯从英文翻译到中文的含义来看::可观察者，基本很难理解。但是它的本质其实就是一个随时间不断产生数据的一个`集合`，称之为流更容易理解。而其对象存在一个 subscribe 方法，调用该方法后，才会启动这个流（也就是数据才会开始产生），这里需要注意的是多次启动的每一个流都是独立的，互不干扰。
2. `observer`，代码中是`stream.subscribe(observer)`，对应到 Rxjs 中，也是称之为`observer`，从英文翻译到中文的含义来看::观察者，也很难理解。从行为上来看，无非就是定义了如何处理上述流产生的数据，称之为流的处理方法，更容易理解
3. `subscription`，也就是`const subscription = stream.subscribe(observer);`，这里对应到`Rxjs`，英文也是称之为`subscription`，翻译过来是订阅，也是比较难以理解，其实它的本质就是暂存了一个启动后的流，之前提到，每一个启动后的流都是相互独立的，而这个启动后的流，就存储在`subscription`中，提供了`unsubscribe`，来停止这个流。

简单理解了这三个名词`observable, observer, subscription`后，从数据的角度来思考：`observable`定义了要生成一个什么样的数据，其`subscribe`方法，接收一个`observer`（定义了接收到数据如何处理），并开始产生数据，该方法的返回值，`subscription`, 存储了这个已经开启的流（暂时没想到啥好的中文名），同时具有`unscbscribe`方法，可以将这个流停止。整理成下面这个公式：

> Subscription = Observable.subscribe(observer)
>
> observable: 随着时间产生的数据集合，可以理解为流，
> 其 subscribe 方法可以启动该流
>
> observer: 决定如何处理数据
>
> subscription: 存储已经启动过的流，
> 其 unsubscribe 方法可以停止该流

## 概念

- Observable

> 表示一个可调用的未来值或者时间序列上的`事件集合` (数据产生的地方)

- Observer

> 一个`回调函数集合`，它知道怎么去监听被 Observable 发送的值 (数据处理的地方)

- subscription

> 表示一个可观察对象的执行，主要用于取消执行

- Subject

> 主题，将一个值 or 事件广播到多个观察者 (先定义处理，再去拿数据) 多播

- Operators

> 纯函数，使得以函数变成的方式处理集合 (处理的各种方式)

操作符

为了解释 operators 是如何工作的，光是文本解释是不够的。许多 operators 和时间有关，它们可能会延迟执行，例如，throttle 等。图标往往能够比文字更多表达清楚。**Marble Diagrams**能够可视化的表现出 operators 是如何工作的，包括输入的 Observable(s)，operator 和它的参数，以及输出的 Observable.

参考文档中 - `Rxjs 操作符快速入门` - 目录如下

![image.png](https://for-image-upload.oss-cn-shenzhen.aliyuncs.com/imgs/202308071428966.png)

基本过一遍都实践一遍基本够用。 还有看得懂 `Marble Diagrams`

## 参考文档

- [Marble Diagrams](http://rxmarbles.com/)
- [Rxjs 操作符快速入门](https://juejin.cn/post/6934616596648296456)
- [RxJS：给你如丝一般顺滑的编程体验（建议收藏）](https://cloud.tencent.com/developer/article/1780453)
