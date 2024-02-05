import HomeIcon from '@mui/icons-material/Home'
import Link from '@mui/material/Link'

export default function TopNavLinks() {
    return (
        <div className='top-nav-links'>
            <Link href="#home"><HomeIcon /></Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
        </div>
    )
}