import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CallBand, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | CES Europe Ltd" },
      {
        name: "description",
        content:
          "Paoli wheel gun servicing and repair, plus advice and consultation on wheel guns and air driven pit equipment, from CES Europe in Banbury.",
      },
      { property: "og:title", content: "Services | CES Europe Ltd" },
      {
        property: "og:description",
        content: "Servicing, repair, advice and consultation from the official UK Paoli agent.",
      },
    ],
  }),
  component: Services,
});

const items = [
  {
    to: "/services/servicing",
    title: "Servicing and repair",
    text: "Full service, diagnosis and repair of Paoli wheel guns, with OEM parts and a torque test certificate for every gun.",
    image: servicingPhoto.url,
  },
  {
    to: "/services/advice",
    title: "Advice and consultation",
    text: "Which gun suits your needs, and how to spec air driven equipment for your race series.",
    image: pitstop,
  },
] as const;

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Servicing, support and advice"
        image={pitstop}
        imageAlt="Pit crew changing a wheel on a single-seater race car in the pit lane"
      />
      <section className="section-y">
        <div className="container-x grid gap-px bg-border md:grid-cols-2">
          {items.map((s, i) => (
            <Reveal key={s.to} delay={i * 100}>
              <Link
                to={s.to}
                className="inverse group relative flex min-h-[26rem] flex-col justify-end overflow-hidden bg-surface p-8 md:aspect-[4/3] md:min-h-0 md:p-10"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-overlay" />
                <div className="relative max-w-md">
                  <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] transition-colors group-hover:text-primary">
                    Find out more{" "}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CallBand />
    </>
  );
}
