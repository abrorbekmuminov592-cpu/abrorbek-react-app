import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="portfolio">
      <h1>Salom, men Abrorbekman!</h1>
      <p className="subtitle">Bu mening React-dagi birinchi professional saytim.</p>
      
      <div className="info-card">
        <h3>Men haqimda:</h3>
        <ul>
          <li>🚀 Kelajakda kuchli dasturchi bo'laman</li>
          <li>💻 React va JavaScript o'rganyapman</li>
          <li>🌍 Saytim butun dunyoga ko'rinyapti!</li>
        </ul>
      </div>

      <div className="counter-section">
        <button onClick={() => setCount((count) => count + 1)}>
          Saytimga {count} marta qarsak chalindi 👏
        </button>
      </div>
    </div>
  )
}

export default App