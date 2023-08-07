import {AsyncSubject} from 'rxjs';

const async = new AsyncSubject()

async.subscribe(val => {
    console.log('订阅者A', val);
})

async.next(1)
async.next(2)

async.subscribe(val => {
    console.log('订阅者B', val);
})

async.next(3)
async.complete()

// 从上面的代码示例可以看出来AsyncSubject会在执行complate后才送出最后一个值，其实这个行为跟 Promise 很像，都是等到事情结束后送出一个值。在 Promise 中，我们可以通过 resolve(value)声明任务完成，并将获得的值发送出去，然后再通过Promise.then()方法中处理得到的值