import { Subject } from "rxjs";

const subject = new Subject();

subject.next(1);
// 此时没有观察者，所以没有被用到

subject.subscribe((val) => console.log(`订阅者A: 拿到订阅者${val}`));

subject.next(2);
// 此时有观察者A，所以被用到1次

subject.subscribe((val) => console.log(`订阅者B: 拿到订阅者${val}`));

subject.next(3);
// 此时有观察者A,B，所以被用到2次
