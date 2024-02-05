import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import avatar from './images/avatar/JasonRhoads.JPG'


import  {
    SectionContainer, 
    SectionHeader, 
    SectionHeaderBackground, 

} from './StyledComponents';


let portfolio = {
    1 : {
        "name": "number 1",
        "image": avatar,
        "link": "#"
    },
    2 : {
        "name": "number 2",
        "image": "img",
        "link": "#"
    },
    3 : {
        "name": "number 3",
        "image": "img",
        "link": "#"
    },
    4 : {
        "name": "number 4",
        "image": "img",
        "link": "#"
    },
    5 : {
        "name": "number 5",
        "image": "img",
        "link": "#"
    },
    6 : {
        "name": "number 6",
        "image": "img",
        "link": "#"
    },
    7 : {
        "name": "number 7",
        "image": "img",
        "link": "#"
    },
    8 : {
        "name": "number 8",
        "image": "img",
        "link": "#"
    },
    9 : {
        "name": "number 9",
        "image": "img",
        "link": "#"
    },
    10 : {
        "name": "number 10",
        "image": "img",
        "link": "#"
    },
    11 : {
        "name": "number 11",
        "image": "img",
        "link": "#"
    },
    12 : {
        "name": "number 12",
        "image": "img",
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
        <Grid className="portfolio-grid" container spacing={{xs: 2, md: 3, lg: 5}}> 
            {Object.keys(portfolio).map((project) => (
                <>
                {console.log(project)}
                <Grid xs={12} sm={6} md={3} key={project}>
                    <Paper className='grid-item'>
                        <img className="portfolio-image" src={avatar} alt={portfolio[project].name}/>
                        <Link href={portfolio[project].link}>{portfolio[project].name}</Link>
                    </Paper>
                </Grid>
                </>
            ))}  
        </Grid>
      </SectionContainer>
    ) 
}
