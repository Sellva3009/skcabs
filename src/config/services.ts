import type {
  FaqItem,
  FeatureItem,
  HeroHighlight,
  ServiceArea,
  Testimonial,
} from "@/types";

export const heroHighlights: HeroHighlight[] = [
  { id: "seater", label: "7-Seater AC Ertiga" },
  { id: "driver", label: "Experienced Driver" },
  { id: "travel", label: "Local & Outstation Travel" },
  { id: "trips", label: "One-Way & Round Trips" },
  { id: "advance", label: "Advance Booking" },
];

export const features: FeatureItem[] = [
  {
    id: "ac-ertiga",
    icon: "car",
    title: "Comfortable 7-Seater AC Ertiga",
    description:
      "Petrol Maruti Suzuki Ertiga with air-conditioning and seating for up to seven passengers.",
  },
  {
    id: "chauffeur",
    icon: "user",
    title: "Chauffeur-Driven Service",
    description:
      "Travel with a dedicated driver so your family can relax on local and highway journeys.",
  },
  {
    id: "family",
    icon: "users",
    title: "Family and Group Travel",
    description:
      "Space for parents, children and luggage without splitting the group across two cars.",
  },
  {
    id: "local",
    icon: "map-pin",
    title: "Local City Travel",
    description:
      "Hour-and-kilometre packages for Hosur, Krishnagiri, Dharmapuri and Salem city trips.",
  },
  {
    id: "outstation",
    icon: "route",
    title: "Outstation Trips",
    description:
      "Intercity Ertiga rentals billed on kilometres, with driver allowance where applicable.",
  },
  {
    id: "oneway",
    icon: "arrow-right",
    title: "One-Way Drops",
    description:
      "Point-to-point drops when you do not need a return. Confirm the one-way rate for your route.",
  },
  {
    id: "airport",
    icon: "plane",
    title: "Airport Transfers",
    description:
      "Hosur to Bengaluru Airport pickup and drop in the Ertiga. Share your flight details for timing.",
  },
  {
    id: "fare",
    icon: "receipt",
    title: "Transparent Fare Quotations",
    description:
      "Ask on WhatsApp for a written fare range before you confirm. Tolls and parking are extra.",
  },
  {
    id: "advance",
    icon: "calendar",
    title: "Advance Booking",
    description:
      "Reserve the vehicle for a future date subject to availability. Early messages help us plan.",
  },
  {
    id: "assist",
    icon: "headset",
    title: "Personalised Trip Assistance",
    description:
      "Tell us pickup, destination and passenger count. We help you choose local or outstation billing.",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    id: "hosur",
    city: "Hosur",
    state: "Tamil Nadu",
    title: "Ertiga Taxi Service in Hosur",
    summary:
      "Based around Hosur, this chauffeur-driven Ertiga is a practical choice for SIPCOT staff movement, family visits across the Tamil Nadu–Karnataka border, and early Bengaluru Airport drops. The 7-seater suits parents travelling with children plus luggage that would not fit in a sedan.",
    highlights: [
      "Local hourly packages for Hosur city and industrial areas",
      "One-way and round trips toward Bengaluru and Krishnagiri",
      "Airport transfer enquiries for Kempegowda International Airport",
    ],
    nearby: ["Bengaluru", "Electronic City", "Krishnagiri", "Bagalur"],
    futurePath: "/hosur/ertiga-taxi",
  },
  {
    id: "krishnagiri",
    city: "Krishnagiri",
    state: "Tamil Nadu",
    title: "Ertiga Taxi Service in Krishnagiri",
    summary:
      "Krishnagiri travellers can book the same petrol Ertiga for district headquarters visits, mango-season family travel, and onward rides to Hosur or Salem. A chauffeur-driven 7-seater is useful when elders and children share the same itinerary.",
    highlights: [
      "Pickup from Krishnagiri town and nearby villages by arrangement",
      "Outstation drops toward Salem, Dharmapuri and Hosur",
      "Round-trip day travel when you need the vehicle to wait",
    ],
    nearby: ["Hosur", "Bargur", "Rayakottai", "Salem"],
    futurePath: "/krishnagiri/ertiga-taxi",
  },
  {
    id: "dharmapuri",
    city: "Dharmapuri",
    state: "Tamil Nadu",
    title: "Ertiga Taxi Service in Dharmapuri",
    summary:
      "From Dharmapuri, families often need a larger cab for Hogenakkal day trips, function travel, and connections to Salem or Hosur. The Ertiga keeps the group together with AC cabin space and a driver who knows the NH44 corridor.",
    highlights: [
      "Hogenakkal round-trip enquiries",
      "Wedding and function pickup within the district",
      "One-way drops to Salem, Krishnagiri and Hosur",
    ],
    nearby: ["Hogenakkal", "Pennagaram", "Harur", "Salem"],
    futurePath: "/dharmapuri/ertiga-taxi",
  },
  {
    id: "salem",
    city: "Salem",
    state: "Tamil Nadu",
    title: "Ertiga Taxi Service in Salem",
    summary:
      "Salem bookings cover city sightseeing, temple visits, railway-station pickups and outstation rides toward Dharmapuri, Krishnagiri or Hosur. Car rental with a driver in a 7-seater is aimed at families who prefer not to self-drive on long stretches.",
    highlights: [
      "Local Salem packages billed on hours and kilometres",
      "Hogenakkal and Dharmapuri day trips",
      "Outstation Ertiga travel along the Hosur–Salem belt",
    ],
    nearby: ["Yercaud", "Dharmapuri", "Namakkal", "Hogenakkal"],
    futurePath: "/salem/ertiga-taxi",
  },
];

