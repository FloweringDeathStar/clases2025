// Para correr este script en Node:
// node variables.js

// Inicializar un proyecto Node:
// npm init -y

// Instalar paquetes:
// npm install nombre_paquete


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TIPOS DE VARIABLES EN JAVASCRIPT

// 1) var
// - Scope: global o de función (NO de bloque)
// - Se puede reasignar
// - Se puede declarar sin inicializar
// - Tiene hoisting (se eleva la declaración, pero no la inicialización)

// 2) let
// - Scope: de bloque
// - Se puede reasignar
// - Se puede declarar sin inicializar
// - No se hoisting (o más bien, existe en TDZ: zona muerta temporal)

// 3) const
// - Scope: de bloque
// - No se puede reasignar
// - Debe inicializarse en la declaración
// - No se hoisting (también entra en TDZ)
// - OJO: si es un objeto o array, sus *propiedades* sí pueden cambiar


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TIPOS DE DATOS BÁSICOS EN JAVASCRIPT

// string
// Representa texto compuesto por caracteres Unicode, encerrado entre comillas.

// number
// Representa valores numéricos, incluyendo enteros, decimales, NaN e Infinity.

// boolean
// Representa un valor lógico verdadero (true) o falso (false).

// undefined
// Indica que una variable ha sido declarada pero no tiene un valor asignado.

// null
// Representa la ausencia intencional de un valor; se asigna deliberadamente.

// symbol
// Valor único e inmutable, comúnmente usado como clave privada en objetos.

// bigint
// Representa números enteros extremadamente grandes que exceden el límite del tipo number.

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Otros tipos estructurados (no primitivos):

// weakset
// Similar a Set, pero solo almacena objetos y no evita que el garbage collector los elimine. No es iterable.

// weakmap
// Similar a Map, pero las claves deben ser objetos y permite su eliminación automática por garbage collector. No es iterable.

// date
// Objeto para manejar fechas y tiempos con métodos para obtener y modificar componentes temporales.

// regexp
// Objeto que representa expresiones regulares para búsquedas y patrones de texto.

// error
// Objeto para representar errores en tiempo de ejecución, base para errores como TypeError, ReferenceError, etc.

// arraybuffer
// Representa un bloque de memoria binaria cruda de tamaño fijo; se usa para manejar datos binarios.

// typedarray
// Vistas tipadas sobre ArrayBuffer (Int8Array, Uint16Array, Float32Array, etc.) para operar con datos binarios.

// dataview
// Vista flexible de lectura/escritura sobre un ArrayBuffer, permitiendo manejar distintos tipos de datos.

// promise
// Representa una operación asincrónica que puede completarse con éxito o fracasar en el futuro.

// proxy
// Objeto que intercepta y redefine operaciones realizadas sobre otro objeto (get, set, etc.).

// reflect
// Objeto con métodos estáticos para realizar operaciones sobre objetos de forma controlada y segura; complementa a Proxy.

// mapIterator / setIterator / arrayIterator
// Objetos iteradores creados por métodos como .entries(), .keys() y .values() para recorrer colecciones.

// generator
// Objeto retornado por funciones generadoras, que implementa un iterador con pausa y reanudación del flujo.

// asyncGenerator
// Variación del generador que permite operaciones asincrónicas en cada yield.

// finalizationRegistry
// Permite ejecutar lógica cuando un objeto es recolectado por el garbage collector.

// weakref
// Referencia débil a un objeto que no evita que sea recolectado por el garbage collector.
