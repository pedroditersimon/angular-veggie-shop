# VeggieShop

Proyecto de práctica sobre una tienda de vegetales, construido con Angular v16 🚀.

Esta aplicación permite navegar entre diferentes vistas de productos,
agregar artículos al carrito, cambiar entre temas, y realizar compras
enviando los detalles por WhatsApp.

## Instalación

Para correr este proyecto localmente en tu máquina, sigue estos pasos:

1. Necesitas Angular CLI `v16.2.16`. Si no lo tienes instalado, puedes hacerlo con el siguiente comando:

   ```bash
   npm install -g @angular/cli@16.2.16
   ```

2. Clona el repositorio:

   ```bash
   git clone https://github.com/pedroditersimon/angular-veggie-shop.git
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Corre el servidor de desarrollo:

   ```bash
   ng serve
   ```

   O con npm:

   ```bash
   npm start
   ```

5. Accede a `http://localhost:4200` para ver la aplicación.

## Features y conceptos

Lista de features y conceptos aplicados en este proyecto:

- Navegación: Rutas, redirecciones, rutas no definidas, parámetros y query params.
- RouterData: Para el hint de home.
- Servicios.
- Inyección de dependencias (DI): @Injectable y providers para inyectar servicios.
- Componentes Standalone.
- Reactividad de componentes por medio de getters.
- Temas: Variedad de temas con un selector.
- Mobile responsive.
- Mensajes Toast.
- Variables de entorno: Leer variables de sistema y `.env`.
- Mensajes por WhatsApp: Apertura de enlaces de chat de WhatsApp con el contenido del carrito.

## TODO

Lista de tareas pendientes y completadas del proyecto.

<details>
  <summary>Click para expandir!</summary>

- [x] Hacer vista Home
- [x] Hacer vista Shop
- [x] Usar componentes standalone
- [x] Agregar un layout para las paginas
- [x] Organizar el proyecto en carpetas
- [x] Agregar servicio de vegetales
- [x] Hacer vista de detalles de un vegetal en /shop/:id
- [x] Agregar aspect-ratio para evitar salto de carga en las imagenes
- [x] Agregar servicio de carrito
- [x] Agregar indicadores de cantidad en carrito
- [x] Mover el indicador de cantidad a una esquina de la imagen del item
- [x] Agregar vista de carrito
- [x] La vista carrito no se actualiza cuando los datos cambian
- [x] Temas claro y oscuro
- [x] Selector de temas en navbar
- [x] Estilizar scrollbar
- [x] Generar las opciones del selector de tema en base a `ThemeTypes`
- [x] Las interfaces quitarles sufijos 'type'
- [x] Añadir mobile responsive
- [x] Utilizar el dinamic viewport para mobile
- [x] Aumentar tamaños del carrito para mobile
- [x] Enviar listado de carrito por whatsapp
- [x] Configurar .env y variables de entorno
- [x] Añadir Toasts para mostrar mensajes al usuario
- [x] Formatear un buen mensaje de carrito para whatsapp
- [x] Añadir en este README una lista de las features y conceptos aplicados en el proyecto
- [x] Crear pagina con la lista de features y conceptos aplicados en el proyecto
- [ ] Aplicar temas al toast
- [ ] Agregar un favicon
- [ ] Al boton de "Mira mi github" ponerle mi foto de perfil
</details>

## Docs

Investigaciones de los temas y conceptos aplicados en este proyecto:

- [Rutas y Navegación en Angular 16](./docs/Rutas%20y%20Navegacion.md)

- [Servicios y DI en Angular 16](./docs/Servicios%20y%20DI.md)

- [Reactividad de componentes](./docs/Reactividad%20de%20componentes.md)

- [Observables](./docs/Observables.md)