/**
 * Add genuine reviews here after customers share permission to publish.
 * Leave empty to show the launch empty state. Do not invent names or ratings.
 */
export const testimonials: Testimonial[] = [];

export const faqs: FaqItem[] = [
  {
    id: "family",
    question: "Is the Ertiga available for family trips?",
    answer:
      "Yes. The chauffeur-driven Ertiga is intended for families and small groups who need seven seats and luggage space for local or outstation journeys.",
  },
  {
    id: "oneway",
    question: "Do you provide one-way taxi services?",
    answer:
      "Yes. One-way drops are available. The kilometre rate for one-way travel is different from round-trip billing. Ask on WhatsApp for the rate that applies to your destination.",
  },
  {
    id: "outstation",
    question: "Do you provide outstation taxi services?",
    answer:
      "Yes. Outstation trips are billed per kilometre. A daily driver allowance applies on qualifying outstation journeys, along with tolls and parking where incurred.",
  },
  {
    id: "airport",
    question: "Do you provide airport pickup and drop?",
    answer:
      "Yes. Airport transfers, including Hosur to Bengaluru Airport, can be arranged subject to vehicle availability. Share your pickup point and flight time for a quotation.",
  },
  {
    id: "fare",
    question: "How is the rental fare calculated?",
    answer:
      "Local packages are based on a block of hours and kilometres. Outstation trips are billed per kilometre. Extra hours, extra kilometres, driver allowance, tolls and parking may apply beyond the quoted package.",
  },
  {
    id: "tolls",
    question: "Are tolls and parking charges included?",
    answer:
      "No. Tolls, parking and similar trip expenses are billed separately as incurred. They are not bundled into the starting package fares.",
  },
  {
    id: "advance",
    question: "Can I book the Ertiga in advance?",
    answer:
      "Yes. Send your travel date, time, pickup and destination on WhatsApp. Advance booking depends on the vehicle being free for that slot.",
  },
  {
    id: "passengers",
    question: "How many passengers can travel?",
    answer:
      "The Ertiga can carry up to seven people including seating for children. Luggage capacity depends on how many passengers occupy the third row.",
  },
  {
    id: "sightseeing",
    question: "Do you provide local sightseeing packages?",
    answer:
      "Yes. Local sightseeing in Hosur and Salem can be billed under the 4-hour, 8-hour or 10-hour packages. Share your planned stops so we can check whether the kilometre limit is enough.",
  },
  {
    id: "confirm",
    question: "How can I confirm a booking?",
    answer:
      "Message or call on the listed WhatsApp number with passenger count, pickup, destination, date and time. A booking is confirmed only after we reply with availability and an agreed fare.",
  },
];
