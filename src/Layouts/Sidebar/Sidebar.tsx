import { connect, useDispatch } from 'react-redux';
import store from '../../Services/store';
import { AppNavigationService } from './appNavigationService';
import { useState } from 'react';
import { Layout } from '../Layout';
import './Sidebar.css';
import { deleteTokenFromCookie } from '../../Helpers/AuthenticationHelper';
export const UPDATE = 'UPDATE';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const setSidebar = () => {
        dispatch({
            type: UPDATE,
            payload: !store.getState().sidebar.isOpen,
        });
        console.log(store.getState().sidebar.isOpen);
    };

    const menuService = new AppNavigationService();
    const [menu] = useState(menuService.getSidebar());
    return (
        <div className="sidebar">
            {store.getState().sidebar.isOpen &&
                menu.items.map((menuItem: any, key: any) => (
                    <div className="rows" style={{ height: 'auto' }}>
                        {menuItem.name}
                    </div>
                ))}
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    deleteTokenFromCookie();
                }}
            >
                Log Out
            </button>
        </div>
    );
};
const mapStateToProps = (state: any) => {
    return {
        sidebar: state.sidebar.isOpen,
    };
};

export default connect(mapStateToProps)(Layout);
