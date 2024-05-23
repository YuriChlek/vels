'use client';
import {useState} from 'react';
import {Drawer, List, ListItem, ListItemText, Button} from '@mui/material';
import Link from 'next/link';
import './style.scss';

const MenuNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const menuItems = [
        {text: 'Home', href: '/', childCategory: {}},
        {text: 'About Us', href: '/about', childCategory: {}},
        {text: 'Contacts', href: '/contact', childCategory: {}},
        {text: 'Product', href:  `/product/${1}`, childCategory: {}},
        {text: 'Category', href: `/category//${1}`, childCategory: {}}
    ];

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} component={Link} href={item.href}>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={'menu'}>
            <Button className={'menu-action'} onClick={toggleDrawer(true)}
                    sx={{
                        color: '#27221f'
                    }}
            >Menu</Button>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        paddingLeft: '40px',
                        paddingTop: '40px',
                        width: {
                            xs: '100%', // 0px до 600px
                            sm: '250px', // 600px до 900px
                            md: '300px',
                        },
                        bgcolor: 'background.default',
                    },
                }}
            >
                <Button onClick={toggleDrawer(false)}
                        sx={{
                            color: '#27221f',
                            position: 'absolute',
                            right: '15px',
                            top: '15px',
                            height: '25px'
                        }}>
                    Close
                </Button>
                {list()}
            </Drawer>
        </div>
    );
};

export default MenuNavigation;
