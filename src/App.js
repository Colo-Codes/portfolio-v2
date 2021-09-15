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

function App() {

  return (
    <>
      <Navbar />
      <Hero />

      {/* Projects */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1'></div>
      <div class='bg-black'>

        <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />

        <ProjectRight projectTitle={'COVID-19 Dashboard'} bgImage={'bg-virus'} techStack={['Figma', 'HTML5', 'CSS3', 'GitHub', 'JS']}>
          <ParagraphLight>
            Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class='link link-primary' href='http://localhost:3000/' target='_blank' rel='noreferrer'>It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
          </ParagraphLight>
          <ParagraphLight>
            Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. It's just a simple link. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
          </ParagraphLight>
        </ProjectRight>

        <ProjectLeft projectTitle={'To-Do app'} bgImage={'bg-to-do'} techStack={['Figma', 'HTML5', 'CSS3', 'GitHub', 'JS']}>
          <ParagraphLight>
            Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class='link link-primary' href='http://localhost:3000/' target='_blank' rel='noreferrer'>It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
          </ParagraphLight>
          <ParagraphLight>
            Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. It's just a simple link. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.
          </ParagraphLight>
        </ProjectLeft>

        <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />

        <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
          <div>
            <CodeLibraryItem codeLibraryTitle={'React hooks use cases'} goTo={'#'}>
              <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
            </CodeLibraryItem>
          </div>
          <div>
            <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
              <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
            </CodeLibraryItem>
          </div>
          <div>
            <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
              <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
            </CodeLibraryItem>
          </div>

        </div>
      </div>
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>

      {/* Blog Posts */}
      <SectionHeader text={'Blog Posts'} headerGradientStyle={'header-blog-posts'} class={'mt-24 lg:mt-52'} />

      <BlogPostIntro blogTitle={'Hammering down React basics, with a paint coat of Material UI'} bgImage={'bg-blog-post'}>
        <ParagraphDark>Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</ParagraphDark>
        <ParagraphDark>Vestibulum sed vestibulum libero, bibendum accumsan nisi. Duis mattis felis vitae pellentesque ultricies. Phasellus elementum feugiat metus vel fermentum. Aenean vitae nisl vel metus tincidunt rutrum. Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</ParagraphDark>
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

      {/* About me */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10  -mb-1'></div>
      <div class='bg-black pb-32'>

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
      </div>

      {/* Contact */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-32  -mb-1'></div>
      <div class='bg-black pb-32'>
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

          <form>
            <div class="p-10 card bg-base-200">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your name</span>
                </label>
                <input type="text" placeholder="Luke Skywalker" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your e-mail address</span>
                </label>
                <input type="email" placeholder="luke@tatooine.com" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your message</span>
                </label>
                <textarea class="textarea h-24 textarea-bordered" placeholder="I'm thinking about giving you my lightsaber..." required></textarea>
              </div>
              <input type="submit" value="Send message" class="btn w-max mt-10 mx-auto" />

            </div>
          </form>
        </div>
      </div>
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>

      {/* Footer */}
      <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>

        <nav>
          <ul class='flex flex-col'>
            <li><button class='btn btn-ghost mb-2'>Projects</button> </li>
            <li><button class='btn btn-ghost mb-2'>Code Library</button> </li>
            <li><button class='btn btn-ghost mb-2'>Blog Posts</button> </li>
            <li><button class='btn btn-ghost mb-2'>About</button> </li>
            <li><button class='btn btn-ghost'>Contact</button> </li>
          </ul>
        </nav>

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
