import logo from './logo.svg';
import hero1 from './assets/img/hero1.png';
import locationPin from './assets/img/locationPin.png';
import iconFigma from './assets/img/icon-figma.png';
import iconHtml from './assets/img/icon-html5.png';
import iconCss from './assets/img/icon-css3.png';
import iconGitHub from './assets/img/icon-github.png';
import iconJS from './assets/img/icon-javascript-black.png';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <div class="pt-2 fixed mx-auto w-full z-10 bg-white">
        <nav class="flex justify-between mx-auto max-w-5xl">
          <span>Logo</span>
          <ul class="flex">
            <li><button class="btn btn-ghost mr-2">Projects</button> </li>
            <li><button class="btn btn-ghost mr-2">Code Library</button> </li>
            <li><button class="btn btn-ghost mr-2">Blog Posts</button> </li>
            <li><button class="btn btn-ghost mr-2">About</button> </li>
            <li><button class="btn btn-ghost">Contact</button> </li>
          </ul>
        </nav>
      </div>

      {/* Hero */}
      <div class="hero min-h-85vh">
        <div class="text-left hero-content items-start">
          <div>
            <img src={hero1} alt="Damian Demasi with a hat in a park on a sunny day." class="mt-10 max-w-xs" />
          </div>
          <div class="max-w-2xl">
            <p class="mb-5"><span><img src={locationPin} class="h-4 inline mb-1 mr-1" alt="Location pin icon" /></span>Adelaide, Australia</p>
            <h1 class="mb-5 text-5xl font-bold font-poppins">
              <span class="block">Damian Demasi,</span><span class="text-9xl subpixel-antialiased">web developer</span>
            </h1>
            <p class="my-16 text-neutral">
              I’m a Web Developer based in Adelaide, Australia. Even though I have a Telecommunications Engineering degree and an MBA, coding is my passion and I want it to be my new focus on my professional carrer. Developing applications for the web has become my drive.
            </p>
            <button class="btn mr-10">Get my Resume</button>
            <button class="btn btn-outline">work@damiandemasi.com</button>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div class="bg-wave-top w-full h-60 bg-no-repeat bg-cover"></div>
      <div class="mt-32 bg-black">
        <div class="-mt-32 text-secondary"><h2 class="text-5xl font-bold font-poppins text-center w-min subpixel-antialiased mx-auto">Projects</h2></div>

        <div class="mt-32 grid grid-cols-3 gap-6 max-w-5xl mx-auto text-white">
          <div data-theme="mytheme" class="w-min justify-self-end">
            <div class="bg-virus bg-contain bg-no-repeat opacity-20 w-60 h-60 -ml-36 z-0 absolute"></div>
            <button class="btn btn-primary mt-14 mb-5 w-56 z-1 relative">Watch it live</button>
            <button class="btn btn-primary mb-5 w-56 z-1 relative">Full project description</button>
            <button class="btn btn-primary w-56 z-1 relative">Project's GitHub</button>
          </div>
          <div class="col-span-2">
            <h3 class="text-2xl font-bold mb-5">COVID-19 Dashboard</h3>
            <p data-theme="mytheme" class="text-secondary mb-5">Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class="link link-primary">It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</p>
            <p data-theme="mytheme" class="text-secondary mb-5">Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. <a class="link link-primary">It's just a simple link.</a> T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</p>
            <div class="w-full h-72 bg-base-300"></div>
            <h4 class="text-xl font-bold mt-5 mb-3">Tech stack used in this project</h4>
            <p data-theme="mytheme" class="text-secondary mb-5">This was my second project, and I wanted to keep diving into JavaScript, as well as in the design aspect of it, hence the use of Figma.</p>
            <div class="grid grid-cols-5 gap-4">
              <div class="flex flex-col items-center"><img src={iconFigma} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">Figma</span></div>
              <div class="flex flex-col items-center"><img src={iconHtml} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">HTML5</span></div>
              <div class="flex flex-col items-center"><img src={iconCss} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">CSS3</span></div>
              <div class="flex flex-col items-center"><img src={iconGitHub} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">Git & GitHub</span></div>
              <div class="flex flex-col items-center"><img src={iconJS} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">JavaScript</span></div>
            </div>
          </div>
        </div>

        <div class="mt-32 grid grid-cols-3 gap-6 max-w-5xl mx-auto text-white">
          <div class="col-span-2">
            <h3 class="text-2xl font-bold mb-5">To-Do app</h3>
            <p data-theme="mytheme" class="text-secondary mb-5">Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. <a class="link link-primary">It's just a simple link.</a> Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</p>
            <p data-theme="mytheme" class="text-secondary mb-5">Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. <a class="link link-primary">It's just a simple link.</a> T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</p>
            <div class="w-full h-72 bg-base-300"></div>
            <h4 class="text-xl font-bold mt-5 mb-3">Tech stack used in this project</h4>
            <p data-theme="mytheme" class="text-secondary mb-5">This was my first project, and I wanted to dive deep into JavaScript, as well as in design, so I learned how to use Figma whilst doing this project.</p>
            <div class="grid grid-cols-5 gap-4">
              <div class="flex flex-col items-center"><img src={iconFigma} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">Figma</span></div>
              <div class="flex flex-col items-center"><img src={iconHtml} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">HTML5</span></div>
              <div class="flex flex-col items-center"><img src={iconCss} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">CSS3</span></div>
              <div class="flex flex-col items-center"><img src={iconGitHub} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">Git & GitHub</span></div>
              <div class="flex flex-col items-center"><img src={iconJS} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs">JavaScript</span></div>
            </div>
          </div>
          <div data-theme="mytheme" class="w-min justify-self-start">
            <div class="bg-to-do bg-contain bg-no-repeat opacity-20 w-60 h-60 ml-36 z-0 absolute"></div>
            <button class="btn btn-primary mt-14 mb-5 w-56 z-1 relative">Watch it live</button>
            <button class="btn btn-primary mb-5 w-56 z-1 relative">Full project description</button>
            <button class="btn btn-primary w-56 z-1 relative">Project's GitHub</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
