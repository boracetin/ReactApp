import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = (props: any) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col" style={{ marginTop: '2%' }}>
                            <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ marginTop: '3%' }}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
