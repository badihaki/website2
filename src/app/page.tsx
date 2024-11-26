import Contact from "@/lib/components/Contact";
import Gamedev from "@/lib/components/Gamedev";
import Navigation from "@/lib/components/Navigation";
import Webdev from "@/lib/components/Webdev";
import Welcome from "@/lib/components/Welcome";

export default function Home() {
  return (
    <div className="grid grid-flow-row-dense items-center justify-items-center min-h-screen relative">
      <Navigation />
      <Welcome />
      <Webdev />
      <Gamedev />
      <Contact />
    </div>
  );
}
