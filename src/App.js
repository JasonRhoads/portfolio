import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper'
import TopNav from './TopNav';

import Avatar from '@mui/material/Avatar'
import avatar from './images/avatar/JasonRhoads.JPG'

import { 
  OuterContainer, 
  SectionContainer, 
  SectionHeader, 
  SectionHeaderBackground, 
} from './StyledComponents';

function App() {
  return (
    <>
    <TopNav></TopNav>
    <OuterContainer>
      <SectionContainer id="home" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h1 className='h1'>Jason Rhoads</h1>
        </SectionHeader>
        <Avatar alt="Jason Rhoads" src={avatar}  sx={{ width: 250, height: 250 }}/>
      </SectionContainer>
      <SectionContainer id="portfolio" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>Portfolio</h2>
        </SectionHeader>
        <Grid container spacing={{xs: 2, md: 3, lg: 5}}> 
            {Array.from(Array(8)).map((_, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <Paper className='grid-item'>item {index}</Paper>
              </Grid>
            ))}
        </Grid>
      </SectionContainer>
      <SectionContainer id="about" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>About</h2>
        </SectionHeader>
        About
      </SectionContainer>
      <SectionContainer id="contact" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
         <h2 className='h1'>Contact</h2>
        </SectionHeader>
        Contact
      </SectionContainer>
    </OuterContainer>
    </>
  );
}

export default App;
