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
} from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About Comp={About} key={"about"} />
      <Projects Comp={Projects} key={"projects"} />
      <Services Comp={Services} key={"services"} />
      <Skills Comp={Skills} key={"skills"} />
      {/* <Timeline Comp={Timeline} key={"timeline"} /> */}
      <Testimonials />
      <Contact Comp={Contact} key={"contact"} />
    </main>
  );
};

export default App;
