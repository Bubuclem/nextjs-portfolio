import About from "@/components/about";
import Education from "@/components/education";
import Work from "@/components/work";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="py-10 px-6 sm:px-6 sm:py-14 lg:px-8 space-y-12">
        <About />
        <Education />
        <Work />
      </div>
    </main>
  );
}
