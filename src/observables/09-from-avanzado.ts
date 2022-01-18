import { from, of } from "rxjs";

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (const iterator of miIterable) {
//   console.log(iterator);
// }

from(miIterable).subscribe(observer);

// const source$= of(...[1,2,3,4,5]);
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from("adrian");
const source$ = from(fetch("https://api.github.com/users/klerith"));

// source$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });
