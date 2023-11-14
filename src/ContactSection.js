import  {
    SectionContainer, 
    SectionHeader, 
    SectionHeaderBackground, 
    SectionContentContainer,
} from './StyledComponents';

export default function ContactSection() {
    return (

        <SectionContainer id="contact" className='section-container'>
            <SectionHeaderBackground />
            <SectionHeader>
            <h2 className='h1'>Contact</h2>
            </SectionHeader>
            <SectionContentContainer>
                <form action="https://submit-form.com/dDRdud6ao">
                    <input type="text" id="name" name="name" placeholder="Name" required="" />
                    <input type="email" id="email" name="email" placeholder="Email" required="" />
                    <input type="text" id="budget" name="budget" placeholder="Budget"/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Describe your project..."
                        required=""
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </SectionContentContainer>
        </SectionContainer>
    )
}


