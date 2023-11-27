import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import ExampleJobs from "@/components/Examplejobs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <ExampleJobs/>
      <Footer />
    </>
  );
}
