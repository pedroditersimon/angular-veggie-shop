# Rutas y Navegación en Angular 16

Documentación sobre cómo funcionan las rutas y la navegación en Angular 16.

## Crear un módulo para las rutas

Para configurar las rutas en Angular, primero debemos crear un módulo dedicado a la gestión de rutas.  
Este módulo se encargará de proveer y configurar las rutas de la aplicación.

```javascript
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Crear un array de routes

El array de tipo `Routes` contiene la información de cada ruta, incluyendo el componente que debe renderizarse y otras propiedades adicionales.

```javascript
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Home", // El título debe ser único
  },
];
```

Evita el uso de `/` al inicio de las rutas, Angular interpreta las rutas que comienzan con `/` como rutas absolutas. Usa rutas relativas para mantener la consistencia.

El título de cada ruta debe ser único para facilitar la identificación en el historial de navegación.

## Importar AppRoutingModule en tu módulo principal

Para que las rutas funcionen, es necesario importar el módulo de rutas (`AppRoutingModule`) en el módulo principal de la aplicación (`AppModule`).

```javascript
@NgModule({
  imports: [
    BrowserModule, AppRoutingModule
  ],
})
export class AppModule { }
```

## Redirección (Redirect)

Para redirigir a una ruta específica cuando se accede a una ruta, puedes usar la propiedad redirectTo.

```javascript
const routes: Routes = [
  {
    path: "",
    title: "my-redirect",
    redirectTo: "home",
    pathMatch: "full", // Asegura que la ruta vacía coincida completamente
  },
];
```

La propiedad `pathMatch: "full"` asegura que la redirección solo ocurra cuando la ruta coincida completamente con el path.

## Wildcard (\*\*)

Se utiliza para manejar rutas no definidas, como páginas de error 404. Es importante colocarla al final del array de rutas, ya que Angular evalúa las rutas en orden y utiliza la primera que coincida.

```javascript
const routes: Routes = [
  {
    path: "**",
    title: "not found",
    component: NotFoundPageComponent,
  },
];
```

## Router Outlet

El componente `<router-outlet>` es donde se renderizan los componentes asociados a las rutas.  
Asegúrate de importar `RouterModule` en el módulo correspondiente.

```html
<app-navbar></app-navbar>

<!-- Los componentes de las rutas se renderizan aquí -->
<router-outlet></router-outlet>
```

Fijate que si añadimos elementos fuera de el, estos permaneceran aunque la ruta cambie. Solo el contenido dentro de `<router-outlet>` se actualiza y renderiza la ruta.

## routerLink

Para navegar entre rutas usando enlaces, utiliza la directiva `routerLink`.  
Asegúrate de importar `RouterModule` en el módulo correspondiente.

```html
<a routerLink="/shop">Comprar ahora</a>
```

Debe comenzar con un slash o puedes hacerlo relativo con `./`.

**routerLinkActive:**
La propiedad `routerLinkActive` añade una clase CSS al enlace cuando la ruta definida en `routerLink` esta activa.

```html
<a routerLink="/shop" routerLinkActive="activebutton">Comprar ahora</a>
```

La clase definida en esta caso es `activebutton`, pero puedes usar la que quieras. Y luego, puedes añadir estilos a esa clase.

```css
.activebutton {
  color: blue;
}
```

## Parámetros de ruta (Route Parameters)

Para definir rutas con parámetros, utiliza la sintaxis `:parametro`.

```javascript
const routes: Routes = [
  {
    path: "shop/:id",
    component: ShopItemComponent,
    title: "Shop item",
  },
];
```

Luego, extrae el parámetro en el componente usando `ActivatedRoute`.

```javascript
import { ActivatedRoute } from '@angular/router';

export class ShopItemComponent {
  // extraemos el parametro
  itemId = this.route.snapshot.paramMap.get('id');

