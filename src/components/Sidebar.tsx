import { useState } from 'react';
import galvaniLogo from '../assets/galvani.svg';
import flowLogo from '../assets/flowLogoPreto.jpg';
import './Sidebar-new.css';

interface SidebarProps {
  activeMenu?: string;
  onMenuClick?: (menu: string) => void;
}

const menuItems = [
  'Capa',
  'Desafios Macros',
  'Habilidades Desejadas',
  'Perfil Atual x Desejado',
  'Plano Estratégico de Desenvolvimento da Liderança',
  'Arquitetura do Programa',
  'Adaptações por Nível',
  'Módulos Específicos: Angico dos Dias',
  'Módulos Específicos: Luís Eduardo Magalhães (LEM)',
  'Módulos Específicos: Irecê',
  'Módulos Específicos: São Paulo (Corporativo)',
  'Sustentação e Governança',
  'Métricas e Avaliação',
  'Roadmap de Implementação',
  'Ações Transversais',
  'Ações Específicas por Unidade',
  'Checkpoints e Ajustes'
];

export function Sidebar({ activeMenu = 'Capa', onMenuClick }: SidebarProps) {
  const [currentActive, setCurrentActive] = useState(activeMenu);

  const handleMenuClick = (menu: string) => {
    setCurrentActive(menu);
    onMenuClick?.(menu);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={galvaniLogo} alt="Galvani Logo" />
      </div>
      
      <nav className="sidebar-nav">
        <div className="sidebar-menu-title">SUMÁRIO</div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item} className="sidebar-menu-item">
              <button
                className={`sidebar-menu-button ${
                  currentActive === item ? 'active' : ''
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <span className="powered-by">Powered by:</span>
        <img src={flowLogo} alt="Flow Logo" className="flow-logo" />
      </div>
    </aside>
  );
}
