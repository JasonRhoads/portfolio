

import TopNav from './TopNav';
import { OuterContainer, SectionContainer, SectionHeader, SectionHeaderBackground } from './StyledComponents';

function App() {
  return (
    <>
    <TopNav></TopNav>
    <OuterContainer>
      <SectionContainer id="home" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h1 className='h1'>Home</h1>
        </SectionHeader>
        Hero
      </SectionContainer>
      <SectionContainer id="portfolio" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>Portfolio</h2>
        </SectionHeader>
        Portfolio
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
