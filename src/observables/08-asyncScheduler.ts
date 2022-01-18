import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 2000);
// setInterval(()=>{}, 1000);

const saludar = () => {
  console.log("hola mundo");
};

const saludar2 = (nombre) => {
  console.log(`hola ${nombre}`);
};

// asyncScheduler.schedule(saludar, 2000);

// asyncScheduler.schedule(saludar2, 2000, "Adrian");

const subs = asyncScheduler.schedule(
  function (valor) {
    console.log(valor);
    this.schedule(valor + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
