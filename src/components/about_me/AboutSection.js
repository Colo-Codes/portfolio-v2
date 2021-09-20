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
                        My interest in technology started when I was a teenager and <a class='link link-primary' href='https://en.wikipedia.org/wiki/Dial-up_Internet_access' target='_blank' rel='noreferrer'>dial-up</a> Internet connections were booming. I still remember plugging in a 10 metres telephone cable to my PC from the phone box every night to avoid keeping my family’s phone line busy during peak hours.
                    </ParagraphLight>
                    <ParagraphLight>
                        In those days I started playing with Linux as well, thanks to a book about the Slackware distro that I bought and came with a set of floppy disks. I right away noticed the importance of having a backup of your files, because I ended up formatting the hard drive multiple times due to the learning process.
                    </ParagraphLight>
                    <ParagraphLight>
                        Around the same time, I also started playing with scripting on several <a class='link link-primary' href='https://en.wikipedia.org/wiki/Internet_Relay_Chat' target='_blank' rel='noreferrer'>IRC</a> programs. In those days, social networks as we know them today didn’t exist, so the “chat rooms” were the closest we could get.
                    </ParagraphLight>
                    <ParagraphLight>
                        It was inevitable that I started playing with HTML also. I used to make very rudimentary pages about things I liked and hosting them on <a class='link link-primary' href='https://en.wikipedia.org/wiki/Yahoo!_GeoCities' target='_blank' rel='noreferrer'>GeoCities</a> for free.
                    </ParagraphLight>
                    <ParagraphLight>
                        Fast forward some years, I chose to study Computer Science at university but, after a year, I switched to Telecommunications Engineering. After graduating, I got my first job at Hewlett-Packard as a support analyst, but I quickly moved to a company specialised in mobile telecommunications, <a class='link link-primary' href='https://en.wikipedia.org/wiki/Claro_(company)' target='_blank' rel='noreferrer'>Claro AMX</a>, in which I worked most of my professional life.
                    </ParagraphLight>
                    <ParagraphLight>
                        In 2019, my wife and I decided to quit our jobs, sell all of our possessions, and move to a different continent. We jumped over <a class='link link-primary' href='https://www.distancefromto.net/distance-from-argentina-to-australia' target='_blank' rel='noreferrer'>12.000 km</a> from Argentina to Australia, searching for new experiences and a better future. I started studying for an MBA a couple of weeks after arriving in the country, and I finished it in 2021.
                    </ParagraphLight>
                    <ParagraphLight>
                        I think making such a big change in my life allowed me to face most of my fears and reassured my self-confidence and trust in my capabilities, which is difficult for someone that is constantly pushing himself to be better. In 2021, after working for an Australian technology company developing an integration of the <a class='link link-primary' href='https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol' target='_blank' rel='noreferrer'>SNMP protocol</a> in the C programming language, I rediscovered how good it felt to make programs; to create something out of nothing.
                    </ParagraphLight>
                    <ParagraphLight>
                        That last experience is what brings me to this moment, returning to my humble beginnings in web development. With all the work experience I gathered on different companies, and the practice gained by studying engineering and a masters, I’m now focusing all my energy and knowledge into becoming the best web developer I can be, hoping to work in this industry for the rest of my professional life.
                    </ParagraphLight>
                    <ParagraphLight>
                        I know I might be late in the game, but I’m studying new technologies every day, coding and building projects as often as I can, and looking forward to gaining work experience in web development related companies.
                    </ParagraphLight>
                    <ParagraphLight>
                        I’m a firm believer in the growth mindset concept, and that “life is not about finding yourself, but about creating yourself” (George Bernard Shaw).
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;