import { useState, useEffect } from 'react'
import productosData from '../public/productos.json'
import './App.css'

function App() {
  const [productos, setProductos] = useState([])
  const [filtro, setFiltro] = useState('todos')
  const [cargando, setCargando] = useState(true)
  const [carrito, setCarrito] = useState([])
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const [distancia, setDistancia] = useState(100)
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false)

  useEffect(() => {
    setProductos(productosData.productos)
    setCargando(false)
  }, [])

  const productosFiltrados = filtro === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtro)

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(item => item.id === producto.id)
    if (existente) {
      setCarrito(carrito.map(item => 
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const removerDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId))
  }

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removerDelCarrito(productoId)
      return
    }
    setCarrito(carrito.map(item =>
      item.id === productoId
        ? { ...item, cantidad: nuevaCantidad }
        : item
    ))
  }

  const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
  
  // Cálculo de envío: 0.01 esmeraldas por bloque de distancia
  // Mínimo 5 esmeraldas, máximo 50 esmeraldas
  const costoEnvio = Math.min(Math.max(distancia * 0.01, 5), 50)
  const total = subtotal + costoEnvio

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0)

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
        <button 
          className="btn-carrito-header"
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
        >
          🛒 Carrito ({totalItems})
        </button>
      </header>

      {mostrarCarrito && (
        <div className="carrito-overlay" onClick={() => setMostrarCarrito(false)}>
          <div className="carrito-modal" onClick={e => e.stopPropagation()}>
            <button className="btn-cerrar" onClick={() => setMostrarCarrito(false)}>×</button>
            <h2>🛒 Tu Carrito</h2>
            
            {carrito.length === 0 ? (
              <p className="carrito-vacio">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="carrito-items">
                  {carrito.map(item => (
                    <div key={item.id} className="carrito-item">
                      <img src={item.imagen} alt={item.nombre} />
                      <div className="carrito-info">
                        <h4>{item.nombre}</h4>
                        <p>{item.precio.toFixed(2)} 🟢 x {item.cantidad}</p>
                      </div>
                      <div className="carrito-controles">
                        <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                        <span>{item.cantidad}</span>
                        <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                      </div>
                      <button 
                        className="btn-remover"
                        onClick={() => removerDelCarrito(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                <div className="calculadora-envio">
                  <button 
                    className="btn-calculadora"
                    onClick={() => setMostrarCalculadora(!mostrarCalculadora)}
                  >
                    {mostrarCalculadora ? '🔺 Ocultar calculadora' : '📍 Calcular envío'}
                  </button>
                  
                  {mostrarCalculadora && (
                    <div className="calculadora-contenido">
                      <label>
                        📏 Distancia desde la aldea (en bloques):
                        <input 
                          type="number" 
                          value={distancia}
                          onChange={(e) => setDistancia(Math.max(1, parseInt(e.target.value) || 1))}
                          min="1"
                        />
                      </label>
                      <p className="formula-info">
                        Fórmula: <code>costo = distancia × 0.01</code> (mín: 5🟢, máx: 50🟢)
                      </p>
                    </div>
                  )}
                </div>

                <div className="carrito-totales">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>{subtotal.toFixed(2)} 🟢</span>
                  </div>
                  <div className="total-row">
                    <span>Envío ({distancia} bloques):</span>
                    <span>{costoEnvio.toFixed(2)} 🟢</span>
                  </div>
                  <div className="total-row total-final">
                    <span>Total:</span>
                    <span>{total.toFixed(2)} 🟢</span>
                  </div>
                </div>

                <button className="btn-checkout" onClick={() => alert('¡Gracias por tu compra! Los aldeanos están preparando tu pedido.')}>
                  ✅ Finalizar Compra
                </button>
              </>
            )}
          </div>
        </div>
      )}

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
                <ProductoCard 
                  key={producto.id} 
                  producto={producto} 
                  onAgregar={agregarAlCarrito}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>🏰 MinecraftMarket - Actividad Formativa N°2 - Algoritmos y Estructuras de Datos 2026</p>
        <p className="footer-note">Temática: Fantasy Shop | Registro con clave: <code>id</code> | Envío: <code>distancia × 0.01</code></p>
      </footer>
    </div>
  )
}

function ProductoCard({ producto, onAgregar }) {
  const [mostrarResenas, setMostrarResenas] = useState(false)

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

        <button 
          className="btn-agregar-carrito"
          onClick={() => onAgregar(producto)}
        >
          🛒 Agregar al carrito
        </button>
      </div>

      <div className="resenas-section">
        <button 
          className="btn-resenas"
          onClick={() => setMostrarResenas(!mostrarResenas)}
        >
          {mostrarResenas ? '🔺 Ocultar reseñas' : '🔽 Ver reseñas de aldeanos'}
        </button>
        
        {mostrarResenas && (
          <div className="resenas-list">
            {producto.resenas.map((resena, index) => (
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
    </article>
  )
}

export default App