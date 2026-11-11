import { createFileRoute } from "@tanstack/react-router";
import { CallBand, EnquiryForm, SectionHead } from "@/components/site/Blocks";
import { TitleBand, StepBand } from "@/components/site/BoardBlocks";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import { Reveal } from "@/components/site/Reveal";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/services/advice")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
 return <><TitleBand eyebrow="Advice and consultation" parent="Services" title="Advice and consultation"><p className="mt-6 max-w-3xl text-lg text-muted-foreground">As the official Paoli wheel gun agent, we can talk you through the options and recommend what suits your needs best. Tell us what you run and we will come back with advice.</p><Button asChild size="lg" className="mt-6"><a href="#advice-enquiry">Request advice</a></Button></TitleBand>
 <section className="section-y"><div className="container-x"><SectionHead eyebrow="How we can help" title="The right kit for your series"/><div className="mt-10 grid gap-6 md:grid-cols-3">{topics.map((s,i)=><Reveal key={s.t} delay={i*80} className="overflow-hidden border border-border bg-card"><img src={i===0?categories[0]?.image:i===1?pitstop:categories[3]?.image} alt={s.t} className="aspect-[16/9] w-full object-cover"/><div className="p-8"><p className="font-display text-sm text-primary">0{i+1}</p><h3 className="mt-4 text-xl font-semibold">{s.t}</h3><p className="mt-3 text-muted-foreground">{s.d}</p></div></Reveal>)}</div></div></section>
 <StepBand eyebrow="Advice and consultation" title="The right kit for your series" steps={[{t:"Tell us what you need",d:"Tell us your team, your series and the way you run your stops."},{t:"Talk through the options",d:"As the official Paoli wheel gun agent, we can talk you through the options."},{t:"The right kit for your series",d:"We can recommend what suits your needs best."},{t:"Pit equipment, support and advice",d:"New sales, servicing and upgrades from the official Paoli agent."}]}/>
 <section id="advice-enquiry" className="section-y scroll-mt-20"><div className="container-x"><SectionHead eyebrow="Ask for advice" title="Tell us what you need"/><div className="mt-10 max-w-4xl"><EnquiryForm submitLabel="Request advice" successMessage="Thank you. Your request has been received and we will be in touch." fields={[
 {name:"name",label:"Name",required:true},{name:"team",label:"Team or company",required:true},
 {name:"email",label:"Email",type:"email",required:true},{name:"phone",label:"Phone",type:"tel"},
 {name:"series",label:"Race series",required:true,wide:true},
 {name:"topic",label:"What do you need help with?",type:"select",options:["Choosing a wheel gun","Air driven applications","Pit air system","Something else"],required:true,wide:true},
 {name:"message",label:"Tell us about your current setup and what you are looking for",type:"textarea",required:true},
 {name:"contact",label:"Preferred contact method",type:"select",options:["Email","Phone"],wide:true}
 ]}/></div></div></section><CallBand/></>;
}
