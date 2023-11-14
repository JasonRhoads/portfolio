import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import blog_freemote from './images/blog_freemote.jpg'
import coming_soon_mobile from './images/coming_soon_mobile.jpg'
import coming_soon_old_landscape from './images/coming_soon_old_landscape.jpg'
import coming_soon_old_phone from './images/coming_soon_old_phone.jpg'
import coming_soon_old_portrait from './images/coming_soon_old_portrait.jpg'
import coming_soon_phone from './images/coming_soon_phone.jpg'
import coming_soon from './images/coming_soon.jpg'
import crypto from './images/crypto_list.png'
import maxstrong from './images/maxstrong.jpg'
import order_summary from './images/order_summary.jpg'
import order_summary_mobile from './images/order_summary_mobile.jpg'
import portraits_jwr from './images/portraits_jwr.jpg'
import shopify_store from './images/shopify_store_home_screen.jpg'

import  {
    SectionContainer, 
    SectionHeader, 
    SectionHeaderBackground, 

} from './StyledComponents';
import { max } from '@floating-ui/utils';


let portfolio = {
    1 : {
        "name": "Portraits by James",
        "image": portraits_jwr,
        "link": "https://jameswrhoads.com/"
    },
    2 : {
        "name": "Order interface",
        "image": order_summary_mobile,
        "link": "#"
    },
    3 : {
        "name": "Original brand design",
        "image": coming_soon_old_landscape,
        "link": "#"
    },
    4 : {
        "name": "Brand Redesign",
        "image": coming_soon,
        "link": "#"
    },
    5 : {
        "name": "Freemote blog design",
        "image": blog_freemote,
        "link": "#"
    },
    6 : {
        "name": "MaxStrong",
        "image": maxstrong,
        "link": "#"
    },
    7 : {
        "name": "Shopify Store",
        "image": shopify_store,
        "link": "#"
    },
    8 : {
        "name": "Crypto tracker",
        "image": crypto,
        "link": "#"
    }
}


export default function PortfolioSection() {
    return (
        <SectionContainer id="portfolio" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>Portfolio</h2>
        </SectionHeader>
        {/* spacing={{xs: 2, md: 3, lg: 5}} */}
        <Grid className="portfolio-grid" container > 
            {Object.keys(portfolio).map((project) => (
                <Grid xs={12} sm={6} md={3} key={project}>
                    <Link href={portfolio[project].link} target="_blank">
                        <Paper className='grid-item'>
                            <img className="portfolio-image" src={portfolio[project].image} alt={portfolio[project].name}/>
                            <p>{portfolio[project].name}</p> 
                        </Paper>
                    </Link>
                </Grid>
            ))}  
        </Grid>
      </SectionContainer>
    ) 
}
