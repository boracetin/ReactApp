import { useState } from 'react';
import './Header.css';

import { AppNavigationService } from '../Sidebar/appNavigationService';

export const Header = () => {
    const menuService = new AppNavigationService();
    const [headerMenu] = useState(menuService.getHeader());

    return (
        <div className="header">
            {headerMenu.items.map((menuItem: any, key: any) => (
                <div className="header-right" style={{ margin: '10px' }}>
                    {menuItem.name}
                </div>
            ))}
        </div>
    );
};
