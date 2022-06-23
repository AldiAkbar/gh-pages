import { StyledHero, StyledHeroLeft, StyledHeroRight } from './index.styled';
import heroImage from '../../image/heroImage.png';
import Button from '../ui/Button';

function Hero() {
    return (
        <>
            <StyledHero>
                <section>
                    <StyledHeroLeft>
                        <h1>COVID ID</h1>
                        <h4>Monitoring perkembangan COVID</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        <Button>Vaccine</Button>
                    </StyledHeroLeft>
                    <StyledHeroRight>
                        <img src={heroImage} alt="heroImage" />
                    </StyledHeroRight>
                </section>
            </StyledHero>
        </>
    );
}

export default Hero;