import { createFileRoute } from "@tanstack/react-router";
import { ContactLines, EnquiryForm, SectionHead } from "@/components/site/Blocks";
import { TitleBand, StepBand } from "@/components/site/BoardBlocks";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { wheelGunModels } from "@/lib/catalog";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";

export const Route = createFileRoute("/services/servicing")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
 return <><TitleBand eyebrow="Servicing and repair" parent="Services" title="Paoli wheel gun servicing and repair"><p className="mt-6 max-w-3xl text-lg text-muted-foreground">Full service, diagnosis and repair of Paoli wheel guns, with OEM parts and a torque test certificate for every gun.</p><Button asChild size="lg" className="mt-6"><a href="#service-enquiry">Request servicing</a></Button></TitleBand>
 <section className="section-y"><div className="container-x grid items-start gap-12 lg:grid-cols-2"><Reveal><SectionHead eyebrow="How it works" title="Serviced, tested and certified"/><p className="mt-6 text-lg leading-relaxed text-muted-foreground">We can fully service, diagnose and repair any fault on a Paoli wheel gun. All parts fitted are OEM parts from Paoli, and we cover the warranty on spares under our comprehensive public and product liability insurance policy.</p></Reveal><img src={servicingPhoto.url} alt="Paoli wheel gun servicing at CES Europe" className="aspect-[4/3] w-full object-cover"/></div></section>
 <StepBand eyebrow="How it works" title="Serviced, tested and certified" steps={steps}/>
 <section id="service-enquiry" className="section-y scroll-mt-20"><div className="container-x"><SectionHead eyebrow="Request a service" title="Tell us about your gun"/><div className="mt-10 max-w-4xl"><EnquiryForm submitLabel="Request servicing" successMessage="Thank you. Your servicing request has been received and we will be in touch." fields={[
 {name:"model",label:"Gun model",type:"select",options:[...wheelGunModels,"Other or not sure"],required:true},
 {name:"serial",label:"Serial number"},
 {name:"message",label:"Describe the fault or what you need",type:"textarea",required:true},
 {name:"urgency",label:"Urgency",type:"select",options:["Standard","Urgent: event approaching"],wide:true},
 {name:"service",label:"What do you need?",type:"select",options:["Service","Repair","Exchange","Upgrade","Training"],required:true,wide:true},
 {name:"name",label:"Name",required:true},{name:"team",label:"Team or company",required:true},
 {name:"email",label:"Email",type:"email",required:true},{name:"phone",label:"Phone",type:"tel"}
 ]}/></div></div></section>
 <section className="section-y border-t border-border bg-surface"><div className="container-x grid gap-6 lg:grid-cols-3"><article className="border border-border bg-card p-8"><h2 className="text-xl font-semibold">Prefer to service guns yourself?</h2><p className="mt-4 text-muted-foreground">We train customers free of charge if they want to carry out servicing and repairs themselves. This training is mandatory before we can supply spare parts if you want them covered under our public and product liability insurance.</p></article><article className="border border-border bg-card p-8"><h2 className="text-xl font-semibold">OEM parts only</h2><p className="mt-4 text-muted-foreground">Service and repair with OEM parts from Paoli. We stock spares for all models of gun.</p></article><article className="border border-border bg-card p-8"><h2 className="text-xl font-semibold">Prefer to talk it through?</h2><ContactLines className="mt-5 text-muted-foreground"/></article></div></section></>;
}
