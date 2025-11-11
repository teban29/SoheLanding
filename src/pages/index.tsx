import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";



export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Contact />
    </DefaultLayout>
  );
}
