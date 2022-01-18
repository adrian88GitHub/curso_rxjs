import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);

// const src$ = range(1, 5, asyncScheduler); signature deprecated
// instead
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log("incio");

src$.subscribe(console.log);

console.log("Fin");
