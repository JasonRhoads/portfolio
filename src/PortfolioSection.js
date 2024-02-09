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


import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PortfolioSection() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <SectionContainer id="portfolio" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>Portfolio</h2>
        </SectionHeader>
        <Grid className="portfolio-grid" container spacing={{xs: 2}}> 
            {Object.keys(portfolio).map((project) => (
                <Grid xs={12} sm={6} md={3} key={project}>
                    <Paper className='grid-item' sx={{
                            backgroundImage: `url(${portfolio[project].image})`,
                            backgroundSize: 'auto 100%',
                            backgroundPosition: 'center',}}
                            alt={portfolio[project].name}>
                        <div className='modal-container'>
                            <Button className="btn btn-learn-more" onClick={handleOpen}>Learn More</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Link href={portfolio[project].link} target="_blank"><p>{portfolio[project].name}</p></Link>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {portfolio[project].name}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </Paper>
                </Grid>
            ))}  
        </Grid>
      </SectionContainer>
    ) 
}
