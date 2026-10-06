export type FaqItem = { q: string; a: string };
export type FaqTab = { id: string; label: string; items: FaqItem[] };

export const faqTabs: FaqTab[] = [
  {
    id: "consultation",
    label: "Consultation",
    items: [
      { q: "How long does a consultation take?", a: "Usually 30 to 45 minutes. We take time to understand your needs and answer your questions properly." },
      { q: "What happens in the consultation?", a: "We discuss your hair goals, look at the area you would like to address, and guide you towards the most suitable options." },
      { q: "Can I consult online as well as in person?", a: "Yes. You can meet us online or visit our Khar West studio—choose the option that feels easier for you." },
      { q: "Where is your hair extensions store located?", a: "We are on the 4th floor of Empressa Building, 2nd Road, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052." },
      { q: "Will I be pressured to buy during the consultation?", a: "No. The consultation is for clear, honest advice so you can decide what feels right for you." },
    ],
  },
  {
    id: "extensions",
    label: "Permanent Extensions",
    items: [
      { q: "Can I go swimming with hair extensions?", a: "Yes, occasional swimming is possible. Wet the lengths with clean water first, secure them in a loose braid or ponytail, rinse immediately afterwards, and dry the roots and attachment areas thoroughly." },
      { q: "Can I wear hair extensions every day?", a: "Yes, when the method suits your natural hair and routine. Clip-ins should be removed at night, while professionally fitted extensions are intended for longer wear and need regular maintenance." },
      { q: "Are hair extensions permanent?", a: "No. Permanent extensions are professionally fitted for longer wear, then removed and refitted as your own hair grows." },
      { q: "How can I keep my extensions in good condition?", a: "Detangle gently from the ends upward, use products recommended for human-hair extensions, keep hot tools away from attachment points, and attend maintenance appointments on time." },
      { q: "Can hair extensions damage natural hair?", a: "They can cause damage if they are too heavy, fitted too tightly, poorly maintained, left in too long, or removed incorrectly. The right method, professional fitting and aftercare reduce that risk." },
    ],
  },
  {
    id: "toppers",
    label: "Toppers",
    items: [
      { q: "How do I measure for the size topper I need?", a: "We have a detailed video that shows how to measure for a human-hair silk topper. Our team can also guide you through the measurement during a consultation." },
      { q: "How do I place a hair topper on my head?", a: "Our technicians will train you when you collect your topper from the salon, so you can feel confident placing it yourself." },
      { q: "Can I take my topper to my stylist to have it cut?", a: "Yes, but we cannot take responsibility for work completed outside our salon because we do not know the technique used on the topper." },
      { q: "Can a hair topper be coloured?", a: "Yes. Our silk-base toppers can be coloured much like your own hair, ideally by an experienced professional." },
      { q: "How are hair toppers attached?", a: "Silk and lace toppers can be secured with bonded glue, or attached to your own hair with clips depending on the base and fitting method." },
    ],
  },
  {
    id: "wigs",
    label: "Wigs",
    items: [
      { q: "How do I choose the right wig?", a: "We help you choose a cap, length, texture and colour that suit your lifestyle and the look you want to achieve." },
      { q: "Can a wig be cut or styled?", a: "Yes. Human-hair wigs can be cut and styled to personalise the finish. We recommend having this done by a professional familiar with wigs." },
      { q: "How do I care for a human-hair wig?", a: "Gently detangle it before washing, use suitable shampoo and conditioner, and store it on a stand away from heat and direct sunlight." },
      { q: "Can I wear a wig every day?", a: "Yes, with the right fit and care routine. We can help you find an option that feels comfortable for your usual day." },
      { q: "Will you help me match the wig colour?", a: "Yes. Share daylight photos online or visit our studio and we will help you find the closest, most natural-looking match." },
    ],
  },
  {
    id: "hairline",
    label: "Hairline",
    items: [
      { q: "What can help me achieve a fuller-looking hairline?", a: "A well-matched silk or lace topper can help create a softer, fuller-looking front hairline. The best option depends on your natural hair, the coverage you need and how you prefer to wear it." },
      { q: "Will a hairline solution look natural?", a: "A natural finish comes from the right shade, density and placement. We focus on blending the piece with your own hair and face shape." },
      { q: "How is a hairline piece secured?", a: "The attachment method depends on the product and your needs. Our team will explain the available options and the care each one requires." },
      { q: "Can I style my hair after fitting a hairline solution?", a: "Yes. We will show you which styling techniques and products are best suited to your chosen hairline solution." },
      { q: "How do I know which hairline solution is right for me?", a: "A consultation is the best place to start. We consider your natural hair, preferred styling and the coverage you would like before making a recommendation." },
    ],
  },
];
