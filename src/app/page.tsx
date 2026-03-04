import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import SocialProof from "@/components/SocialProof";
import Pathway from "@/components/Pathway";
import FAQ from "@/components/FAQ";
import Founders from "@/components/Founders";
import WaitlistFooter from "@/components/WaitlistFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Vision />
        <SocialProof />
        <Pathway />
        <FAQ />
        <Founders />
      </main>
      <WaitlistFooter />
    </>
  );
}
