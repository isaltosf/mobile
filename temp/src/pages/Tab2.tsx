import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ListTodo, BarChart3, Settings, Menu, Trophy, Flame, Target, Calendar, TrendingUp } from 'lucide-react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateToTab = (path: string) => {
    history.push(path);
  };

  const currentTab = location.pathname;

  return (
    <div className="habits-container">
      {/* Header */}
      <div className="header">
        <button className="menu-button">
          <Menu size={24} />
        </button>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginRight: '48px' }}>
          <h1 className="title" style={{ margin: 0 }}>Estadísticas</h1>
        </div>
      </div>

      <div className="main-content">
        <p className="section-subtitle">Tu progreso en detalle</p>

        {/* Summary Cards Grid */}
        <div className="stats-grid">
          {/* Card 1: Racha Actual */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Flame size={20} className="stat-icon theme-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">7 días</span>
              <span className="stat-label">Racha actual</span>
            </div>
          </div>

          {/* Card 2: Tasa de éxito */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Target size={20} className="stat-icon green-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">78%</span>
              <span className="stat-label">Tasa de éxito</span>
            </div>
          </div>

          {/* Card 3: Días activos */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Calendar size={20} className="stat-icon theme-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">23</span>
              <span className="stat-label">Días activos</span>
            </div>
          </div>

          {/* Card 4: Mejor racha */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <TrendingUp size={20} className="stat-icon purple-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">14 días</span>
              <span className="stat-label">Mejor racha</span>
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="chart-section">
          <h3 className="section-title">Hábitos completados esta semana</h3>
          <div className="bar-chart-container">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, index) => {
              const heights = [40, 60, 25, 60, 40, 15, 25]; // Mock data
              return (
                <div key={day} className="bar-column">
                  <div className="bar-bg">
                    <div
                      className="bar-fill"
                      style={{ height: `${heights[index]}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="chart-section">
          <h3 className="section-title">Tendencia mensual</h3>
          <div className="line-chart-container">
            <svg viewBox="0 0 300 100" className="line-chart-svg">
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="#27272a" strokeWidth="1" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="#27272a" strokeWidth="1" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="#27272a" strokeWidth="1" />

              {/* The Line - Using a moderate curve */}
              <path
                d="M0,80 C50,75 100,50 150,48 S250,55 300,58"
                fill="none"
                stroke="#818cf8"
                strokeWidth="2"
              />

              {/* Points */}
              <circle cx="0" cy="80" r="3" fill="#818cf8" />
              <circle cx="150" cy="48" r="3" fill="#818cf8" />
              <circle cx="230" cy="52" r="3" fill="#818cf8" />
              <circle cx="300" cy="58" r="3" fill="#818cf8" />
            </svg>
            <div className="chart-x-labels">
              <span>S2</span>
              <span>S3</span>
              <span>S4</span>
            </div>
          </div>
        </div>

        {/* Spacer for bottom nav */}
        <div style={{ height: '100px' }}></div>
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
            onClick={() => navigateToTab('/logros')}
            className={`nav-button ${currentTab === '/logros' ? 'active' : ''}`}
          >
            <Trophy
              size={24}
              color={currentTab === '/logros' ? '#818cf8' : '#71717a'}
            />
            <span>Logros</span>
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
