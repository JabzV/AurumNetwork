import { Layout } from "./components/Layout";
import { DiscoverSection } from "./components/sections/DiscoverSection";
import { DownloadSection } from "./components/sections/DownloadSection";
import { EcosystemSection } from "./components/sections/EcosystemSection";
import { FAQSection } from "./components/sections/FAQSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ReviewSection } from "./components/sections/ReviewSection";
import { WhyAurumSection } from "./components/sections/WhyAurumSection";
import { LineDivider } from "./components/shared/LineDivider";

function App() {
  return <Layout title="LivesWealth - Gold Monetization Made Easy">
    <HeroSection />
        <LineDivider />

    <WhyAurumSection />
        <LineDivider />

    <DiscoverSection />
        <LineDivider />

    <ReviewSection />
        <LineDivider />

    <FAQSection />
        <LineDivider />

    <DownloadSection />
        <LineDivider />
        
    <EcosystemSection />

  </Layout>;
}

export default App;
