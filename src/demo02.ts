/* --------------------------------- subject -------------------------------- */
import { Subject } from "rxjs";

const subject = new Subject();

const observer = {
  complete: () => console.log("done"),
  error: (e) => console.log(e),
  next: (value) => console.log(value),
};

/* -------------------------------- 订阅多个观察者对象 ------------------------------- */
subject.subscribe(observer);
subject.subscribe((v) => console.log("stream 1", v));
subject.subscribe((v) => console.log("stream 2", v));
setTimeout(() => {
  subject.subscribe((v) => console.log("stream 3", v));
}, 1000);
/* -------------------------------------------------------------------------- */

/* ----------------------------------- 消费 ----------------------------------- */
subject.next(1);
subject.next(2);
setTimeout(() => {
  subject.next(3);
}, 2000);
