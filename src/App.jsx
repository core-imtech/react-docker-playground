import AppRoutes from './routes/indexRoutes.jsx'

function App() {
  return <AppRoutes />
}

export default App

/**
 * Notes:
 * App.js — host routing, nothing else
 * App tidak tahu detail route. Dia cuma manggil definisinya.
 * 
 * Kalau App mulai ada logic auth, layout, dsb → itu tanda arsitektur lu bocor.
 */