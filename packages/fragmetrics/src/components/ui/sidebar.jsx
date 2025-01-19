import { HomeIcon, ChartPieIcon, MapIcon, WrenchIcon, ArrowRightEndOnRectangleIcon as LogoutIcon  } from '@heroicons/react/24/solid'

export const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <img src="./assets/logo-short.svg" alt="Fragmetrics" />
                </div>
                <nav className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="#">
                                <HomeIcon className="sidebar-menu-icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ChartPieIcon className="sidebar-menu-icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <WrenchIcon className="sidebar-menu-icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <MapIcon className="sidebar-menu-icon"/>
                            </a>
                        </li>
                    </ul>
                </nav>
                <footer className="sidebar-footer">
                    <a href="/logout">
                        <LogoutIcon className="sidebar-menu-icon"/>
                    </a>
                </footer>
            </aside>
            </>
    );
}
