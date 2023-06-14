import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = (props: any) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Sidebar />
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
