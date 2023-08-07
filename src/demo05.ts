import { BehaviorSubject } from "rxjs";

const behavior = new BehaviorSubject<number>(0);

behavior.subscribe((val) => console.log(`订阅者A: 拿到订阅者${val}`));

behavior.next(1)

behavior.subscribe((val) => console.log(`订阅者B: 拿到订阅者${val}`));

behavior.next(2);