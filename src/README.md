# 文件介绍

- demo01

简单使用 Observable, Observer, subscribe

- demo02

简单使用 Subject

- demo03

玩一下 interval, 定义一个实时产生数据的 Observable

- demo04

Subject 的使用

- demo05

BehaviorSubject 的使用

很多时候我们会希望 Subject 能代表当下的状态，而不是单纯的事件发送，也就是说如果当前有一个新的订阅，我们希望 Subject 能立即给出最新的值，而不是没有回应。

- demo06

ReplaySubject 的使用

BehaviorSubject 的升级版

BehaviorSubject 只能接收一个 Observable

ReplaySubject 实例化时,可以接收参数,

- 第一个参数: 订阅的 Observe 可以接收多少个旧数据(空间限制)
- 第二个参数: 存储多长时间(时间限制)

- demo07

ReplaySubject 与 BehaviorSubject 的区别

BehaviorSubject 注重行为, ReplaySubject 注重缓存

BehaviorSubject 在`complete`后就不要订阅了, ReplaySubject 不会有这个限制

- demo08

AsyncSubject 的使用

complete 后才能拿到最后 Observable 的值

- demo09

操作符 的使用
