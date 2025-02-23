# Angular Observables

Observables provide support for passing messages in your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.

The observer pattern is a software design pattern in which an object (subject), maintains a list of its dependents (observers), and notifies them automatically of state changes

Los Observable permiten manejar flujos de datos de manera reactiva. Esto significa que tu componente puede "reaccionar" automáticamente a cambios en los datos cuando estso ocurren y sin necesidad de verificar manualmente si han cambiado.

Los Observable son un canal para emitir valores, pero no almacenan ningun valor. Son como decir en voz alta un dato, y el que lo escucha dedice como manejarlo y almacenarlo.

## Como usar los Observables

Dos partes: publiser y observer

As a publisher, you create an Observable instance that defines a subscriber function. This is the function that is executed when a consumer calls the subscribe() method.

```typescript
// Función de subscripcion
subscriberFunction = (observer: Observer<string>) => {
  observer.next("Primer valor"); // Emitimos valores
  observer.next("Segundo valor");
  observer.complete(); // Completamos
};

// Creamos el Observable y usamos la función de subscripcion
miObservable = new Observable<string>(subscriberFunction);
```

As a observer, to begin receiving notifications, you call the subscribe() method of the Observable, passing an observer. This is a JavaScript object that defines the handlers for the notifications you receive.

```typescript
ngOnInit() {
  miObservable.subscribe(valor => {
      console.log('Recibido:', valor);
  });
}
```

El Observable ejecutará la función de subscripcion y emitirá **todos** los valores a cada nuevo subscriptor.  
Los Observables no hacen nada hasta que alguien se suscriba.

## Subject

Un Observable normal no tiene un método `.next()` disponible fuera de su función de subscripcion.
Por lo que no pueden emitir valores luego de su creacion.

Si quieres emitir valores en cualquier momento, necesitas usar un tipo de `Observable` llamado `Subject`, que permite emitir valores después de su creación.

```typescript
miSubject = new Subject();

ngOnInit() {
  miSubject.subscribe(valor => console.log("Recibido:", valor));

  miSubject.next("Mensaje después de la creación");
}
```

Este tipo de Observable no requiere una función de subscripcion.

> **[!] Importante**  
> Un Subject solo envía valores a los suscriptores que estén activos en ese momento.  
> Si alguien se suscribe después de que los valores fueron emitidos, NO recibirá los valores anteriores.

## unsubscribe

The subscribe() call returns a Subscription object that has an unsubscribe() method, which you call to stop receiving notifications.

```typescript
export class EjemploComponent {
  miSubject = new Subject<string>();

  // Variable para guardar la suscripcion
  miSubjectSubscription!: Subscription;

  ngOnInit() {
    // Suscribimos y guardamos la suscripcion
    this.miSubjectSubscription = this.miSubject.subscribe((valor) => {
      console.log("Recibido:", valor);
    });
  }

  ngOnDestroy() {
    // Evitamos memory leaks cancelando la suscripcion
    if (this.miSubjectSubscription) {
      this.miSubjectSubscription.unsubscribe();
    }
  }
}
```

## tipos de notifiaciones de un Observables

callback methods to handle the three types of notifications that an observable can send:

next Required. A handler for each delivered value. Called zero or more times after execution starts.
error Optional. A handler for an error notification. An error halts execution of the observable instance.
complete Optional. A handler for the execution-complete notification. Delayed values can continue to be delivered to the next handler after execution is complete.

```typescript
myObservable.subscribe(
  (x) => console.log("Observer got a next value: " + x), // next
  (err) => console.error("Observer got an error: " + err), // error
  () => console.log("Observer got a complete notification") // complete
);
```

> **[!] Importante**  
> Cuando un Observable se completa (`observer.complete()`), ya no puede emitir más valores.  
> Incluye todos los tipos de Observable (Observable, Subject, BehaviorSubject, ReplaySubject, etc.).

## BehaviorSubject

Es un tipo especial de Observable que mantiene el ultimo valor emitido.  
El BehaviorSubject siempre tiene un valor inicial y emite el último valor a cualquier nuevo suscriptor.
Ideal para comunicar y mantener un estado actualizado entre los compoentnes.

## pipe()

Permite aplicar operadores a los valores emitidos por un Observable.  
Se usa para procesar los valores antes de que lleguen a los suscriptores.

```typescript
const searchBox = document.getElementById("search-box") as HTMLInputElement;

const typeahead = fromEvent(searchBox, "input")
  .pipe(
    // operadores de pipe
    map((e) => (e.target as HTMLInputElement).value),
    filter((text) => text.length > 2),
    debounceTime(10),
    distinctUntilChanged(),
    switchMap((searchTerm) => ajax(`/api/endpoint?search=${searchTerm}`))
  )
  // resultado final
  .subscribe((data) => {
    // Handle the data from the API
  });
```

## Convención al nombrar observables

El uso del signo de dólar ($) al final de los nombres de variables que son Observable es una convención común en la comunidad.

Esto ayuda a distinguir rápidamente entre valores estáticos (como un array o un número) y flujos de datos reactivos (como un Observable).

```typescript
// Sin $: Puede confundirse con un valor simple
cart: Array<CartItemType>;

// Con $: Claramente indica que es un Observable
cart$: Observable<Array<CartItemType>>;
```

es común tener tanto valores estáticos como Observable, el uso de `$` ayuda a diferenciarlos en el codigo.

## Crear Observables Simples

of(item1, item2, ...): Devuelve un Observable que emite los valores proporcionados como argumentos de manera síncrona.

from(iterable): Convierte un iterable en un Observable. Se usa comúnmente para crear un Observable a partir de un array u otros objetos iterables.

Ejemplo usando `of()`

```typescript
import { of } from "rxjs";

const observable = of(1, 2, 3);

observable.subscribe((valor) => console.log("Valor con of:", valor));

// Salida:
// Valor con of: 1
// Valor con of: 2
// Valor con of: 3
```

Ejemplo usando `from()`

```typescript
import { from } from "rxjs";

const array = [4, 5, 6];
const observable = from(array);

observable.subscribe((valor) => console.log("Valor con from:", valor));

// Salida:
// Valor con from: 4
// Valor con from: 5
// Valor con from: 6
```
