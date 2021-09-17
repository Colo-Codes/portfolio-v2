import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm Damian`} bgImage={'bg-virus'} techStack={['Figma', 'HTML5', 'CSS3', 'GitHub', 'JS']}>
                    <ParagraphLight>
                        Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class='link link-primary' href='http://localhost:3000/' target='_blank' rel='noreferrer'>It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
                    </ParagraphLight>
                    <ParagraphLight>
                        Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. It's just a simple link. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
                    </ParagraphLight>
                    <ParagraphLight>
                        Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class='link link-primary' href='http://localhost:3000/' target='_blank' rel='noreferrer'>It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;