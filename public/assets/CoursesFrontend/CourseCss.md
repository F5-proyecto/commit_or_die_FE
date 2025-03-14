# Curso Básico de CSS

Bienvenidos al curso básico de CSS. Aquí aprenderás los fundamentos del diseño y estilo en páginas web utilizando CSS.

## Tabla de Contenidos

1. [¿Qué es CSS?](#qué-es-css)
2. [Sintaxis Básica](#sintaxis-básica)
3. [Selectores](#selectores)
4. [Propiedades Comunes](#propiedades-comunes)
5. [Modelos de Caja](#modelos-de-caja)
6. [Flexbox](#flexbox)
7. [Grid](#grid)
8. [Media Queries](#media-queries)

---

## ¿Qué es CSS?

CSS (Cascading Style Sheets) es un lenguaje utilizado para definir la presentación de un documento HTML. Con CSS, puedes controlar la apariencia de tu página web, como colores, márgenes, fuentes y disposición de los elementos.

---

## Sintaxis Básica

La sintaxis básica de CSS está formada por **selectores**, **propiedades** y **valores**.

```css
selector {
  propiedad: valor;
}
Selector de tipo: Selecciona elementos por su nombre de etiqueta.
p {
  font-size: 16px;
}
Selector de clase: Selecciona elementos con una clase específica.
.mi-clase {
  background-color: #f0f0f0;
}
Selector de ID: Selecciona un único elemento con un ID específico.
#mi-id {
  padding: 20px;
}

Propiedades Comunes
Algunas propiedades que puedes usar con CSS incluyen:

color: Define el color del texto.
background-color: Define el color de fondo.
font-family: Define la fuente del texto.
font-size: Define el tamaño de la fuente.
margin: Define el espacio alrededor de un elemento.
padding: Define el espacio dentro de un elemento.

Ejemplo:
div {
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
Flexbox
Flexbox es un sistema de diseño que permite alinear y distribuir espacio entre los elementos dentro de un contenedor.

Ejemplo básico de Flexbox:
.container {
  display: flex;
  justify-content: space-between;
}
Este código coloca los elementos dentro del contenedor .container de manera flexible, distribuyendo el espacio de forma uniforme entre ellos.

Grid
CSS Grid es un sistema de diseño basado en una cuadrícula bidimensional. Puedes definir filas y columnas para organizar los elementos de manera precisa.

Ejemplo básico de Grid:
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
Este código crea un contenedor con tres columnas de igual ancho, separadas por un espacio de 10 píxeles.

Media Queries
Las media queries permiten aplicar estilos dependiendo de las características del dispositivo, como el tamaño de la pantalla.

Ejemplo de media query para pantallas pequeñas:


@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}
Este código cambia el diseño de la cuadrícula para mostrar una sola columna en pantallas con un ancho máximo de 600px.


