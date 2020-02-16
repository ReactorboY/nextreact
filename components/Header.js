import Link from 'next/link'
import './style/header.css'

export default function Header(props) {
    return (
        <header className="header">
            <nav className="nav" role="navigation" aria-label="main navigation">
                <Link href="/">
                    <h1>{props.siteTitle}</h1>
                </Link>
            </nav>
        </header>
    )
}