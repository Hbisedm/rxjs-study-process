import { interval } from "rxjs";

// 定时1000ms一个产生累加Observable  index从0开始
const stream = interval(1000);

const subscription = stream.subscribe((x) => console.log(x));

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
