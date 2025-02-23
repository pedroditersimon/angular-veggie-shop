# Observables en Angular

Los Observables son una herramienta esencial en Angular para manejar flujos de datos de manera reactiva. Permiten la comunicación entre componentes y servicios, facilitando el manejo de eventos, programación asíncrona y múltiples valores.

## Conceptos Básicos

Los Observables se basan en el patrón **Observer**, donde un objeto (`subject`) mantiene una lista de dependientes (`observers`) y les notifica automáticamente cuando ocurren cambios.  
Esto permite que los componentes reaccionen a cambios en los datos sin necesidad de verificaciones manuales.

Un Observable es un canal para emitir valores, pero no los almacena. Es como anunciar un dato en voz alta, y quien lo escucha decide cómo manejarlo y almacenarlo.

Este concepto se compone de dos partes principales

- **Publisher**: Crea el Observable y emite valores.
- **Observer**: Se suscribe al Observable y recibe los valores emitidos.

// TODO: Hacer un diagrama y ponerlo acá

## Uso de Observables

Como publisher, creas un `Observable` y defines una **funcion de subscripcion**. Esta función es la que se ejecutará cuando alguien se subscriba.

```typescript
import { Observable, Observer } from "rxjs";

// Función de suscripción
const subscriberFunction = (observer: Observer<string>) => {
  observer.next("Primer valor"); // Emitimos valores
  observer.next("Segundo valor");
  observer.complete(); // Completamos
};

// Creamos el Observable
const miObservable = new Observable<string>(subscriberFunction);
```

Como observer, para recibir notificiaones necesitas subscribirte llamando al metodo `.subscribe()` del Observable.  
Luego necesitas pasar una funcion (denominada `observer`) para manejar y decidir que hacer con los valores que se emitiran.

```typescript
miObservable.subscribe((valor) => {
  console.log("Recibido:", valor);
});
```

El Observable ejecuta la función de suscripción y emite todos los valores a cada nuevo suscriptor.  
Los Observables no hacen nada hasta que alguien se suscribe y no pueden emitir valores fuera de la función de suscripción.

## Tipos de Observables

### Subject

Un `Subject` es un tipo especial de Observable que permite emitir valores después de su creación. A diferencia de un Observable normal, un `Subject` tiene un método `.next()` que puedes usar para emitir valores manualmente.  
Además, este tipo de Observable no requiere una función de subscripcion.

```typescript
import { Subject } from "rxjs";

const miSubject = new Subject();

miSubject.subscribe((valor) => console.log("Recibido:", valor));

miSubject.next("Mensaje después de la creación");
```

> **Nota**  
> Un Subject solo envía valores a los suscriptores activos en ese momento.  
> Si alguien se suscribe después, no recibirá los valores anteriores.

### BehaviorSubject

Un `BehaviorSubject` es similar a un `Subject`, pero siempre tiene un valor inicial y emite el último valor a cualquier nuevo suscriptor. Ideal para mantener un estado actualizado.

```typescript
import { BehaviorSubject } from "rxjs";

const miBehaviorSubject = new BehaviorSubject("Valor inicial");

// --- primera subscripcion ---
miBehaviorSubject.subscribe((valor) => console.log("Recibido:", valor));

// emitimos un valor
miBehaviorSubject.next("Nuevo valor");

// Salida
// Recibido: Valor inicial
// Recibido: Nuevo valor

// --- nueva subscripcion ---
miBehaviorSubject.subscribe((valor) => console.log("Recibido:", valor));

// Salida
// Recibido: Nuevo valor
```

### ReplaySubject

Un `ReplaySubject` almacena y emite todos los valores anteriores a los nuevos suscriptores. Puedes configurar cuántos valores almacenar.

```typescript
import { ReplaySubject } from "rxjs";

// Almacena los 2 ultimos valores
const miReplaySubject = new ReplaySubject(2);

miReplaySubject.next("Valor 1");
miReplaySubject.next("Valor 2");
miReplaySubject.next("Valor 3");

miReplaySubject.subscribe((valor) => console.log("Recibido:", valor));

// Salida
// Recibido: Valor 2
// Recibido: Valor 3
```

## Cancelar suscripción

La función `.subscribe()` devuelve un objeto `Subscription`.  
Este objeto contiene el método `.unsubscribe()`, que te permite cancelar la suscripción y dejar de recibir notificaciones.

```typescript
import { Subscription } from "rxjs";

export class EjemploComponent {
  miSubscription: Subscription;

  ngOnInit() {
    this.miSubscription = miObservable.subscribe(...);
  }

  ngOnDestroy() {
    this.miSubscription.unsubscribe();
  }
}
```

Siempre cancela las suscripciones para evitar memory leaks.

## Tipos de Notificaciones

Un Observable puede enviar tres tipos de notificaciones:

- **next**: (obligatorio) Maneja cada valor emitido.
- **error**: (opcional) Maneja errores.
- **complete**: (opcional) Maneja la notificación de finalización.

En el metodo de subscripcion puedes pasar (en ese orden) la funcion que los manejará

```typescript
myObservable.subscribe(
  (x) => console.log("Observer got a next value: " + x), // next
  (err) => console.error("Observer got an error: " + err), // error
  () => console.log("Observer got a complete notification") // complete
);
```

> **Nota**  
> Cuando un Observable se completa (`observer.complete()`), ya no puede emitir más valores.  
> Esto incluye todos los tipos de Observable (`Observable`, `Subject`, `BehaviorSubject`, `ReplaySubject`, etc.).

## Función pipe()

Permite aplicar operadores a los valores emitidos por un Observable.  
Se usa para procesar los valores antes de que lleguen a los suscriptores.

// TODO: Hacer un diagrama y ponerlo acá

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

## Convención de Nombres

Es común usar el signo de dólar (`$`) al final de las variables que son `Observables`, asi distinguirlos de valores estáticos.

```typescript
// Sin $: Puede confundirse con un valor simple
cart: Array<CartItemType>;

// Con $: Claramente indica que es un Observable
cart$: Observable<Array<CartItemType>>;
```

## Observables Simples

Puedes usar los metodos `of` y `from` para crear Observables de una manera rapida y simple.

`of(item1, item2, ...)`: Devuelve un Observable que emite los valores proporcionados como argumentos de manera síncrona.

`from(iterable)`: Convierte un iterable en un Observable. Se usa comúnmente para crear un Observable a partir de un array u otros objetos iterables.

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
