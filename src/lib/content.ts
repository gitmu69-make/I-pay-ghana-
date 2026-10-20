export type Story = {
  name: string;
  role: string;
  quote: string;
  image: string;
  alt: string;
};

export const stories: Story[] = [
  {
    name: "Ama",
    role: "Sample · neighbourhood shop",
    quote:
      "Sample story: a short checkout and a clear confirmation would help a busy counter stay moving.",
    image: "/images/portrait-ama.jpg",
    alt: "Portrait of a young Ghanaian woman with short twists, used as a sample story portrait for Ama.",
  },
  {
    name: "Kwame",
    role: "Sample · freelance work",
    quote:
      "Sample story: seeing who paid, and for what, would make a week of small jobs easier to follow.",
    image: "/images/portrait-kwame.jpg",
    alt: "Portrait of a young Ghanaian man in a chambray shirt, used as a sample story portrait for Kwame.",
  },
  {
    name: "Abena",
    role: "Sample · market stall",
    quote:
      "Sample story: a phone-based payment note would be easier to keep than a loose paper receipt.",
    image: "/images/portrait-abena.jpg",
    alt: "Portrait of a Ghanaian woman beside a market stall, used as a sample story portrait for Abena.",
  },
];

export type DetailPage = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  body: string[];
  notes: string[];
};

export const products: DetailPage[] = [
  {
    slug: "digital-payments",
    kicker: "Proposed experience",
    title: "Digital payments",
    summary:
      "A concept for a simpler screen where someone reviews who they are paying, the amount in Ghana cedis, and a confirmation.",
    body: [
      "This page describes a direction for I Pay Ghana. It is not a live payment service, and nothing on it can send or receive money.",
      "The idea is a short path: choose a supported method, check the details, and keep a record of what was confirmed.",
    ],
    notes: [
      "No wallets, merchant numbers, or USSD codes are published here.",
      "Charges, limits, and settlement times are not stated because they have not been set.",
    ],
  },
  {
    slug: "send-money",
    kicker: "Proposed category",
    title: "Send money",
    summary:
      "A concept for moving value between accounts that I Pay Ghana may support in the future.",
    body: [
      "People in Ghana already move money in many ways. This category is a placeholder for a clear send flow — recipient, amount, review, confirmation.",
      "Until a real integration exists, there is no recipient field to fill and no transfer to start.",
    ],
    notes: [
      "Supported account types have not been announced.",
      "Do not share PINs, one-time codes, or card numbers on this website.",
    ],
  },
  {
    slug: "pay-bills",
    kicker: "Proposed category",
    title: "Pay bills",
    summary:
      "A concept for paying everyday bills from one place, with the amount and the biller shown before anything is confirmed.",
    body: [
      "Bill payment is shown here as a product direction: a receipt-style summary, a clear amount in GHS, and a record afterwards.",
      "No billers, meter numbers, or collection accounts are listed, because none have been confirmed.",
    ],
    notes: [
      "A successful sample status in a mockup is not a receipt.",
      "Always use the instructions published by the biller you are paying.",
    ],
  },
  {
    slug: "business-collections",
    kicker: "Proposed category",
    title: "Business collections",
    summary:
      "A concept for shops and growing businesses that want a calmer way to record money coming in.",
    body: [
      "The collection idea is simple: a business sees what was paid, when, and the reference the customer used.",
      "It is not a point-of-sale terminal, a merchant account, or a settlement promise.",
    ],
    notes: [
      "No merchant ID is issued from this site.",
      "Payout timing and fees are unpublished.",
    ],
  },
];

export const solutions: DetailPage[] = [
  {
    slug: "payments",
    kicker: "For people",
    title: "Everyday payments",
    summary:
      "A proposed experience for personal payments — reviewed on a phone, confirmed in plain language, recorded so they can be looked up later.",
    body: [
      "I Pay Ghana is being shaped around daily life in Ghana: a shop purchase, a bill, a transfer to someone you know.",
      "This solution page explains that intent. It does not open an account or connect to mobile money, a bank, or a card scheme.",
    ],
    notes: [
      "Currency context is the Ghana cedi.",
      "Any balance shown elsewhere on the site is sample data.",
    ],
  },
  {
    slug: "business",
    kicker: "For businesses",
    title: "Business payments",
    summary:
      "A proposed experience for Ghanaian entrepreneurs who want payment activity to be easier to follow at the counter.",
    body: [
      "Small shops, stalls, and service businesses often juggle cash, transfers, and paper notes. The business direction is about clarity, not a stack of features.",
      "Nothing here enrols a business, issues a till number, or settles funds.",
    ],
    notes: [
      "Talk to the team through the contact form preview if you want to follow the work.",
      "Partnerships with payment providers are not claimed.",
    ],
  },
];

export function findPage(list: DetailPage[], slug: string) {
  return list.find((item) => item.slug === slug);
}
