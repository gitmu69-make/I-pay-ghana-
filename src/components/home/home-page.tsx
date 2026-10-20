import {
  ArrowLeftRight,
  ArrowRight,
  Headset,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Store,
  Eye,
  Wallet,
} from "lucide-react";
import { ButtonLink } from "@/components/site/button";
import { InquiryForm } from "@/components/site/inquiry-form";
import { PhoneMock } from "@/components/site/phone-mock";
import { stories } from "@/lib/content";

const contactSubjects = [
  "General question",
  "Products",
  "Business payments",
  "Support",
  "Something else",
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ProductRow />
      <BenefitsSection />
      <HowItWorksSection />
      <SecuritySection />
      <PaymentMethodsSection />
      <TestimonialsSection />
      <ContactSection />
      <FinalCta />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="bg-pale">
      <div className="mx-auto grid max-w-7xl lg:min-h-screen lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-forest px-5 py-14 text-paper sm:px-10 lg:order-1 lg:px-14 lg:py-20">
          <p className="text-xs font-semibold tracking-widest text-leaf">YOUR MONEY. YOUR WAY.</p>
          <h1 className="mt-4 max-w-md text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
            Pay smarter.
            <span className="mt-2 block">Live better.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
            Discover a simpler way to manage everyday payments with I Pay Ghana. Built around the needs of people and businesses in Ghana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/get-started" className="bg-paper text-forest hover:bg-mint">
              Get Started
            </ButtonLink>
            <ButtonLink to="/" hash="solutions" variant="outlineLight">
              Explore Our Solutions
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/75">
            This website does not open accounts or move money. Sample balances elsewhere are illustrations.
          </p>
        </div>
        <div className="order-1 min-h-80 lg:order-2 lg:min-h-full">
          <img
            src="/images/hero.jpg"
            alt="Two young adults in a bright Accra café, one holding a phone while the other passes a paper bag."
            width={1792}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          kicker="Our solutions"
          title="Payments made simpler."
          text="Explore digital payment solutions designed to make everyday financial transactions more convenient."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-card bg-mint p-6 sm:p-8">
            <PhoneMock />
            <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-ink">Make payments with ease</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              Explore a simpler digital payment experience designed to help you manage transactions conveniently.
            </p>
            <div className="mt-6">
              <ButtonLink to="/solutions/payments" variant="outlineGreen">
                Explore Payments
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-card bg-mint">
            <img
              src="/images/business.jpg"
              alt="A Ghanaian shop owner checks a phone behind a wooden counter."
              width={1728}
              height={1152}
              className="h-72 w-full object-cover sm:h-80"
            />
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-3xl font-extrabold tracking-tight text-ink">Built for everyday business</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Discover digital payment experiences designed around the needs of Ghanaian entrepreneurs and growing businesses.
              </p>
              <div className="mt-6">
                <ButtonLink to="/solutions/business" variant="outlineGreen">
                  Explore Business Solutions
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const productCards = [
  {
    icon: ArrowLeftRight,
    title: "Send money",
    text: "Explore convenient ways to move money between supported accounts.",
    to: "/products/send-money",
  },
  {
    icon: ReceiptText,
    title: "Pay bills",
    text: "Discover digital payment options for everyday bills and expenses.",
    to: "/products/pay-bills",
  },
  {
    icon: Store,
    title: "Business collections",
    text: "Explore payment collection solutions for businesses.",
    to: "/products/business-collections",
  },
];

export function ProductRow() {
  return (
    <section id="products" className="scroll-mt-20 bg-foam px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          kicker="Categories"
          title="Three ways to look closer."
          text="These are proposed service categories, not a list of live products."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {productCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-card bg-paper p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint text-forest">
                <card.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
              <div className="mt-6">
                <ButtonLink to={card.to} variant="outlineGreen">
                  Learn more
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Smartphone, title: "Convenient payments", text: "Explore simpler ways to handle supported everyday transactions." },
  { icon: Store, title: "Business-friendly solutions", text: "Discover payment experiences designed with small businesses in mind." },
  { icon: Eye, title: "Clear transactions", text: "Give users a clear, easy-to-understand view of their payment activity." },
  { icon: Wallet, title: "Digital convenience", text: "Access digital experiences designed for everyday use." },
  { icon: Headset, title: "Customer support", text: "Find the information and assistance you need when using our services." },
];

export function BenefitsSection() {
  return (
    <section className="bg-mint px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            kicker="Why I Pay Ghana"
            title="More convenience. More possibilities."
            text="Discover how a thoughtful digital payment experience can help simplify everyday financial activities."
          />
          <ButtonLink to="/contact" variant="secondary" className="shrink-0 self-start">
            Contact our team
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-card bg-paper p-5 shadow-soft ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <item.icon className="size-5 text-forest" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Get started", text: "Discover I Pay Ghana and follow the available onboarding instructions." },
  { n: "02", title: "Set up", text: "Complete the required setup steps for the service you want to use." },
  { n: "03", title: "Make a payment", text: "Follow the instructions for your selected payment method and confirm the transaction details." },
  { n: "04", title: "Track your activity", text: "Review available transaction confirmations and activity records." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-forest px-4 py-20 text-paper sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <PhoneMock captionClassName="text-paper/75" />
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">How I Pay Ghana works</h2>
          <p className="mt-4 max-w-md text-lg text-paper/80">Simple experiences. Clear steps. Digital convenience.</p>
          <ol className="mt-10">
            {steps.map((step, index) => (
              <li key={step.n} className={`grid grid-cols-[auto_1fr] gap-4 py-5 ${index > 0 ? "border-t border-paper/15" : ""}`}>
                <span className="text-3xl font-extrabold tabular-nums text-leaf">{step.n}</span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/80">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-paper/70">These steps describe the intended journey. Live onboarding is not open on this website.</p>
        </div>
      </div>
    </section>
  );
}

const security = [
  { icon: ShieldCheck, title: "Account security", text: "Encourage secure account access and responsible handling of login credentials." },
  { icon: Eye, title: "Payment transparency", text: "Help users understand transaction details, applicable charges, and payment confirmations." },
  { icon: Headset, title: "Customer assistance", text: "Provide clear guidance on how to contact the appropriate support team." },
];

export function SecuritySection() {
  return (
    <section id="security" className="scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          kicker="Care"
          title="Your payments deserve care."
          text="Clear information, careful handling of account details, and transparent payment processes matter."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {security.map((item) => (
            <article key={item.title} className="rounded-card border border-line bg-paper p-6">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-pale text-forest">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          I Pay Ghana does not claim a licence, deposit protection, or a fraud guarantee on this website. If regulated activity is offered later, the licensed entity and the applicable terms will be named here.
        </p>
      </div>
    </section>
  );
}

export function PaymentMethodsSection() {
  return (
    <section id="payments" className="scroll-mt-20 bg-pale px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionIntro
            kicker="Methods"
            title="Designed for the way Ghana pays."
            text="Explore the available payment methods and follow the instructions provided for your selected service."
          />
          <ul className="mt-8 space-y-3">
            {["Mobile money", "Bank payments", "Other supported digital channels"].map((item) => (
              <li key={item} className="rounded-card border border-line bg-paper px-5 py-4">
                <p className="font-semibold text-ink">{item}</p>
                <p className="mt-1 text-sm text-muted">Shown as a category only. No provider is listed until an integration is confirmed.</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/images/hands.jpg"
          alt="Hands holding a phone over a wooden counter beside cedis and a blank receipt."
          width={1600}
          height={1200}
          className="h-80 w-full rounded-card object-cover sm:h-96"
        />
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="stories" className="scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          kicker="Sample stories"
          title="Built around everyday needs."
          text="Digital financial experiences should work for real people and real businesses. The notes below are sample copy for the design, not customer reviews."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <figure key={story.name} className="overflow-hidden rounded-card bg-foam shadow-soft">
              <img src={story.image} alt={story.alt} width={1200} height={1600} className="h-72 w-full object-cover object-top" />
              <figcaption className="p-5">
                <p className="text-sm leading-relaxed text-ink">“{story.quote}”</p>
                <p className="mt-4 font-semibold text-ink">{story.name}</p>
                <p className="text-xs text-muted">{story.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-foam px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Let’s talk.</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Have a question about I Pay Ghana? Get in touch to learn more about our services and available support.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <Detail term="Phone" value="A verified business number has not been published." />
            <Detail term="Email" value="A verified business email has not been published." />
            <Detail term="Office" value="A verified address has not been published." />
            <Detail term="Hours" value="Business hours have not been published." />
          </dl>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Call, email, and directions stay off this page until those details are confirmed. The form checks what you type, then clears it. It does not send anything.
          </p>
        </div>
        <div className="rounded-card border border-line bg-paper p-5 shadow-soft sm:p-7">
          <InquiryForm subjects={contactSubjects} idPrefix="home-contact" />
        </div>
      </div>
    </section>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-b border-line pb-3">
      <dt className="font-semibold text-ink">{term}</dt>
      <dd className="mt-1 text-muted">{value}</dd>
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-card bg-forest px-6 py-16 text-paper sm:px-12 md:py-20">
        <div className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full border border-paper/15" aria-hidden="true" />
        <div className="pointer-events-none absolute right-10 top-10 size-36 rounded-full border border-leaf/50" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-8 bottom-0 size-40 rounded-full border border-paper/10" aria-hidden="true" />
        <div className="relative max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Ready to make payments simpler?</h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">
            Explore I Pay Ghana and discover a digital payment experience designed around everyday needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/get-started" className="bg-paper text-forest hover:bg-mint">
              Get Started
            </ButtonLink>
            <ButtonLink to="/contact" variant="outlineLight">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-widest text-forest uppercase">{kicker}</p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>
    </div>
  );
}
