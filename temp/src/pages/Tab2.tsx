import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ListTodo, BarChart3, Settings, Menu } from 'lucide-react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const navigateToTab = (path: string) => {
    history.push(path);
  };

  const currentTab = location.pathname;

  return (
    <div className="habits-container">
      {/* Header */}
      <div className="header">
        <button className="menu-button" onClick={() => alert('Menú próximamente')}>
          <Menu size={24} />
        </button>
        <h1 className="title">Estadísticas</h1>
        <div style={{width: '48px'}}></div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="empty-state">
          <div className="icon-container">
            <BarChart3 size={80} color="#6366f1" strokeWidth={1.5} />
          </div>
          <h2 className="empty-title">Próximamente</h2>
          <p className="empty-subtitle">Aquí verás tus estadísticas y progreso</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-container">
          <button 
            onClick={() => navigateToTab('/tab1')}
            className={`nav-button ${currentTab === '/tab1' ? 'active' : ''}`}
          >
            <ListTodo 
              size={24} 
              color={currentTab === '/tab1' ? '#818cf8' : '#71717a'} 
            />
            <span>Hábitos</span>
          </button>

          <button 
            onClick={() => navigateToTab('/tab2')}
            className={`nav-button ${currentTab === '/tab2' ? 'active' : ''}`}
          >
            <BarChart3 
              size={24} 
              color={currentTab === '/tab2' ? '#818cf8' : '#71717a'} 
            />
            <span>Estadísticas</span>
          </button>

          <button 
            onClick={() => navigateToTab('/tab3')}
            className={`nav-button ${currentTab === '/tab3' ? 'active' : ''}`}
          >
            <Settings 
              size={24} 
              color={currentTab === '/tab3' ? '#818cf8' : '#71717a'} 
            />
            <span>Configuración</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
