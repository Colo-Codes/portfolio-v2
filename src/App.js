import logo from './logo.svg';
import hero1 from './assets/img/hero1.png';
import locationPin from './assets/img/locationPin.png';
import arrowDown from './assets/img/arrowDown.png';
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
      <div class="hero min-h-screen">
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
            <div class="bg-virus bg-contain bg-no-repeat opacity-20 w-60 h-60 -ml-36 absolute"></div>
            <button class="btn btn-primary mt-14 mb-5 w-56">Watch it live</button>
            <button class="btn btn-primary mb-5 w-56">Full project description</button>
            <button class="btn btn-primary w-56">Project's GitHub</button>
          </div>
          <div class="col-span-2">
            <h3 class="text-2xl font-bold mb-5">COVID-19 Dashboard</h3>
            <p>Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow. Bacon ipsum dolor amet beef tongue hamburger frankfurter flank meatloaf pastrami ham hock chuck chislic tail pork chop turkey ham. Porchetta shoulder meatball biltong. T-bone cow pork tenderloin ham hock jowl ribeye doner. Kevin short loin sausage picanha cow.</p>
          </div>
        </div>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </>
  );
}

export default App;
