import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, Zap, CheckCircle2, Star, Target, Crown, Medal, ListTodo, BarChart3, Settings, Menu } from 'lucide-react';
import './Logros.css';

interface Achievement {
    id: string;
    title: string;
    description: string;
    progress: number;
    total: number;
    icon: React.ReactNode;
}

const Logros: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const achievements: Achievement[] = [
        {
            id: '1',
            title: 'Primera Racha',
            description: 'Completa 7 días seguidos',
            progress: 7,
            total: 7,
            icon: <Flame size={24} />
        },
        {
            id: '2',
            title: 'Estrella Naciente',
            description: 'Completa todos los hábitos',
            progress: 1,
            total: 1,
            icon: <Star size={24} />
        },
        {
            id: '3',
            title: 'Imparable',
            description: 'Racha de 14 días',
            progress: 7,
            total: 14,
            icon: <Zap size={24} />
        },
        {
            id: '4',
            title: 'Francotirador',
            description: '90% éxito semanal',
            progress: 45,
            total: 50,
            icon: <Target size={24} />
        },
        {
            id: '5',
            title: 'Mes Perfecto',
            description: 'Un mes sin fallar',
            progress: 20,
            total: 30,
            icon: <CalendarIcon size={24} />
        },
        {
            id: '6',
            title: 'Maestro',
            description: 'Hábito por 60 días',
            progress: 20,
            total: 60,
            icon: <Crown size={24} />
        },
        {
            id: '7',
            title: 'Coleccionista',
            description: 'Desbloquea 5 logros',
            progress: 2,
            total: 5,
            icon: <Medal size={24} />
        },
        {
            id: '8',
            title: 'Leyenda',
            description: 'Racha de 100 días',
            progress: 7,
            total: 100,
            icon: <Trophy size={24} />
        }
    ];

    /* Helper for custom icon */
    function CalendarIcon({ size }: { size: number }) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        );
    }

    const unlockedCount = achievements.filter(a => a.progress >= a.total).length;

    const navigateToTab = (path: string) => {
        history.push(path);
    };

    const currentTab = location.pathname;

    return (
        <div className="logros-page">
            {/* Header - Matches Tab1 */}
            <div className="header">
                <button className="menu-button">
                    <Menu size={24} />
                </button>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginRight: '48px' }}>
                    {/* Title centered? Tab1 has space-between. Let's check Tab1 structure again. 
                        Tab1: <div className="header"> <button menu>... <div date-selector>... <button add>... 
                        Wait, Tab1 Header is: 
                        <div className="header">
                            <button className="menu-button"><Menu/></button>
                            <div className="date-selector">...</div>
                            <button className="add-button"><Plus/></button>
                        </div>
                        
                        The user images show "Estadísticas" text next to the menu button, or just "Estadísticas".
                        Uploaded image 1 (Hoy) has: Menu Button | "Hoy" (Centered-ish?)
                        Uploaded image 0 (Estadísticas) has: Menu Button | "Estadísticas"
                        Let's use a standard header structure: Menu Button | Title | Spacer/Empty
                     */}
                    <h1 className="title" style={{ margin: 0 }}>Logros</h1>
                </div>
            </div>

            {/* Content */}
            <div className="logros-content">
                <div className="logros-banner">
                    <div className="banner-icon">
                        <Trophy size={32} color="#fff" />
                    </div>
                    <div className="banner-text">
                        <h2>{unlockedCount} / {achievements.length}</h2>
                        <p>Logros Desbloqueados</p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="logros-grid">
                    {achievements.map((achievement) => {
                        const isUnlocked = achievement.progress >= achievement.total;
                        return (
                            <div key={achievement.id} className={`logros-card ${isUnlocked ? 'unlocked-card' : ''}`}>
                                <div className="card-top">
                                    <div className={`card-icon ${isUnlocked ? 'icon-unlocked' : ''}`}>
                                        {achievement.icon}
                                    </div>
                                    {isUnlocked && <CheckCircle2 size={16} className="check-badge" />}
                                </div>

                                <h3 className="card-title">{achievement.title}</h3>
                                <p className="card-desc">{achievement.description}</p>

                                <div className="card-progress">
                                    <div className="progress-bg">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${Math.min((achievement.progress / achievement.total) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Navigation - Exact Copy from Tab1 */}
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

export default Logros;
