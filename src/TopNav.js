
import Avatar from '@mui/material/Avatar'
import avatar from './images/avatar/JasonRhoads.JPG'
import Link from '@mui/material/Link'

import TopNavLinks from './TopNavLinks'

export default function TopNav() {
    return (
        <header>
            <nav id="top-nav" className="top-nav">
                <Link href="#home">
                    <Avatar alt="Jason Rhoads" src={avatar} />
                </Link>
                <TopNavLinks />
            </nav>
        </header>
    )
}