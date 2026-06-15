# Documentación de Entrega - Actividad Formativa N°2

## 👤 Datos del Estudiante

| Campo | Valor |
|---|---|
| **Apellido y Nombre** | [COMPLETAR] |
| **Comisión** | [COMPLETAR] |
| **Año** | 1° |
| **Carrera** | Ingeniería en Sistemas de Información |

---

## 🎮 E-Commerce Elegido

### Nombre: **MinecraftMarket**

### Descripción Breve

MinecraftMarket es una plataforma de e-commerce temática inspirada en el universo de Minecraft, donde los jugadores pueden adquirir productos épicos para sus aventuras. El diseño está ambientado en el mercado de una aldea, con estética pixelada característica del juego y elementos visuales como diamantes para las calificaciones y aldeanos como reseñadores.

**Temática:** Fantasy Shop (Opción 5 de la consigna)

---

## 📋 Diseño del Registro Principal

### Definición Formal (Pseudocódigo)

```
RegProducto = REGISTRO
    id : ALFA(20)           // ← CAMPO CLAVE
    nombre : ALFA(50)
    precio : real
    stock : entero
    material : ALFA(30)
    descripcion : ALFA(200)
    categoria : ALFA(15)
    calificacion : entero   // 1-5
    imagen : ALFA(100)
    resenas : SECUENCIA de RegResena
FIN_REGISTRO

RegResena = REGISTRO
    aldeano : ALFA(30)
    foto : ALFA(100)
    comentario : ALFA(150)
FIN_REGISTRO
```

### Campos del Registro

| Campo | Tipo | Tamaño | Descripción |
|---|---|---|---|
| `id` | ALFA | 20 | Identificador único del producto (CLAVE) |
| `nombre` | ALFA | 50 | Nombre comercial del producto |
| `precio` | real | - | Precio en esmeraldas (moneda Minecraft) |
| `stock` | entero | - | Cantidad de unidades disponibles |
| `material` | ALFA | 30 | Material principal de fabricación |
| `descripcion` | ALFA | 200 | Descripción detallada del producto |
| `categoria` | ALFA | 15 | Categoría: armamento, comida, objetos |
| `calificacion` | entero | 1-5 | Calificación en diamantes |
| `imagen` | ALFA | 100 | URL de la imagen del producto |
| `resenas` | SECUENCIA | - | Lista de reseñas de aldeanos |

---

## 🔑 Identificación y Explicación de la Clave

### Campo Clave Seleccionado: `id`

### Características Técnicas

| Característica | Valor |
|---|---|
| **Nombre del campo** | `id` |
| **Tipo de dato** | ALFA(20) |
| **Formato** | `CATEGORIA_NOMBRE_NUMERO` |
| **Ejemplo** | `ESPADA_DIAMANTE_001` |

### Clasificación de la Clave

#### Por su Formato: **SIMPLE**
- Está formada por un único campo contenido (`id`)
- No requiere combinación de múltiples campos para identificar el registro

#### Por su Función: **PRIMARIA**
- Identifica de manera única y unívoca cada producto
- No hay dos registros con el mismo `id` en la secuencia
- Permite diferenciar un registro de todos los demás

### Justificación de la Elección

> *"Se eligió el campo `id` como clave primaria porque cumple con los requisitos fundamentales de un campo clave según la teoría de la cátedra:*
> 
> 1. **Unicidad**: Cada producto tiene un identificador que lo diferencia de todos los demás. Por ejemplo, `ESPADA_DIAMANTE_001` es único para esa espada específica.
> 
> 2. **Inmutabilidad**: El id no cambia durante el ciclo de vida del producto en el sistema.
> 
> 3. **Formato significativo**: La estructura `CATEGORIA_NOMBRE_NUMERO` permite identificar visualmente a qué categoría pertenece el producto y su número de secuencia.
> 
> 4. **Acceso eficiente**: Permite búsquedas rápidas y actualizaciones precisas de registros individuales.
> 
> *Alternativas consideradas:*
> - *El `nombre` no es adecuado porque podría haber productos con nombres similares.*
> - *Una clave compuesta (ej: `categoria + nombre`) sería más compleja de gestionar innecesariamente.*
> 
> *Por lo tanto, `id` es la opción óptima como clave primaria simple."*

---

## 📦 Productos Cargados (8 registros)

| ID | Nombre | Categoría | Precio | Stock | Calificación |
|---|---|---|---|---|---|
| ESPADA_DIAMANTE_001 | Espada de Diamante Encantada | armamento | 24.99 | 15 | ⭐⭐⭐⭐⭐ |
| ARCO_HIERRO_002 | Arco de Hierro Reforzado | armamento | 18.50 | 22 | ⭐⭐⭐⭐ |
| MANZANA_DORADA_003 | Manzana Dorada Encantada | comida | 45.00 | 8 | ⭐⭐⭐⭐⭐ |
| POCION_FUERZA_004 | Poción de Fuerza III | comida | 12.75 | 30 | ⭐⭐⭐⭐ |
| PICO_DIAMANTE_005 | Pico de Diamante Eficiente | objetos | 28.00 | 12 | ⭐⭐⭐⭐⭐ |
| ARMADURA_HIERRO_006 | Armadura Completa de Hierro | armamento | 35.50 | 10 | ⭐⭐⭐⭐ |
| PERLA_ENDER_007 | Perla de Ender (Pack x16) | objetos | 52.00 | 5 | ⭐⭐⭐⭐⭐ |
| TNT_EXPLOSIVA_008 | TNT Dinamita (Pack x10) | objetos | 15.99 | 25 | ⭐⭐⭐⭐ |

