# Curso Básico de TDD (Test-Driven Development)

Bienvenidos al curso básico de TDD. En este curso aprenderás los fundamentos del desarrollo basado en pruebas y cómo aplicarlo para escribir código más confiable y de alta calidad.

## Tabla de Contenidos

1. [¿Qué es TDD?](#qué-es-tdd)
2. [Ciclo de TDD](#ciclo-de-tdd)
3. [Escribir una prueba](#escribir-una-prueba)
4. [Refactorización](#refactorización)
5. [Ventajas de TDD](#ventajas-de-tdd)
6. [Herramientas para TDD](#herramientas-para-tdd)
7. [Buenas Prácticas en TDD](#buenas-prácticas-en-tdd)

---

## ¿Qué es TDD?

TDD (Test-Driven Development) es una técnica de desarrollo de software en la que primero se escriben pruebas antes de escribir el código de producción. El ciclo básico de TDD se repite de forma iterativa: escribir una prueba, escribir el código necesario para que pase la prueba, y luego refactorizar el código.

El propósito de TDD es mejorar la calidad del código, asegurar que el código esté probado desde el inicio y facilitar la refactorización sin romper funcionalidades existentes.

---

## Ciclo de TDD

El ciclo de TDD consta de tres fases principales:

1. **Red**: Escribe una prueba que falle. Esta prueba describe una parte del comportamiento esperado del código que aún no se ha implementado.
2. **Green**: Escribe el código necesario para hacer que la prueba pase.
3. **Refactor**: Refactoriza el código de producción y de prueba para mejorar la calidad, sin cambiar su comportamiento.

Este ciclo se repite continuamente durante el desarrollo del software.

---

## Escribir una prueba

La clave de TDD es comenzar con pruebas. Aquí te mostramos cómo escribir una prueba simple.

Supón que necesitas implementar una función que suma dos números. Primero, escribes una prueba que falle:

```javascript
// test.js
function testSum() {
  const result = sum(2, 3);
  if (result !== 5) {
    throw new Error('Test failed!');
  }
}

testSum();
En este caso, el código aún no tiene la función sum(). La prueba fallará porque sum() no está definida.

// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

Y modificamos nuestra prueba para usar el código correcto:

// test.js
const sum = require('./sum');

function testSum() {
  const result = sum(2, 3);
  if (result !== 5) {
    throw new Error('Test failed!');
  }
}

testSum();

Refactorización
Una vez que el código pasa las pruebas, es momento de refactorizar. La refactorización es el proceso de mejorar el diseño del código sin cambiar su funcionalidad. En el ejemplo de la función sum(), podría no ser necesario refactorizar ya que el código es muy simple, pero en proyectos más grandes, este paso es crucial.

Ventajas de TDD
Al adoptar TDD en tu proceso de desarrollo, obtendrás varias ventajas:

Código más confiable: Las pruebas aseguran que tu código se comporta como se espera.
Mejor diseño de código: TDD te obliga a escribir código modular y fácil de probar.
Facilidad para refactorizar: Con pruebas automatizadas, puedes refactorizar el código con confianza, sabiendo que las pruebas asegurarán que no se rompa nada.
Documentación viva: Las pruebas sirven como documentación del comportamiento esperado del código.


Herramientas para TDD
Existen muchas herramientas que facilitan el uso de TDD en diferentes lenguajes de programación. Algunas de las más populares incluyen:

Jest: Una herramienta de pruebas para JavaScript.
Mocha: Un marco de pruebas para JavaScript.
JUnit: Una biblioteca de pruebas para Java.
RSpec: Una herramienta de pruebas para Ruby.
JUnit y Hamcrest: Para Java en el contexto de pruebas unitarias.
Cada herramienta proporciona funciones para crear pruebas, ejecutarlas y verificar los resultados.

Buenas Prácticas en TDD
Para aprovechar al máximo TDD, ten en cuenta las siguientes buenas prácticas:

Escribe pruebas pequeñas y específicas: Asegúrate de que cada prueba tenga un único propósito.
Mantén el ciclo rápido: Haz que las pruebas sean pequeñas para que el ciclo de TDD sea rápido y eficiente.
Evita escribir pruebas antes de tiempo: Solo escribe pruebas para funcionalidades que realmente vayas a implementar.
Refactoriza a menudo: No dejes que el código se acumule sin refactorizarlo.
No te obsesiones con la cobertura al 100%: El objetivo es escribir pruebas que validen las funcionalidades clave, no cubrir cada línea de código.

Conclusión
TDD es una técnica poderosa para mejorar la calidad y el diseño de tu código. Aunque puede parecer un poco desafiante al principio, con la práctica, se convertirá en una parte integral de tu flujo de trabajo y mejorará significativamente tus habilidades de desarrollo.

Recuerda siempre seguir el ciclo de TDD: Red, Green, Refactor. ¡Sigue practicando y mejorando tu proceso de desarrollo con pruebas!

