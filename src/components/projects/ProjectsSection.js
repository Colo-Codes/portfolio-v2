import ProjectRight from '../projects/ProjectRight';
import ProjectLeft from '../projects/ProjectLeft';
import SectionHeader from '../UI/SectionHeader';
import ParagraphLight from '../UI/ParagraphLight';
import H4Header from '../UI/H4Header';
// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
                <ProjectRight
                    projectTitle={'COVID-19 Dashboard'}
                    bgImage={'bg-virus'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/covid-19-dashboard-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-second-vanilla-javascript-project-using-apis-promises-classes-error-handling-and-more'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/covid-19-dashboard-app'}>
                    <ParagraphLight>
                        <p>This project was one of my favourite tools for breaking my way out of tutorial hell 👹. I also wanted this project to serve me as a display of my JavaScript skills to potential employers or collaborators.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>By the time I decided to start working on this project I had just finished learning about Promises, async...await, APIs and error handling. I wanted to code a project to implement all of this knowledge.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>At the start, this project seemed simple, but it quickly got complicated, especially because I was dealing with three different APIs (and a couple more that didn’t work in the end).</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I didn’t spend much time on HTML, but CSS proved to be demanding once more 😅. Thanks to the challenges I faced I gain more CSS skills and learned how to better debug it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, I could have implemented MVC from the get-go, so I will do that in my next project. As I previously said, I prefer not to refactor this project and leave it as a witness of my skills at the time.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>APIs are reliable… most of the time 🤭. I’m sure paid APIs perform better, so if I need to use them in the future for a more serious project, I will research deeply what is the best API to get for the job.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project still has room for improvement, but I had to make the decision to stop working on it at some point. Overall, I think it’s functioning as expected.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/61NIjXcV5wg" title="COVID-19 Dashboard App Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'To-Do app'}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/todo-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-first-vanilla-javascript-project-making-a-simple-to-do-app'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/todo-app'}>
                    <ParagraphLight>
                        <p>Doing courses and tutorials is great, but sometimes is difficult to evaluate how much are we actually learning. Watching video after video and coding along with the instructor gives us very good guidance, but it is not a realistic scenario. In a real-world job, we will have to solve problems and start figuring things out by ourselves (with the help of Google, of course 😉). So, to test how much I was actually learning during the JavaScript course I was doing I decided to make a simple To-Do app in HTML, CSS and vanilla JavaScript.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Thanks to this project I could have a taste of how much work an application like this one takes.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I learned about the importance of structuring HTML in a meaningful semantic way, and how a good HTML structure can make our lives easy when we start working on CSS and JavaScript in later stages of the project.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I underestimated CSS 😅. The classes names are a bit funny and messy, so in the future, I'll try to implement BEM notation and maybe SASS. I discovered that some behaviour that initially thought of was in the realm of JavaScript can easily be achieved with CSS, such as animations on elements.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, this was the first time I coded following the OOP paradigm and, despite feeling a bit out of my element, I now can see the potential that following this paradigm has.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project has a lot of room for improvement, but I wanted to live it like that to have a "snapshot" of my knowledge and skills up to the point in time where I was working on it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vAL7ocx5oZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectLeft>
            </section>
            {/* <section id="section-code-library">
          <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />
          <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
            <div>
              <CodeLibraryItem codeLibraryTitle={'5 use cases of the useState ReactJS hook'} goTo={'#'}>
                <ParagraphLight><p>useState is a Hook that needs to be called inside a function component to add some local state to it.React will preserve this state between component re-renders.</p></ParagraphLight>
                <ParagraphLight><p>There are many use cases for the useState hook, but in this article, I will focus on the following five: </p></ParagraphLight>
                <ParagraphLight>
                  <ul class='list-disc ml-4'>
                    <li>State management</li>
                    <li>Conditional rendering</li>
                    <li>Toggle flags (true/false)</li>
                    <li>Counter</li>
                    <li>Get API data and store it in state</li>
                  </ul>
                </ParagraphLight>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default ProjectsSection;