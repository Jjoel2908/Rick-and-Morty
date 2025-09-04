# Rick & Morty App

### Descripción del proyecto

Esta aplicación móvil está desarrollada en **React Native (JavaScript)** y consume la API de **Rick and Morty** usando GraphQL.  
Permite a los usuarios explorar personajes, marcarlos como favoritos y mantener sus datos accesibles incluso sin conexión a internet.

### Funcionalidades principales

- 🔗 **Listado de personajes** con nombre, género, estado e imagen.  
- ❤️ **Favoritos**: máximo 5, con reordenamiento mediante drag & drop y persistencia.  
- 📦 **Offline First**: persistencia de favoritos y último listado de personajes para uso sin internet.  
- 🎨 Interfaz moderna usando **React Native Paper** y **Font Awesome**.  
- 📶 Manejo de estados de carga y error en las solicitudes HTTP.  

### Tecnologías utilizadas

- React Native CLI  
- Apollo Client (GraphQL)  
- Zustand + AsyncStorage  
- React Native Paper (UI)  
- Font Awesome (íconos)  
- Draggable FlatList (drag & drop)

### Decisiones importantes y consideraciones
Inicialmente se planeó desarrollar la aplicación usando TypeScript para aprovechar tipado estático y mayor seguridad en tiempo de desarrollo. Sin embargo, durante la configuración del proyecto se identificó que la coexistencia de múltiples extensiones de VSCode y versiones de dependencias generaba conflictos que interferían con la correcta compilación y ejecución del proyecto. Para asegurar un progreso estable y poder cumplir con los requisitos funcionales de la aplicación, se decidió desarrollar temporalmente en JavaScript. 
