import locationPin from './assets/img/locationPin.png';
import reviewCesar from './assets/img/cesar-villagra.png';
import reviewExequiel from './assets/img/exequiel-barrirero.png';
import reviewAdrian from './assets/img/adrian-dzienisik.png';
import './App.css';
import SectionHeader from './components/UI/SectionHeader';
import ProjectRight from './components/projects/ProjectRight';
import ParagraphLight from './components/UI/ParagraphLight';
import ProjectLeft from './components/projects/ProjectLeft';
import CodeLibraryItem from './components/projects/CodeLibraryItem';
import BlogPostIntro from './components/blog_posts/BlogPostIntro';
import ParagraphDark from './components/UI/ParagraphDark';
import AboutMe from './components/about_me/AboutMe';
import CardTestimony from './components/about_me/CardTestimony';
import H3Header from './components/UI/H3Header';
import ButtonLight from './components/UI/ButtonLight';
import IconBlack from './components/UI/IconBlack';
import iconLinkedIn from './assets/img/icon-linkedin.png';
import iconTwitter from './assets/img/icon-twitter.png';
import iconGitHub from './assets/img/icon-github.png';
import iconReact from './assets/img/icon-react.svg';
import iconTailwind from './assets/img/icon-tailwind.svg';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import NavbarFooter from './components/UI/NavbarFooter';
import ContactForm from './components/about_me/ContactForm';
import H4Header from './components/UI/H4Header';

