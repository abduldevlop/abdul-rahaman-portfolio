import "./App.css";
import {
  About,
  Contact,
  Header,
  Navbar,
  Projects,
  Services,
  Skills,
  Testimonials,
  Timeline,
} from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About Comp={About} key={"about"} />
      <Services Comp={Services} key={"services"} />
      <Skills Comp={Skills} key={"skills"} />
      <Projects Comp={Projects} key={"projects"} />
      <Timeline Comp={Timeline} key={"timeline"} />
      <Testimonials />
      <Contact Comp={Contact} key={"contact"} />
    </main>
  );
};

export default App;
