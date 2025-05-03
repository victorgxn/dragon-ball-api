import {
  Hero,
  PowerLevelsSection,
  CtaSection,
  CharactersShowcase,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <CharactersShowcase />
      <PowerLevelsSection />
      <CtaSection />
    </main>
  );
}
