'use client';
import './style.scss';
import Link from "next/link";
import Image from 'next/legacy/image'
import myLogo from '@/public/images/icons/logo.svg'
import dynamic from "next/dynamic";

const Logo = () => {
    const logoAlt: string = 'Vels';
    const logoUrl: string = '@/public/images/icons/logo.png'
    const logo = dynamic(() => import('@/public/images/icons/logo.svg'), {
        ssr: true,
    });

    return (
        <Link className={'logo'} href={'/'}>
            <Image src={myLogo} alt={logoAlt} width={50} height={50}></Image>
        </Link>
    );
};

export default Logo;