import About from "@/components/about";
import Education from "@/components/education";
import Work from "@/components/work";

import { getAbout, getEducation, getWork } from "@/components/prisma-actions";

export default async function Home() {
  const aboutData = await getAbout() || { id: 0, name: null, description: null };
  const educationData = await getEducation() || [];
  const workData = await getWork() || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="py-10 px-6 sm:px-6 sm:py-14 lg:px-8 space-y-12">
        <About aboutData={aboutData} />
        <Education educationData={educationData} />
        <Work workData={workData} />
      </div>
    </main>
  );
}
