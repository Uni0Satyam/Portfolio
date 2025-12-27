import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HeroSection = () => {
  return (
    <section className="w-full grid sm:grid-cols-2 px-8 md:px-12 lg:px-24 xl:px-32
    py-30 gap-8 items-center">
      <LeftSection></LeftSection>
      <RightSection></RightSection>
    </section>
  );
};

export default HeroSection;