  // injección de la dependencia 'ActivatedRoute' por constructor
  constructor(private route: ActivatedRoute) { }
}
```

## Rutas con query params

Los query params no requieren configuración adicional en las rutas y puedes extraerlos directamente desde la URL.

```javascript
import { ActivatedRoute } from '@angular/router';

export class ShopItemComponent {
  itemId = this.route.snapshot.queryParams['id'];

  constructor(private route: ActivatedRoute) { }
}
```

## Input Binding

Angular 16 permite enlazar parámetros de ruta directamente a propiedades del componente usando `@Input()`. Para habilitar esta funcionalidad, configura el módulo de rutas con `withComponentInputBinding()`.

```javascript
import { provideRouter, withComponentInputBinding } from '@angular/router';

@NgModule({
  providers: [provideRouter(routes, withComponentInputBinding())],
})
```

Luego simplemente usa `@Input()` con el nombre exacto de del parametro, el valor se asignara automaticamente.

Algo a tener en cuenta es que con este metodo, el parametro no será asignado todavia en el constructor, por lo que debes acceder luego de este, por ejemplo, en el metodo `ngOnInit`.

```javascript
export class ShopItemComponent {
  @Input() id = "";

  constructor() {
    console.log(this.id); // Todavia no se ha asignado
  }

  ngOnInit(): void {
    console.log(this.id); // Ya se ha asignado
  }
}
```

Tambien puedes pasar el nombre del parametro a la funcion `@Input("parametro")` y asi nombrar la variable como quieras.

```javascript
@Input("id") itemId = "";
```

Para mejorar la semantica de estos inputs, puedes importar la funcion `Input` con otros nombres.

```javascript
import {
  Input as RouteParam, // Para parametros /page/:id
  Input as RouteQueryParam, // Para queryParams /page/:id?name=home
} from "@angular/core";

export class PageComponent {
  @RouteParam() id: string = "";
  @RouteQueryParam() name: string = "";
}
```

## Navegación simple

Para navegar mediante código, utiliza el método `navigate` del servicio `Router`.  
La función toma un array, donde el primer argumento es la ruta donde se quiere ir.

```javascript
import { Router } from '@angular/router';

export class ShopItemComponent {
  // DI de 'Router' por constructor
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/shop']);
  }
}
```

De la misma forma que lo hacemos en `routerLink`, si queremos pasar un valor como ruta por ejemplo `/shop/5`, podemos hacerlo en el segundo parametro.

```javascript
this.router.navigate(["/shop", 5]);
```

## Navegación con query params

De la misma forma que hariamos una navegacion simple, añadimos un objeto con una clave `queryParams` donde pasaremos los parametros que queremos añadir a la ruta.

```javascript
this.router.navigate(["/shop"], { queryParams: { id: 0, myParam: "my parameter" } });
```

## Route Data

Puedes utilizar los `Route Data` para configurar las rutas. Esta informacion es estatica y NO puede cambiarse.

```javascript
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Página de Inicio", requiresAuth: false },
  },
  {
    path: "user",
    component: UserComponent,
    data: { title: "Perfil de usuario", requiresAuth: true },
  },
];
```

Para acceder a estos datos en el componente

```javascript
import { ActivatedRoute } from '@angular/router';

export class HomeComponent {
  pageTitle: string = '';
  requiresAuth: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.pageTitle = this.route.snapshot.data["title"];
    this.requiresAuth = this.route.snapshot.data['requiresAuth'];

    // Alternativa usando observables
    this.route.data.subscribe(data => {
      this.pageTitle = data['title'];
      this.requiresAuth = data['requiresAuth'];
    });
  }
}
```

## Referencias

Reading Route Parameters [dougmbarcellos.medium.com](https://dougmbarcellos.medium.com/angular-16-reading-route-parameters-with-input-in-an-explicit-way-18ade42a9831)  
Angular Routing [v16.angular.io/guide](https://v16.angular.io/guide/routing-overview)
