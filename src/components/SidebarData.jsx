import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faLink, faProjectDiagram, faSchool, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} color="#2575fc" />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FontAwesomeIcon icon={faProjectDiagram} color="#2575fc" />,
        cName: 'nav-text'
    },
    {
        title: 'Skills & Achievements',
        path: '/skills-and-achievements',
        icon: <FontAwesomeIcon icon={faTrophy} color="#2575fc" />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <FontAwesomeIcon icon={faSchool} color="#2575fc" />,
        cName: 'nav-text'
    },
    {
        title: 'Work Experience',
        path: '/work-exp',
        icon: <FontAwesomeIcon icon={faBriefcase} color="#2575fc" />,
        cName: 'nav-text'
    },
    {
        title: 'Connect',
        path: '/connect',
        icon: <FontAwesomeIcon icon={faLink} color="#2575fc" />,
        cName: 'nav-text'
    },
]