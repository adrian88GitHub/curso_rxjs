import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

console.log("Inicio del Obs$");

// signature deprecated
// obs$.subscribe(
//   (next) => console.log("next: ", next),
//   null,
//   () => console.log("terminanos la secuencia")
// );

obs$.subscribe({
  next: (next) => console.log("next: ", next),
  error: null,
  complete: () => console.log("terminanos la secuencia"),
});

console.log("Fin del Obs$");
