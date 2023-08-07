import {ReplaySubject, BehaviorSubject} from 'rxjs';

const replay = new ReplaySubject<number>(2)

replay.next(1)
replay.next(2)
replay.next(3)

replay.complete()

replay.subscribe((v) => {
    console.log('replay', v)
})

const behavior = new BehaviorSubject(0)

behavior.next(1)
behavior.next(2)
behavior.next(3)
behavior.complete()

behavior.subscribe((v) => {
    console.log('behavior', v);
})