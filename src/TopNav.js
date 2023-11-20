
import Avatar from '@mui/material/Avatar'
import avatar from './images/avatar/JasonRhoads.JPG'

import TopNavLinks from './TopNavLinks'

export default function TopNav() {
    return (
        <header>
            <nav id="top-nav" className="top-nav">
                <Avatar alt="Jason Rhoads" src={avatar} />
                <TopNavLinks />
            </nav>
        </header>
    )
}