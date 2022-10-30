import AboutMe from "../components/aboutMe";
import Banner from "../components/banner";
import Contactme from "../components/contactme";
import Footer from "../components/footer";
import Services from "../components/services";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="relative space-y-7 md:space-y-16">
        <Banner className="absolute" />
        <AboutMe className="absolute" />
        <Services className="absolute" />
        <Contactme className="absolute" />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
