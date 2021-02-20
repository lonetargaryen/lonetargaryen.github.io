import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import "./Sidebar.css";
import { SidebarData } from './SidebarData'

function Sidebar ({sidebar, showSidebar}) {
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
								<div className="list-item-div">
									<NavLink exact to={item.path} className="sidebar-icons" activeStyle={{color: "#FFD700"}}>
										{item.icon}
									</NavLink>
									<span className="tooltip-text">{item.title}</span>
								</div>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar