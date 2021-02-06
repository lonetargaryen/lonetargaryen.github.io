import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import "./Sidebar.css";
import { SidebarData } from './SidebarData'
import { useState } from 'react';

function Sidebar () {
	// const navTitles = ["Home", "Projects", "Skills & Achievements", "Work Experience", "Connect"];
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div className="mega-sidebar">
			<div className="sidebar">
				<Link to="#" className={sidebar ? "menu-bars" : "menu-bars active"}>
					<FontAwesomeIcon icon={faBars} onClick={showSidebar} />
				</Link>
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#">
							<FontAwesomeIcon icon={faTimes} />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									{/* <span>{item.title}</span> */}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar