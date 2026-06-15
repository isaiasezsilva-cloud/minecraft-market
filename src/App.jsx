import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [productos, setProductos] = useState([])
  const [filtro, setFiltro] = useState('todos')
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('./productos.json')
      .then(res => res.json())
      .then(data => {
        setProductos(data.productos)
        setCargando(false)
      })
      .catch(err => {
        console.error('Error al cargar productos:', err)
        setCargando(false)
      })
  }, [])

  const productosFiltrados = filtro === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtro)

  return (
    <div className="minecraft-market">
      <header className="header">
        <div className="header-content">
          <h1 className="titulo">
            <span className="titulo-icon">⬛</span>
            MinecraftMarket
            <span className="titulo-icon">⬛</span>
          </h1>
          <p className="subtitle">El mercado de la aldea - Productos épicos para aventureros</p>
        </div>
      </header>

      <nav className="filtros">
        <button 
          className={filtro === 'todos' ? 'activo' : ''}
          onClick={() => setFiltro('todos')}
        >
          📦 Todos
        </button>
        <button 
          className={filtro === 'armamento' ? 'activo' : ''}
          onClick={() => setFiltro('armamento')}
        >
          ⚔️ Armamento
        </button>
        <button 
          className={filtro === 'comida' ? 'activo' : ''}
          onClick={() => setFiltro('comida')}
        >
          🍎 Comida
        </button>
        <button 
          className={filtro === 'objetos' ? 'activo' : ''}
          onClick={() => setFiltro('objetos')}
        >
          💎 Objetos
        </button>
      </nav>

      <main className="contenido">
        {cargando ? (
          <div className="cargando">
            <div className="loading-diamond">💎</div>
            <p>Cargando productos de la aldea...</p>
          </div>
        ) : (
          <>
            <div className="info-registro">
              <h3>📋 Estructura del Registro (Producto)</h3>
              <div className="registro-esquema">
                <code>
                  RegProducto = REGISTRO<br/>
                  &nbsp;&nbsp;id : ALFA(20) &nbsp;&nbsp;// ← CAMPO CLAVE<br/>
                  &nbsp;&nbsp;nombre : ALFA(50)<br/>
                  &nbsp;&nbsp;precio : real<br/>
                  &nbsp;&nbsp;stock : entero<br/>
                  &nbsp;&nbsp;material : ALFA(30)<br/>
                  &nbsp;&nbsp;descripcion : ALFA(200)<br/>
                  &nbsp;&nbsp;categoria : ALFA(15)<br/>
                  &nbsp;&nbsp;calificacion : entero (1-5)<br/>
                  &nbsp;&nbsp;imagen : ALFA(100)<br/>
                  &nbsp;&nbsp;resenas : SECUENCIA de RegResena<br/>
                  FIN_REGISTRO
                </code>
              </div>
            </div>

            <div className="grid-productos">
              {productosFiltrados.map(producto => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>🏰 MinecraftMarket - Actividad Formativa N°2 - Algoritmos y Estructuras de Datos 2026</p>
        <p className="footer-note">Temática: Fantasy Shop | Registro con clave: <code>id</code></p>
      </footer>
    </div>
  )
}

function ProductoCard({ producto }) {
  return (
    <article className="producto-card">
      <div className="producto-header">
        <span className="categoria-badge">{producto.categoria}</span>
        <span className="clave-info">ID: {producto.id}</span>
      </div>
      
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <h3 className="producto-nombre">{producto.nombre}</h3>
        <p className="producto-descripcion">{producto.descripcion}</p>
        
        <div className="producto-detalles">
          <div className="detalle">
            <span className="etiqueta">💰 Precio:</span>
            <span className="valor">{producto.precio.toFixed(2)} 🟢</span>
          </div>
          <div className="detalle">
            <span className="etiqueta">📦 Stock:</span>
            <span className="valor">{producto.stock} un.</span>
          </div>
          <div className="detalle">
            <span className="etiqueta">🧱 Material:</span>
            <span className="valor">{producto.material}</span>
          </div>
        </div>

        <div className="calificacion">
          <span className="etiqueta">Calificación:</span>
          <div className="diamantes">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < producto.calificacion ? 'diamante lleno' : 'diamante vacio'}>
                💎
              </span>
            ))}
          </div>
          <span className="calificacion-numero">({producto.calificacion}/5)</span>
        </div>
      </div>

      <Resenas resenas={producto.resenas} />
    </article>
  )
}

function Resenas({ resenas }) {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="resenas-section">
      <button 
        className="btn-resenas"
        onClick={() => setMostrar(!mostrar)}
      >
        {mostrar ? '🔺 Ocultar reseñas' : '🔽 Ver reseñas de aldeanos'}
      </button>
      
      {mostrar && (
        <div className="resenas-list">
          {resenas.map((resena, index) => (
            <div key={index} className="resena-card">
              <div className="aldeano-header">
                <img src={resena.foto} alt={resena.aldeano} className="aldeano-foto" />
                <div className="aldeano-info">
                  <span className="aldeano-nombre">{resena.aldeano}</span>
                  <span className="aldeano-badge">🏠 Aldeano verificado</span>
                </div>
              </div>
              <p className="resena-comentario">"{resena.comentario}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App