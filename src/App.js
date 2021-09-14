import logo from './logo.svg';
import hero1 from './assets/img/hero1.png';
import locationPin from './assets/img/locationPin.png';
import iconFigma from './assets/img/icon-figma.png';
import iconHtml from './assets/img/icon-html5.png';
import iconCss from './assets/img/icon-css3.png';
import iconGitHub from './assets/img/icon-github.png';
import iconJS from './assets/img/icon-javascript-black.png';
import './App.css';
import SectionHeader from './components/UI/SectionHeader';
import ProjectRight from './components/projects/ProjectRight';
import ParagraphLight from './components/UI/ParagraphLight';
import ProjectLeft from './components/projects/ProjectLeft';
import CodeLibraryItem from './components/projects/CodeLibraryItem';

function App() {
  return (
    <>
      {/* Navbar */}
      <div class='pt-2 fixed mx-auto w-full z-10 bg-white'>
        <nav class='flex justify-between mx-auto max-w-5xl'>
          <span>Logo</span>
          <ul class='flex'>
            <li><button class='btn btn-ghost mr-2'>Projects</button> </li>
            <li><button class='btn btn-ghost mr-2'>Code Library</button> </li>
            <li><button class='btn btn-ghost mr-2'>Blog Posts</button> </li>
            <li><button class='btn btn-ghost mr-2'>About</button> </li>
            <li><button class='btn btn-ghost'>Contact</button> </li>
          </ul>
        </nav>
      </div>

      {/* Hero */}
      <div class='hero min-h-85vh'>
        <div class='text-left hero-content items-start'>
          <div>
            <img src={hero1} alt='Damian Demasi with a hat in a park on a sunny day.' class='mt-10 max-w-xs' />
          </div>
          <div class='max-w-2xl'>
            <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Adelaide, Australia</p>
            <h1 class='mb-5 text-5xl font-bold font-poppins'>
              <span class='block'>Damian Demasi,</span><span class='text-9xl subpixel-antialiased'>web developer</span>
            </h1>
            <p class='my-16 text-neutral'>
              I’m a Web Developer based in Adelaide, Australia. Even though I have a Telecommunications Engineering degree and an MBA, coding is my passion and I want it to be my new focus on my professional carrer. Developing applications for the web has become my drive.
            </p>
            <button class='btn mr-10'>Get my Resume</button>
            <button class='btn btn-outline'>work@damiandemasi.com</button>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div class='bg-wave-top w-full h-60 bg-no-repeat bg-cover'></div>
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

        <div class='grid grid-cols-3 gap-10 max-w-5xl m-auto mt-32'>
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
    </>
  );
}

export default App;
