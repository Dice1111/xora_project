import Download from "@/components/sections/Download";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Faq></Faq>
      <Testimonials></Testimonials>
      <Download></Download>
    </main>
  );
}
