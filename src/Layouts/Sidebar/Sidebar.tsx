import { connect, useDispatch } from 'react-redux';
import store from '../../Services/store';
import { AppNavigationService } from './appNavigationService';
import { useState } from 'react';
import { Layout } from '../Layout';
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
    const [menu] = useState(menuService.getMenu());
    return (
        <div style={{ height: '100%', width: '30%' }}>
            <h1>SIDEBAR ELEMENT</h1>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    setSidebar();
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {' '}
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 4H21V20H3V4ZM9 6H19V18H9V6Z"
                        fill="currentColor"
                    />{' '}
                </svg>
            </button>

            {store.getState().sidebar.isOpen &&
                menu.items.map((menuItem: any, index: any) => (
                    <div style={{ height: 'auto' }}>{menuItem.name}</div>
                ))}
        </div>
    );
};
const mapStateToProps = (state: any) => {
    return {
        sidebar: state.sidebar.isOpen,
    };
};

export default connect(mapStateToProps)(Layout);
