
import TopNav from './TopNav';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';

import { 
  OuterContainer, 
  SectionContainer, 
  SectionHeader, 
  SectionHeaderBackground, 
  // SectionContentContainer,
} from './StyledComponents';

function App() {
  return (
    <>
    <TopNav></TopNav>
    <OuterContainer>
      <HeroSection />
      <PortfolioSection />
      
      <SectionContainer id="about" className='section-container'>
        <SectionHeaderBackground />
        <SectionHeader>
          <h2 className='h1'>About</h2>
        </SectionHeader>
          <h3 className='h1'>Born to build</h3>
          <p>I have always loved building things, from Legos, model cars, miniatures, and websites. Exciting new technologies have emerged over the years that allow people to create their own unique space on the internet. I am here to help you with yours!</p>
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
