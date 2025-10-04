import HowWeWork from '@/components/HowWeWork';
import FeaturedFrameworks from '@/components/FeaturedFrameworks';
import HowWeCanHelp from '@/components/HowWeCanHelp';
import TechStack from '@/components/TechStack';
import WhoWeAre from '@/components/WhoWeAre';
import WhyTurnKey from '@/components/WhyTurnKey';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Main content - navbar overlays on top */}
      <div>
        <HeroSection />
 
        <HowWeCanHelp />

        <WhoWeAre />

        <FeaturedFrameworks />

        <HowWeWork />

        <WhyTurnKey />

        <TechStack />

        <ContactForm />
       </div>
     </div>
   );
 }