import React from 'react';
import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <MdIcons.MdHome className='couleur-verte icone-menu' />,
        cName: 'nav-text'
    },
    {
        title: 'Voiture',
        path: '/voiture',
        icon: <MdIcons.MdDirectionsCar className='couleur-verte icone-menu' />,
        cName: 'nav-text'
    },
    {
        title: 'Photo',
        path: '/photo',
        icon: <MdIcons.MdPhotoCamera className='couleur-verte icone-menu'/>,
        cName: 'nav-text'
    },
    {
        title: 'Vidéo',
        path: '/video',
        icon: <MdIcons.MdVideoCameraBack className='couleur-verte icone-menu'/>,
        cName: 'nav-text'
    },
];
