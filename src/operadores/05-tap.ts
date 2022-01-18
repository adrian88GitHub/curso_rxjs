import { map, range } from "rxjs";
import { tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((val) => console.log("antes: ", val)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("despues: ", val),
      complete: () => console.log("se terminó todo"),
    })
  )
  .subscribe((val) => console.log("subs: ", val));
