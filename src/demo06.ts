import {ReplaySubject} from 'rxjs';

const replay = new ReplaySubject<number>(2, 100)

replay.subscribe((val:number) => {
    console.log(`订阅者A, 订阅值为:${val}`);
})

replay.next(1)
replay.next(2)
replay.next(3)

setTimeout(() => {
    console.log('延迟下');
    theObserveC()
}, 110);

theObserveB()


function theObserveB() {
    makeObserve('B', 4)
}


function theObserveC() {
    makeObserve('C', 5)
}

function makeObserve( ObserveName: string, val: number,) {
    replay.subscribe((val:number) => {
        console.log(`订阅者${ObserveName}, 订阅值为:${val}`);
    })
    replay.next(val)
}