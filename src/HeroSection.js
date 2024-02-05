
import Avatar from '@mui/material/Avatar'
import avatar from './images/avatar/JasonRhoads.JPG'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'

import  {
    SectionContainer, 
    SectionHeader, 
    SectionHeaderBackground, 
    SectionContentContainer,
} from './StyledComponents';


export default function HeroSection() {
    return (
            <SectionContainer id="home" className='section-container'>
                <SectionHeaderBackground />
                <SectionHeader>
                    <h1 className='h1'>Jason Rhoads</h1>
                </SectionHeader>
                <SectionContentContainer>
                    <Grid container spacing={{xs: 2, md: 3, lg: 5}} sx={{mt: 5}}> 
                        <Grid sm={12} md={6}>
                            <Avatar alt="Jason Rhoads" src={avatar} 
                                sx={{ display: "block", margin: "auto", width: 250, height: 250 }}/>
                            <Typography variant="h3">I can help</Typography>
                            <Typography variant="body1" gutterBottom sx={{margin: "auto", maxWidth: "450px"}}>
                            Need a new website, shopify store, complete redesign, or platform transfer. I can help turn your vision into a fully functional and responsive site.
                            </Typography>
                        </Grid>
                        <Grid xs={12}sm={12} md={6}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/hh5CoekiMgs?si=yX0CT8eFDx6XD21i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Grid>
                    </Grid>
                </SectionContentContainer>
            </SectionContainer>
            )
     
}