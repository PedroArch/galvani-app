import { useState } from 'react'
import { Layout } from './components/Layout'
import { NavigationButtons } from './components/NavigationButtons'
import fotoCapa from './assets/fotocapa.jpg'
import './App.css'

function App() {
  const [activeMenu, setActiveMenu] = useState('Capa')

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu)
    console.log('Menu selecionado:', menu)
  }

  const renderContent = () => {
    if (activeMenu === 'Capa') {
      return (
        <div className="capa-content">
          <h1 className="main-title">Diagnóstico: The Dive</h1>
          <div className="image-container">
            <img src={fotoCapa} alt="Foto Capa" className="capa-image" />
          </div>
          <p className="subtitle">Descoberta de demandas e particularidades reais da liderança</p>
          <NavigationButtons 
            onPrevious={() => console.log('Anterior clicado')}
            onNext={() => console.log('Próximo clicado')}
          />
        </div>
      )
    }
    
    return (
      <div className="app-content">
        <h1>{activeMenu}</h1>
        <p>Conteúdo da seção: {activeMenu}</p>
      </div>
    )
  }

  return (
    <Layout activeMenu={activeMenu} onMenuClick={handleMenuClick}>
      {renderContent()}
    </Layout>
  )
}

export default App
