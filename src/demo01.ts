/* ------------------------------- Observable, subscribe, Observer ------------------------------- */
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
