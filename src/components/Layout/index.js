import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className ='page'>
            <span className = 'tags top-tags'>
            &lt;conn = connect (host ="localhost", <br />
                port = 000000000,
                <br />
                user = "root",
                <br />
                passwd = "********",
                <br />
                db = "subconcious") &gt;
            </span>

            <Outlet />

            <span className = 'tags bottom-tags'>
            </span>
            <span className ='developer'>
                @ Bu web sitesi -/Erdogan Atas/- tarafından geliştirilmiştir ! @
            </span>
            
        </div>
    </div>
    )
}
export default Layout