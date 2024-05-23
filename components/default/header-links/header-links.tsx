"use client";
import { useState } from "react";
import Link from "next/link";
import './style.scss'

const HeaderLinks = () => {
    const [welcome, setWelcome] = useState('Welcome');
    //setWelcome('Welcome');

    return (
        <ul className={'header-links'}>
            <li className={'header-links-language link'}>en</li>
            <li className={'header-links-get-welcome link'}>{welcome}</li>
            <li className={'header-links-create-account link'}>
                <Link href={'/create-account'}>Create account</Link>
            </li>
            <li className={'header-links-login'}>
                <Link href={'/login'}>Login</Link>
            </li>
        </ul>
    )
}

export default HeaderLinks;
