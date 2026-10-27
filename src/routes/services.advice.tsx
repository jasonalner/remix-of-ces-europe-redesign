import { createFileRoute } from "@tanstack/react-router";
import { CallBand, EnquiryForm, PageHero, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/services/advice")({
  head: () => ({
    meta: [
      { title: "Advice & Consultation | CES Europe Ltd" },
      {
        name: "description",
        content:
          "Advice from the official UK Paoli agent on which wheel gun suits your needs and how to spec air driven equipment for your race series.",
      },
      { property: "og:title", content: "Advice & Consultation | CES Europe Ltd" },
      {
        property: "og:description",
        content: "Choose the right wheel gun and air driven equipment for your series.",
      },
    ],
  }),
  component: Advice,
});

// TODO(client): confirm the scope of the advice and consultation service.
const topics = [
  {
    t: "Choosing a wheel gun",
    d: "Which Paoli gun will suit your team, your series and the way you run your stops.",
  },
  {
    t: "Air driven applications",
    d: "We can spec a range of air driven applications for any of the race series around the world.",
  },
  {
    t: "Your pit air system",
    d: "How compressors, cylinders, regulators, hoses and fittings fit together, from 2BAR to 300BAR.",
  },
];

function Advice() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advice and consultation"
        image={pitstop}
        imageAlt="Pit crew changing a wheel on a single-seater race car in the pit lane"
      />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHead eyebrow="How we can help" title="The right kit for your series" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As the official Paoli wheel gun agent, we can talk you through the options and
              recommend what suits your needs best. Tell us what you run and we will come back with
              advice.
            </p>
          </Reveal>
        </div>
        <div className="container-x mt-16">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {topics.map((s, i) => (
              <Reveal key={s.t} delay={i * 80} className="bg-background p-8">
                <p className="font-display text-sm text-primary">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="inverse section-y border-t border-border bg-deep">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHead eyebrow="Ask for advice" title="Tell us what you need" />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <EnquiryForm
              submitLabel="Request advice"
              successMessage="Thank you. Your request has been received and we will be in touch."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "team", label: "Team or company", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "series", label: "Race series", required: true },
                {
                  name: "topic",
                  label: "What do you need help with?",
                  type: "select",
                  options: [
                    "Choosing a wheel gun",
                    "Air driven applications",
                    "Pit air system",
                    "Something else",
                  ],
                  required: true,
                },
                {
                  name: "message",
                  label: "Tell us about your current setup and what you are looking for",
                  type: "textarea",
                  required: true,
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
      <CallBand />
    </>
  );
}
