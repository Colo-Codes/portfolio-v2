import './App.css';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import Footer from './components/UI/Footer';
import BlogSection from './components/blog_posts/BlogSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about_me/AboutSection';
import Testimonies from './components/about_me/Testimonies';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <>
      {/* Header */}
      <header id="header">
        <Navbar />
        <Hero />
      </header>
      {/* Projects */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1'></div>
      <ProjectsSection />
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>
      {/* Blog Posts */}
      <BlogSection />;
      {/* About me */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10  -mb-1'></div>
      <AboutSection />
      <div class='bg-wave-bottom w-full h-96 bg-no-repeat bg-cover -mt-5'></div>
      <Testimonies />
      {/* Contact */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-32  -mb-1'></div>
      <ContactSection />
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>;
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;