---

## 🌐 URL de la App Publicada

**GitHub Pages:** [COMPLETAR CON LA URL LUEGO DEL DEPLOY]

### Instrucciones para Publicar

1. Crear un repositorio en GitHub con el nombre deseado (ej: `minecraft-market`)
2. Subir todos los archivos del proyecto al repositorio
3. Ejecutar en la terminal:
   ```bash
   npm run deploy
   ```
4. La app estará disponible en: `https://[usuario].github.io/[repositorio]/`

---

## 🤖 Prompts Utilizados con IA

### Prompt Principal

```
Necesito que me diseñes un Ecommerce que yo pueda vincular a github para luego 
colocarlo en github pages, que tenga las siguientes características teniendo en 
cuenta las consignas de la Actividad Formativa N°2:

La temática debe ser de Productos, elementos y objetos relacionados, ambientados 
y tematizados en base a MINECRAFT, de manera tal que si soy un usuario pueda ver 
la interfaz inicial con productos a la venta relacionados al juego (armamento, 
comida, objetos), cada objeto o producto (registro) deberá tener una clave y 
características como su precio, stock disponible, material, breve descripción y 
categoría a la que pertenece, cada producto debe tener una calificación yendo de 
1 a 5 diamantes, y debe tener dentro de las opiniones o reseñas, dos usuarios 
aleatorios (aldeanos) con foto de perfil, con un breve comentario sobre el 
producto a la venta.

Debe estar hecho con React (JSX) y vite, HTML y CSS estándar, no instales 
bibliotecas ni dependencias de terceros de componentes ni axios. Para los datos 
haz un fetch nativo a un archivo JSON local guardado en la carpeta public usando 
rutas relativas tipo (./productos.json).

Mi idea visual es que esté ambientado en el mercado de una aldea, donde se 
puedan identificar los registros de cada producto con cada campo y campo clave, 
no es necesario que añadas muchos productos, a lo máximo 8 o 10.
```

### Prompts Adicionales (ajustes y mejoras)

```
Agregá más productos al JSON manteniendo la misma estructura de registro.
```

```
Modificá los estilos CSS para que los diamantes de calificación tengan un 
efecto de brillo cuando están completos.
```

---

## 💭 Reflexión sobre el Uso de IA

La Inteligencia Artificial fue una herramienta fundamental en el desarrollo de este proyecto, actuando como un asistente de programación que aceleró significativamente el proceso de creación. A continuación, detallo los aspectos más relevantes:

**Aspectos Positivos:**
- La IA generó rápidamente la estructura base del proyecto React+Vite, ahorrando tiempo en configuración inicial.
- Sugirió la organización de componentes (App, ProductoCard, Resenas) de manera modular y coherente.
- Proporcionó ejemplos de código CSS con animaciones y efectos visuales que enriquecieron la interfaz.
- Ayudó a estructurar el archivo JSON con los registros de productos manteniendo consistencia en los campos.

**Limitaciones y Ajustes Manuales:**
- Fue necesario validar manualmente que el diseño del registro cumpliera con los conceptos teóricos de la cátedra (heterogeneidad, campo clave único, tipos de datos).
- Los estilos CSS requirieron ajustes finos para lograr la estética pixelada auténtica de Minecraft.
- La justificación de la clave como campo primario simple requirió comprensión conceptual que solo el estudiante puede aportar basándose en el material teórico.
- La conexión con GitHub Pages debe ser realizada manualmente por el usuario ya que requiere autenticación.

**Conclusión:**
La IA funcionó como un "par programador" que asistió en la implementación técnica, pero el diseño conceptual, la validación teórica y la toma de decisiones sobre la estructura del registro dependieron completamente del análisis humano fundamentado en los apuntes de la cátedra. Esto demuestra que la IA es una herramienta complementaria que potencia la productividad, pero no reemplaza la comprensión profunda de los conceptos de algoritmos y estructuras de datos.

---

## ✅ Checklist de Entrega

| Requisito | Estado |
|---|---|
| Nombre y descripción del e-commerce | ✅ Completado |
| Diseño del registro principal | ✅ Completado |
| Identificación y explicación de la clave | ✅ Completado |
| Captura de prompts utilizados con IA | ✅ Completado |
| Video demo de la app | ⏳ Pendiente (grabar) |
| App e-commerce con URL publicada | ⏳ Pendiente (deploy) |
| Reflexión sobre el uso de IA | ✅ Completado |

---

**Fecha de Entrega:** [COMPLETAR]  
**Universidad Tecnológica Nacional - Facultad Regional Resistencia**  
Algoritmos y Estructuras de Datos - ISI 2026