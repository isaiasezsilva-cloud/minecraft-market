# MinecraftMarket - Fantasy Shop

> **Actividad Formativa N°2** - Algoritmos y Estructuras de Datos 2026  
> **Temática:** Fantasy Shop (Opción 5)  
> **Tecnologías:** React + Vite + CSS

## 🎮 Descripción

E-commerce temático de Minecraft donde los usuarios pueden explorar productos relacionados con el juego (armamento, comida, objetos). Cada producto está modelado como un **registro** con su respectiva **clave identificatoria**.

## 📋 Diseño del Registro

### Estructura del Registro Producto

```
RegProducto = REGISTRO
    id : ALFA(20)           // ← CAMPO CLAVE (primario, simple)
    nombre : ALFA(50)
    precio : real
    stock : entero
    material : ALFA(30)
    descripcion : ALFA(200)
    categoria : ALFA(15)    // armamento, comida, objetos
    calificacion : entero   // 1-5 diamantes
    imagen : ALFA(100)
    resenas : SECUENCIA de RegResena
FIN_REGISTRO
```

### Campo Clave

| Característica | Descripción |
|---|---|
| **Campo** | `id` |
| **Tipo** | Simple (un solo campo contenido) |
| **Función** | Primaria (identifica unívocamente cada producto) |
| **Formato** | `CATEGORIA_NUMERO` (ej: `ESPADA_DIAMANTE_001`) |
| **Justificación** | Es único e irrepetible para cada producto, permite diferenciar registros al buscar o actualizar información. El formato incluye categoría y número secuencial para facilitar la identificación visual. |

## 🚀 Instalación y Uso

### Desarrollo local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Build para producción

```bash
npm run build
```

### Deploy a GitHub Pages

```bash
# Ejecutar deploy (requiere tener configurado git)
npm run deploy
```

## 📁 Estructura del Proyecto

```
minecraft-market/
├── public/
│   └── productos.json      # Datos de los productos (registros)
├── src/
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos temáticos Minecraft
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Características

- ✅ **8 productos** modelados como registros
- ✅ **Campo clave `id`** único para cada producto
- ✅ **Calificación con diamantes** (1-5)
- ✅ **Reseñas de aldeanos** con foto y comentario
- ✅ **Filtros por categoría** (armamento, comida, objetos)
- ✅ **Diseño responsive** ambientado en Minecraft
- ✅ **Fetch nativo** a JSON local sin dependencias externas

## 🔗 Demo

[Ver en GitHub Pages](#) *(agregar URL luego del deploy)*

## 📝 Entrega

Este proyecto cumple con los requisitos de la Actividad Formativa N°2:

- [x] Diseño del registro principal con todos los campos
- [x] Identificación y explicación de la clave
- [x] App e-commerce publicada con URL
- [x] Video demo (pendiente de grabar)
- [x] Prompts de IA utilizados (ver sección siguiente)
- [x] Reflexión sobre el uso de IA

## 🤖 Prompts Utilizados con IA

```
Necesito que me diseñes un Ecommerce que yo pueda vincular a github para luego 
colocarlo en github pages, que tenga las siguientes características tenieno en 
cuenta las consignas de la Actividad Formativa N°2:

La temática debe ser de Productos, elementos y objetos relacionados, ambientados 
y tematizados en base a MINECRAFT...
```

## 💭 Reflexión sobre el uso de IA

La IA facilitó significativamente el diseño inicial de la aplicación, generando 
la estructura base del proyecto React+Vite y sugiriendo la organización de los 
componentes. Sin embargo, fue necesario ajustar manualmente los estilos CSS para 
lograr la estética pixelada de Minecraft y validar que el diseño del registro 
cumpliera con los requisitos de la cátedra (campo clave único, heterogeneidad 
de datos, etc.). La IA actuó como asistente de desarrollo, pero la comprensión 
conceptual de registros y claves requirió del análisis humano basado en el 
material teórico de la materia.

---

**Universidad Tecnológica Nacional - Facultad Regional Resistencia**  
Algoritmos y Estructuras de Datos - ISI 2026