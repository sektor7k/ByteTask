import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/welcome";
import About from "@/components/about";
import ExampleJobs from "@/components/examplejobs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome/>
      <About/>
      <ExampleJobs/>
      <Footer />
    </>
  );
}
