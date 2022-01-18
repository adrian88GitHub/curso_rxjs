import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tempus lorem pulvinar accumsan. Suspendisse eu libero blandit, ultricies leo porta, molestie libero. Ut eu cursus nisi, in imperdiet orci. Nullam viverra justo vitae erat rhoncus bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam elit quam, lobortis eget convallis ac, accumsan interdum ante. Integer imperdiet lorem sit amet tincidunt gravida. Mauris et accumsan enim. Aenean urna neque, rutrum vel felis eu, tincidunt placerat quam. Curabitur non nisi ut mauris luctus aliquam. Cras nec justo vel quam rutrum placerat nec vitae diam. Morbi egestas odio non mollis tempor.
<br/><br/>
Vestibulum auctor congue justo, nec tincidunt velit. Mauris venenatis dignissim quam quis aliquam. Aenean eros felis, egestas nec sapien at, pretium blandit metus. Donec at arcu feugiat, blandit risus sit amet, commodo mauris. Donec mattis erat imperdiet urna convallis, ac venenatis elit bibendum. Phasellus lacinia non magna eget malesuada. Vivamus risus eros, scelerisque id risus id, lacinia pretium purus. Maecenas sapien justo, semper et sagittis nec, bibendum sit amet ligula. Maecenas ligula sem, laoreet quis vestibulum ac, lobortis eget est. Vestibulum sed faucibus sem. Suspendisse nec iaculis est. Pellentesque risus magna, lobortis tincidunt nulla congue, bibendum luctus augue.
<br/><br/>
Proin ac tempor leo, a vehicula nisi. Maecenas elementum elit lectus, quis ultrices velit condimentum non. Sed vel euismod lacus. Etiam eget rutrum ipsum. Proin orci sem, semper a ullamcorper vitae, aliquam non ipsum. Praesent sed ullamcorper magna, quis hendrerit massa. Mauris tristique nulla leo, eu semper elit efficitur non. Fusce tellus quam, placerat nec ex nec, suscipit finibus tortor. Nunc bibendum elementum velit nec euismod. Ut bibendum massa in felis interdum mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc leo, mollis id venenatis ac, gravida sed mauris. Curabitur feugiat eu elit vitae viverra.
<br/><br/>
Praesent hendrerit semper arcu non placerat. Mauris interdum nec tellus a laoreet. Pellentesque eu tortor hendrerit, pellentesque erat id, facilisis neque. Nam ligula neque, consequat vel dolor et, lobortis vestibulum nisi. Sed tristique laoreet augue, eget aliquam justo auctor et. Cras eros ex, ullamcorper pellentesque erat nec, faucibus pulvinar turpis. Fusce semper quam ipsum, eget feugiat nulla tincidunt a. Proin metus nulla, ornare eu eleifend ut, laoreet at nulla. Nam sagittis congue odio eget sodales. Nunc hendrerit, lectus eget sagittis fringilla, erat metus cursus tortor, et tempor erat odio et ex. Quisque porta finibus nulla, ut hendrerit sem luctus non. Cras sed viverra eros. Nullam fringilla nisi sit amet vulputate hendrerit.
<br/><br/>
Quisque lacinia libero nec mi pulvinar finibus. Etiam vehicula diam viverra tellus ultrices faucibus. Cras et nisi nibh. Nam condimentum commodo orci. Donec in nulla eros. Ut enim purus, auctor quis nunc a, maximus efficitur tortor. Vestibulum rhoncus aliquet efficitur. In eget justo dictum, lobortis nisi ac, gravida nisi. Sed pharetra mauris id est lacinia ullamcorper. Morbi non pharetra augue.
`;
const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams

const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe(
  (porcentaje) => (progressBar.style.width = `${porcentaje}%`)
);
