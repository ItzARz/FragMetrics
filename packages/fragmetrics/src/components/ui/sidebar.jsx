import { HomeIcon, ChartPieIcon, MapIcon, WrenchIcon } from '@heroicons/react/24/solid'

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
                    <div className="sidebar-profile">
                        <img src="./assets/profile-picture.jpg" alt="Profile Photo"  />
                    </div>
                </footer>
            </aside>
            </>
    );
}
