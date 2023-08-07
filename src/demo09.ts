import {Observable, race, concat, merge, zip, of, tap, map, observeOn, asyncScheduler} from 'rxjs';

const p_a = Promise.resolve('a')
const p_b = Promise.resolve('b')
const p_c = Promise.resolve('c')
const p_d = Promise.resolve('d')
const p_e = Promise.resolve('e')

const ob0 = new Observable((subscriber) => {
    subscriber.next(p_a)
    setTimeout(() => {
        console.log('ob0 last');
        subscriber.next(p_b)
        subscriber.next(p_c)
        subscriber.complete()
    }, 50);
})

const ob1 = new Observable((subscriber) => {
    subscriber.next(p_d)
    setTimeout(() => {
        console.log('ob1 last');
        subscriber.next(p_e)
        subscriber.complete()
    }, 100);
})

const ob2 = concat(ob0, ob1)

{
    console.log('concat::排队' );
    ob2.subscribe(async (v) =>{
        console.log(await v);
    })
}

const ob3 = merge(ob0, ob1)

setTimeout(() => {
    console.log('merge::先到先得' );
    ob3.subscribe(async (v) =>{
        console.log(await v);
    })
}, 1000);

const ob4 = zip(ob0, ob1)

setTimeout(() => {
    console.log('zip::拉链' );
    ob4.subscribe((v) =>{
        console.log(v);
    })
}, 2000);

const ob5 = race(ob0, ob1)

ob5.subscribe(v => {
    console.log('race');
    console.log(v);
}) 


const obArr = of([p_a, p_b, p_c])

// obArr.subscribe()

const obNum = of(1,2,3,4,5)

const n = obNum.pipe(tap(num => console.log(num)),  map(num => 'hi:'+num)).pipe(
    observeOn(asyncScheduler)
)

n.subscribe(v => console.log(v))

console.log('the last');












