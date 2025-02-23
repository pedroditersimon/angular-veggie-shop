# Reactividad de componentes

En Angular, mantener el estado de los componentes actualizado, a la hora de utilizar servicios, es fundamental para construir aplicaciones reactivas y eficientes.  
A continuación, diferentes formas de lograrlo.

## 1. Getters y Métodos

### Getters (mejor opción)

Los `getters` son una forma limpia y eficiente de obtener datos desde un servicio. Al utilizarlos, puedes tratar las propiedades como valores en lugar de métodos, lo que simplifica su uso en las plantillas.

Componente

```typescript
export class CartPanelComponent {
  // Getter para obtener el precio total
  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  constructor(private cartService: CartService) {}
}
```

Template (plantilla)

```js
<span class="price">${{ totalPrice }}</span>
```

Es sencillo, fácil de leer y no necesitas llamar a una función en la plantilla, lo que mejora la legibilidad.

### Métodos

Utilizar métodos para obtener datos.

Componente

```typescript
export class CartPanelComponent {
  constructor(private cartService: CartService) {}

  // Método para obtener el precio total
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
```

Template

```js
<span class="price">${{ getTotalPrice() }}</span>
```

Esta opcion requiere llamar a la función en la plantilla, lo que puede hacer el código menos intuitivo.
Tanto en la plantilla como en el componente debes nombrar funciones, añadiendo la accion (get) y los parentesis en cada uso que le des.

## 4. Observables

Los `Observables` son ideales para manejar estados que cambian con el tiempo.  
Idealmente utilizando el tipo `BehaviorSubject`, puedes notificar a los componentes cuando los datos se actualizan.

En el servicio, creas un observable para notificar cambios

```typescript
export class CartService {
  cart: Array<VegetableType> = [];

  // Observable para notificar cambios en el carrito
  cart$ = new BehaviorSubject<Array<VegetableType>>(this.cart);

  // Enviar la notificacion de cambio
  updateCart() {
    this.cart$.next(this.cart);
  }

  // Agregar un item al carrito
  addItem(veg: VegetableType) {
    this.cart.push({ ...veg });
    this.updateCart();
  }
}
```

En el componente, te suscribes al observable para reaccionar a los cambios

```typescript
export class CartPanelComponent {
  totalPrice!: number;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  // Suscripción para recibir notificaciones cuando el carrito cambie
  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  // Limpiar la suscripción para evitar fugas de memoria
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
```

Este metodo es ideal para estados dinámicos que cambian con frecuencia ya que fomenta un flujo de datos reactivo y eficiente.  
Sin embargo, es más complejo de implementar, ya que requiere manejar notificaciones/suscripciones y evitar fugas de memoria.

## 5. Usar el servicio directamente (peor opción)

Una opcion posible pero **no recomendada**, es acceder directamente al servicio desde la plantilla.  
Para esto, debes hacer publica la variable inyectada de tu servicio, lo cual rompe la encapsulacion y hace el código menos mantenible.

Componente

```typescript
export class CartPanelComponent {
  constructor(public cartService: CartService) {}
}
```

Template

```js
<span class="price">${{ cartService.getTotalPrice() }}</span>
```

Ademas este metodo, expone el servicio en la plantilla, lo que dificulta la lectura y el mantenimiento. La sintaxis de la plantilla se vuelve más larga y menos clara.

## Conclusion

Cada enfoque tiene sus pros y contras, pero personalmente **recomiendo usar `getters`** por su simplicidad y claridad.

Mi top de mejores metodos:

- **Getters**: Simples y directos, ideales para la mayoría de los casos.
- **Métodos**: Una alternativa funcional, pero menos amigable como lo son los getters.
- **Observables**: Extremadamente poderosos para aplicaciones con flujos de datos complejos.
- **Servicio en plantilla**: Evítalo para mantener un código limpio y encapsulado.

La elección dependerá de las necesidades de tu aplicación y la que mejor se adapte a tus requerimientos. ¡Buena suerte! 🚀
