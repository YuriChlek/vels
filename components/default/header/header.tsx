import React from 'react';
import MenuNavigation from "@/components/default/menu-navigation/menu-navigation";
import Logo from "@/components/default/logo/logo";
import HeaderLinks from "@/components/default/header-links/header-links";
import './style.scss';

const Header = () => {
    return (
        <header className={'page-header'}>
            <MenuNavigation></MenuNavigation>
                <Logo></Logo>
            <HeaderLinks></HeaderLinks>
        </header>
    );
};

export default Header;
