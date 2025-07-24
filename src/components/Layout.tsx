import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  activeMenu?: string;
  onMenuClick?: (menu: string) => void;
}

export function Layout({ children, activeMenu, onMenuClick }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar activeMenu={activeMenu} onMenuClick={onMenuClick} />
      <main className="layout-content">
        {children}
      </main>
    </div>
  );
}
