import people01 from "../assets/people01.png";
import people02 from "../assets/people02.png";
import people03 from "../assets/people03.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";
import send from "../assets/Send.svg";
import shield from "../assets/Shield.svg";
import star from "../assets/Star.svg";

const BASE_URL = "#/";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "features", title: "Features" },
  { id: "product", title: "Product" },
  { id: "clients", title: "Clients" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  { id: "stats-1", title: "User Active", value: "3800+" },
  { id: "stats-2", title: "Trusted by Company", value: "230+" },
  { id: "stats-3", title: "Transaction", value: "$230M+" },
];

export const footerLinkItems = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: `${BASE_URL}content/`,
      },
      {
        name: "How it Works",
        link: `${BASE_URL}how-it-works/`,
      },
      {
        name: "Create",
        link: `${BASE_URL}create/`,
      },
      {
        name: "Explore",
        link: `${BASE_URL}explore/`,
      },
      {
        name: "Terms & Services",
        link: `${BASE_URL}terms-and-services/`,
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: `${BASE_URL}help-center/`,
      },
      {
        name: "Partners",
        link: `${BASE_URL}partners/`,
      },
      {
        name: "Suggestions",
        link: `${BASE_URL}suggestions/`,
      },
      {
        name: "Blog",
        link: `${BASE_URL}blog/`,
      },
      {
        name: "Newsletters",
        link: `${BASE_URL}newsletters/`,
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: `${BASE_URL}our-partner/`,
      },
      {
        name: "Become a Partner",
        link: `${BASE_URL}become-a-partner/`,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
    name: "Airbnb",
  },
  {
    id: "client-2",
    logo: binance,
    name: "Binance",
  },
  {
    id: "client-3",
    logo: coinbase,
    name: "Coinbase",
  },
  {
    id: "client-4",
    logo: dropbox,
    name: "Dropbox",
  },
];
