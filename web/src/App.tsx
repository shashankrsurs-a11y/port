import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Timeline } from "./components/Timeline";
import { Films } from "./components/Films";
import { Production } from "./components/Production";
import { Slate } from "./components/Slate";
import { Skills } from "./components/Skills";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-ink text-ivory min-h-screen overflow-x-hidden">
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Timeline />
        <Films />
        <Production />
        <Slate />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
