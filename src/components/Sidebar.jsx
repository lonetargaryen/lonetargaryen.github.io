import { Link } from 'react-router-dom';

import "./Sidebar.css";
import { SidebarData } from './SidebarData'

function Sidebar () {
	// const navTitles = ["Home", "Projects", "Skills & Achievements", "Education", "Work Experience", "Connect"];

	return (
		<div className="sidebar">
			<nav className="nav-menu">
				<ul className="nav-menu-items">
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