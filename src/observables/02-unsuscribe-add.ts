import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const interval$ = new Observable((suscriber) => {
  // Crear un contador 1,2,3,4,5,...
  let count = 0;
  const interval = setInterval(() => {
    count++;
    suscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    suscriber.complete();
  }, 2500);
  return () => {
    clearTimeout(interval);
    console.log("Intérvalo destruido");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);
subs2.add(subs3);
setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log("Completado timeout");
}, 3000);
