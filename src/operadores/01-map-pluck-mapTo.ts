import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map((val) => val * 10))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpCode$ = keyUp$.pipe(map((event) => event.code));

const keyUpPluck$ = keyUp$.pipe(pluck("target", "baseURI"));

const keyUpMapTo$ = keyUp$.pipe(mapTo("tecla presionada"));

keyUp$.subscribe(console.log);
keyUpCode$.subscribe((code) => console.log("map: ", code));
keyUpPluck$.subscribe((code) => console.log("pluck: ", code));
keyUpMapTo$.subscribe((code) => console.log("mapTo: ", code));
