# Mantener componentes actualizados en Angular

Formas para Mantener el estado de los componentes actualizado en angular.

## 1. getters y metodos

### getters (la mejor)

```typescript
export class CartPanelComponent {
  // getter
  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  constructor(private cartService: CartService) {}
}
```

```js
<span class="price">${{ totalPrice }}</span>
```

mantienes los nombres como variables, sencillos y comodos.

### Metodos

```typescript
export class CartPanelComponent {
  constructor(private cartService: CartService) {}

  // metodo
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
```

```js
<span class="price">${{ getTotalPrice() }}</span>
```

mantienes los nombres como funciones, añadiendo la accion (get) y ademas los parentesis en cada uso que le des en tu template.

## 4. Observables

## 5. Usar el servicio directamtne (la peor)

Debes hacer publica la variable inyectada de tu servicio, lo cual rompe la encapsulacion de tu componetne.

```typescript
export class CartPanelComponent {
  constructor(public cartService: CartService) {}
}
```

La sintaxis se vuelve mas larga y engorosa de leer.

```js
<span class="price">${{ cartService.getTotalPrice() }}</span>
```
