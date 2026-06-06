import HackedText from "@/app/components/Branding/Cyberpunk/HackedText";
import WorksSection from "@/app/components/Sections/Works";
import { APPS_V1 } from "@/app/lib/constants/apps";
import { Anchor, Stack, Text } from "@mantine/core";

export const metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects",
    description: "List of projects I'm curious about and having fun doing.",
  },
};

export default function ProjectsPage() {
  return (
    <section className="container min-h-screen mx-auto flex flex-col justify-start gap-8 px-5 xl:px-0">
      <div className="container max-w-3xl mx-auto py-12">
        <Stack>
          <h2 className="uppercase">
            <HackedText text="Use some of my apps" />
          </h2>

          {APPS_V1.map((app, appIndex) => (
            <div key={`app-${appIndex}`} className="my-3">
              <Anchor
                href={app.link}
                {...(app.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                size="lg"
              >
                {app.title}
              </Anchor>
              <Text>{app.description}</Text>
            </div>
          ))}

          <div className="my-3">
            <Text>More coming soon!</Text>
          </div>
        </Stack>
      </div>

      <WorksSection />
    </section>
  );
}
