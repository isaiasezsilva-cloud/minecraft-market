# 🚀 Guía Rápida: Publicar en GitHub Pages

## Paso 1: Instalar Git (si no lo tenés)

1. Descargá Git desde: https://git-scm.com/download/win
2. Instalalo con las opciones por defecto
3. Reiniciá la terminal

## Paso 2: Configurar Git por primera vez

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## Paso 3: Inicializar el repositorio

```bash
cd "D:\Users\Isaías Silva\Desktop\UTN\1ER AÑO\Algoritmos y Estructuras de Base de Datos\Pseudocódigo material\minecraft-market"
git init
git add .
git commit -m "Initial commit - MinecraftMarket"
```

## Paso 4: Crear repositorio en GitHub

1. Andá a https://github.com/new
2. Nombre del repositorio: `minecraft-market` (o el que quieras)
3. Dejalo **PÚBLICO** (necesario para GitHub Pages)
4. **NO** marques "Initialize this repository with a README"
5. Hacé clic en "Create repository"

## Paso 5: Vincular y subir

```bash
# Reemplaza [TU_USUARIO] con tu usuario de GitHub
git remote add origin https://github.com/[TU_USUARIO]/minecraft-market.git

# Subí el código
git branch -M main
git push -u origin main
```

## Paso 6: Publicar en GitHub Pages

### Opción A: Usando el script npm (recomendada)

```bash
npm run deploy
```

Esto va a:
1. Crear el build de producción
2. Subirlo a la rama `gh-pages`
3. Publicarlo automáticamente

### Opción B: Manual desde GitHub

1. Andá a Settings del repositorio en GitHub
2. Hacé clic en "Pages" (menú izquierdo)
3. En "Source" elegí: `Deploy from a branch`
4. Branch: `gh-pages` (después de hacer `npm run deploy`)
5. Hacé clic en Save

## Paso 7: Obtener la URL

Después del deploy, tu app estará disponible en:

```
https://[TU_USUARIO].github.io/minecraft-market/
```

Por ejemplo: `https://juanperez.github.io/minecraft-market/`

## Paso 8: Actualizar la entrega

1. Copiá la URL de tu app publicada
2. Pegala en el archivo `ENTREGA.md` donde dice `[COMPLETAR CON LA URL LUEGO DEL DEPLOY]`
3. Actualizá el README.md también si querés

## 🎥 Grabar el Video Demo

Usá cualquier grabador de pantalla (OBS, Loom, o el de Windows con `Win + Alt + R`):

1. Mostrá la URL de la app
2. Navegá por los productos
3. Mostrá las reseñas de los aldeanos
4. Explicá brevemente el registro y la clave
5. Guardá el video y adjuntalo en la entrega

## ✅ Verificación Final

Antes de entregar, verificá:

- [ ] La app carga correctamente en GitHub Pages
- [ ] Se ven los 8 productos con sus imágenes
- [ ] Los filtros por categoría funcionan
- [ ] Las reseñas de aldeanos se muestran al hacer clic
- [ ] El diseño es responsive (probá en móvil)
- [ ] El archivo `ENTREGA.md` está completo con tu nombre y comisión

---

**¡Listo! Ya tenés tu e-commerce de Minecraft publicado.** 🎮💎