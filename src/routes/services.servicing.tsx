import { createFileRoute } from "@tanstack/react-router";
import { CallBand, EnquiryForm, PageHero, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { wheelGunModels } from "@/lib/catalog";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";

export const Route = createFileRoute("/services/servicing")({
  head: () => ({
    meta: [
      { title: "Paoli Wheel Gun Servicing & Repair | CES Europe Ltd" },
      {
        name: "description",
        content:
          "We fully service, diagnose and repair Paoli wheel guns with OEM parts. Every gun is torque tested with a performance graph against its serial number.",
      },
      { property: "og:title", content: "Paoli Wheel Gun Servicing & Repair | CES Europe Ltd" },
      {
        property: "og:description",
        content: "OEM parts, torque testing and a performance graph for every serviced gun.",
      },
    ],
  }),
  component: Servicing,
});

// Process taken from CES's current servicing page.
const steps = [
  { t: "Diagnose", d: "We fully diagnose your Paoli wheel gun and identify any faults." },
  {
    t: "Repair",
    d: "Service and repair with OEM parts from Paoli. We stock spares for all models of gun.",
  },
  {
    t: "Torque test",
    d: "On completion every gun is torque tested on our own torque testing unit.",
  },
  {
    t: "Performance graph",
    d: "We produce a performance graph against the serial number of your gun.",
  },
];

function Servicing() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Paoli wheel gun servicing and repair"
        image={servicingPhoto.url}
      />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHead eyebrow="How it works" title="Serviced, tested and certified" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We can fully service, diagnose and repair any fault on a Paoli wheel gun. All parts
              fitted are OEM parts from Paoli, and we cover the warranty on spares under our
              comprehensive public and product liability insurance policy.
            </p>
          </Reveal>
        </div>
        <div className="container-x mt-16">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 80} className="bg-background p-8">
                <p className="font-display text-sm text-primary">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHead eyebrow="Training" title="Prefer to service guns yourself?" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We train customers free of charge if they want to carry out servicing and repairs
              themselves. This training is mandatory before we can supply spare parts if you want
              them covered under our public and product liability insurance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="inverse section-y border-t border-border bg-deep">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHead eyebrow="Request a service" title="Tell us about your gun" />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            {/* TODO(client): confirm send-in process and turnaround times; add photo upload in the WordPress form. */}
            <EnquiryForm
              submitLabel="Request servicing"
              successMessage="Thank you. Your servicing request has been received and we will be in touch."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "team", label: "Team or company", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "model",
                  label: "Gun model",
                  type: "select",
                  options: [...wheelGunModels, "Other or not sure"],
                  required: true,
                },
                { name: "serial", label: "Serial number" },
                {
                  name: "service",
                  label: "What do you need?",
                  type: "select",
                  options: ["Service", "Repair", "Exchange", "Upgrade", "Training"],
                  required: true,
                },
                {
                  name: "urgency",
                  label: "Urgency",
                  type: "select",
                  options: ["Standard", "Urgent: event approaching"],
                },
                {
                  name: "message",
                  label: "Describe the fault or what you need",
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
