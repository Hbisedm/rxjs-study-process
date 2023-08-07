import {interval, map, merge, of, switchMap, take, tap} from 'rxjs';

const request = function(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, 600);
    })
}

const source = interval(500).pipe(
    tap(v => {
        console.log('tap1', v);
    }),
    map(v => {
        return v + 1
    }),
    tap(v => {
        console.log('tap2', v);
    }),
    take(3),
    switchMap(v=>request(v))
)

source.subscribe(v => {
    console.log('vvv', v);
})

/* -------------------------------------------------------------------------- */
const stream_01 = of(1,2,3,4)
const stream_02 = of('a', 'b', 'c', 'd')

const merged = merge( stream_01,stream_02 ).pipe(
    map(v => (''+v)),
    switchMap((v) => request(v))
)

merged.subscribe(v => console.log('merged', v))


const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)), switchMap((v,i) => {
    console.log('val: ', v);
    console.log('index: ', i);
    return request(`val: ${v} index: ${i}`)
}));
switched.subscribe(x => console.log('switched::', x));





