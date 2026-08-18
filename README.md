# Conversor de Monedas (CLP)

Este proyecto es una aplicación web funcional que permite convertir montos de Pesos Chilenos (CLP) a otras monedas (Dólar y Euro) en tiempo real, utilizando la API de [mindicador.cl](https://mindicador.cl/).

## Previsualización de la Aplicación

[![GitHub Pages Status](https://img.shields.io/badge/deploy-en%20vivo-brightgreen?style=flat-square&logo=github)](https://jleival.github.io/prueba-conversor-de-monedas/)


## 🚀 Enlace Directo
Puedes probar la aplicación haciendo clic en el siguiente enlace:
👉 **[Ver Conversor en Vivo](https://jleival.github.io/prueba-conversor-de-monedas/)**

## 🚀 Características
*   **Conversión en tiempo real:** Obtención de tipos de cambio actualizados mediante peticiones asíncronas a la API.
*   **Validación de entrada:** Restricción en el campo de entrada para evitar montos negativos o notación científica no deseada.
*   **Interfaz intuitiva:** Diseño simple y enfocado en la experiencia de usuario.
*   **Manejo de errores:** Captura y registro de errores de conexión o de datos.

## 🛠 Tecnologías Utilizadas
*   **HTML5:** Estructura semántica del documento.
*   **CSS3:** Estilos básicos para la presentación.
*   **JavaScript (ES6+):** Lógica asíncrona (`async/await`, `fetch`) y manipulación del DOM.

## 📦 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/jleival/prueba-conversor-de-monedas
    ```
2.  **Abrir el proyecto:**
    No se requiere un servidor de compilación complejo. Puedes abrir el archivo `index.html` directamente en tu navegador o usar una extensión como *Live Server* en VS Code para recarga automática.

## 💻 Uso
1.  Ingresa el monto en CLP que deseas convertir en el campo numérico.
2.  Selecciona la moneda destino (Dólar o Euro) en el menú desplegable.
3.  Haz clic en el botón **"Buscar"**.
4.  El resultado aparecerá automáticamente en la parte inferior de la pantalla.

## ⚙️ Estructura del Proyecto
*   `index.html`: Estructura principal de la aplicación.
*   `assets/js/app.js`: Lógica principal, consumo de API y actualización del DOM.
*   `assets/css/styles.css` (Opcional): Estilos personalizados.

## 📄 Licencia
Este proyecto es de código abierto. Siéntete libre de utilizarlo y modificarlo para tus necesidades personales.
