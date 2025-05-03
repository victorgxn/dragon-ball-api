# Variables de entorno

NEXT_PUBLIC_DRAGON_BALL_API_URL=https://dragonball-api.com/api

# Docker build

### El docker build esta creado con las recomendaciónes y buenas practicas recomendada directamente por la gente de nextjs.x

- https://nextjs.org/docs/pages/getting-started/deploying#docker-image
- https://nextjs.org/docs/pages/api-reference/config/next-config-js/output

### Pasos a seguir

- Construir la imagen : docker build -t prueba-tecnica-aplitop .
- Levantar la imagen en el puerto 3000: docker container run -dp 3000:3000 prueba-tecnica-aplitop

### Cosas interesantes añadidas o que estarian bien añadir

### Incremental static generation (Posible de añadir)

- Programar no es solo ir del punto A al B, sino tratar de hacerlo de la mejor forma posible (o al menos intentarlo). Creo que usar ISR sería lo ideal para esta app, ya que los datos de la API no cambian tanto. Incluso se podría hacer que el slug de las páginas de los personajes use su nombre en lugar de un ID, qesto además ayudaría bastante con el SEO. En este caso no lo hice así porque en la prueba técnica se pedian otras formas de hacerlo.
- Filtros: La api da bastante facilidad para realizar algo asi.

### (Añadidas)

- Landing page
- Skeleton en la pagina de personaje y personajes para mejorar la experiencia del usuario
- Pagina 404
- Metadata dinamica
- Archivos barril para mejorar los imports

### (Mejorar rendimiento)

- Hice bastante hincapié en dividir la página que muestra la información del personaje en componentes más pequeños, con el objetivo de aislar el uso de "use client". De este modo, evitamos marcar todo el componente como cliente cuando solo es necesario en una o dos secciones específicas. El use client al final deben ser pequeñas ramas o hojas de nuestro arbol de server componentes

### Testing

- https://nextjs.org/docs/app/guides/testing/jest

### Problemas graciosos que me he encontrado

- En la version 15 de nextjs param y searchparams ahora son promesas
  https://nextjs.org/docs/app/guides/upgrading/version-15#asynchronous-page