function App() {

  return (
    <>
      <header id="header">
        <Navbar />
        <Hero />
      </header>

      {/* Projects */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1'></div>
      <div class='bg-black'>
        <section id="section-projects">
          <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
          <ProjectRight
            projectTitle={'COVID-19 Dashboard'}
            bgImage={'bg-virus'}
            techStack={['Figma', 'HTML5', 'CSS3', 'GitHub', 'JS']}
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/61NIjXcV5wg" title="COVID-19 Dashboard App Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
              </div>
            </ParagraphLight>
          </ProjectRight>
          <ProjectLeft
            projectTitle={'To-Do app'}
            bgImage={'bg-to-do'}
            techStack={['Figma', 'HTML5', 'CSS3', 'GitHub', 'JS']}
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vAL7ocx5oZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
              </div>
            </ParagraphLight>
          </ProjectLeft>
        </section>
        <section id="section-code-library">
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
        </section>
      </div>
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>

      {/* Blog Posts */}
      <section id="section-blog-posts">
        <SectionHeader text={'Blog Posts'} headerGradientStyle={'header-blog-posts'} class={'mt-24 lg:mt-52'} />
        <BlogPostIntro
          blogTitle={'Hammering down React basics, with a paint coat of Material UI'}
          bgImage={'bg-blog-post'}
          linkHashnode={'https://blog.damiandemasi.com/hammering-down-react-basics-with-a-paint-coat-of-material-ui'}>
          <ParagraphDark>
            <p>This project is an excuse to practice React basic concepts and to experiment with Material UI. I will be building a simple application to build a list of favourite books 📚.</p>
          </ParagraphDark>
          <ParagraphDark>
            <p>In the past, I was used to coding with an imperative approach: stating line by line all the necessary steps the program needed to execute in order to achieve the desired outcome. With JavaScript, and especially with React, this mindset is changing, moving towards a declarative paradigm. I no longer state line by line what needs to be done, but the end results I’m pursuing.</p>
          </ParagraphDark>
          <ParagraphDark>
            <p>This declarative approach is still new for me, and it’s taking me some work to get used to it, but I’m feeling more comfortable with it.</p>
          </ParagraphDark>
        </BlogPostIntro>
        <div class="divider w-1/2 mx-auto opacity-20"></div>
        <BlogPostIntro blogTitle={'My second vanilla JavaScript Project: using APIs, promises, classes, error handling, and more!'} bgImage={'bg-blog-post'}>
          <ParagraphDark>Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</ParagraphDark>
          <ParagraphDark>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</ParagraphDark>
        </BlogPostIntro>
        <div class="divider w-1/2 mx-auto opacity-20"></div>
        <BlogPostIntro blogTitle={'My first vanilla JavaScript Project: making a simple To-Do app'} bgImage={'bg-blog-post'}>
          <ParagraphDark>Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</ParagraphDark>
          <ParagraphDark>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</ParagraphDark>
        </BlogPostIntro>
        <button class='btn mx-auto mt-20 block'>Read more articles</button>
      </section>;

      {/* About me */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10  -mb-1'></div>
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
      <div class='bg-wave-bottom w-full h-96 bg-no-repeat bg-cover -mt-5'></div>

      <div class="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto -mt-80 ">
        <CardTestimony image={reviewCesar} goTo={'#'} personName='César Ariel Villagra' jobPosition={
          <>
            <p>Certified Scrum Master</p>
            <p>Project Manager</p>
            <p>Mobile Core Networks</p>
            <p>Expert Engineer</p>
          </>}>
          <p>“Damian is an excellent person to work with. His detailed knowledge of the business requirements makes him a very important resource. His professionalism & commitment are the keys for the successful delivery on time of the projects. He always has a keen eye on the 'day to day' details as well as the ability to differentiate immediate, near term and long term goals. His leadership skills makes working with him an enriching, challenging & enjoyable experience.”</p>
        </CardTestimony>
        <CardTestimony image={reviewExequiel} goTo={'#'} personName='Exequiel Barrirero' jobPosition={
          <>
            <p>Co-Founder</p>
            <p>DevOps Cloud Engineer @ Binbash</p>
            <p>AWS Certified Architect</p>
          </>}>
          <p>“After sharing several month at HP with Damian, I can say that he is a very enthusiast engineer, and has an amazing ability to learn new things by his own. He has an excellent technical background and was always willing to assist in any situation. Moreover, he was always adding value to our team, enforcing his co-workers with training and knowledge sharing. Hence, I don't hesitate to recommend him as employee, partner and person.”</p>
        </CardTestimony>
        <CardTestimony image={reviewAdrian} goTo={'#'} personName='Adrián Dzienisik' jobPosition={
          <>
            <p>Telecommunications Engineer</p>
            <p>Product & Business Analyst</p>
            <p>SAFe 4 Certified Practitioner</p>
          </>}>
          <p>“I had the pleasure to work with Damian at Claro for over 2 years, and I can say he is an excellent professional and a great person to work with. He consistently demonstrated a solid technical background, as well as excellent leadership and communication skills. He was a great mentor to me, and a committed team member, always adding value and sharing his knowledge of the business. In addition to this, his personality, positive attitude and dedication makes working with him a real enjoyable and valuable experience.”</p>
        </CardTestimony>
      </div>;

      {/* Contact */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-32  -mb-1'></div>
      <div class='bg-black pb-32'>
        <section id='section-contact'>
          <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
          <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
            <H3Header class='text-white mt-32'>
              Let's get in touch!
            </H3Header>
            <p class='text-6xl text-center'>📣</p>
            <div data-theme="mytheme" class='flex flex-wrap justify-around'>
              <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>work@damiandemasi.com</ButtonLight>
              <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>Message me on LinkedIn</ButtonLight>
            </div>
            <ParagraphLight>You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</ParagraphLight>
            <ContactForm />
          </div>
        </section>
      </div>
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>;

      {/* Footer */}
      <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>

        <NavbarFooter />

        <div class='text-left hero-content items-start'>
          <div class='max-w-2xl'>
            <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Adelaide, Australia</p>
            <h1 class='mb-5  font-bold font-poppins'>
              <span class='block text-md lg:text-xl'>Damian Demasi,</span><span class='text-3xl lg:text-5xl subpixel-antialiased'>web<br />developer</span>
            </h1>
            <button class='btn mr-10 btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>Get my Resume</button>
            <button class='btn btn-outline btn-sm text-xs lg:btn-md'>work@damiandemasi.com</button>
            <div class="mt-14 flex justify-between">
              <IconBlack icon={iconLinkedIn} goTo={'#'}>LinkedIn</IconBlack>
              <IconBlack icon={iconTwitter} goTo={'#'}>Twitter</IconBlack>
              <IconBlack icon={iconGitHub} goTo={'#'}>GitHub</IconBlack>
            </div>
            <div class='mt-10 text-xs'>
              <p>👨‍💻 Portfolio site made by Damian Demasi, using<img src={iconReact} alt="" class='w-7 inline -mx-1' />ReactJS, <img src={iconTailwind} alt="" class='w-4 inline mx-1' />TailwindCSS and DaisyUI.</p>
              <p>Icons from <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer' class='link ' >Flaticon.</a></p>
            </div>
          </div>
        </div>

      </footer>

    </>
  );
}

export default App;
