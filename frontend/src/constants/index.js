import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];


export const stats = [
    {value: "250+", label: "Products"},
    {value: "10", label: "Shops"},
    {value: "8k+", label: "Customers"},
]

export const services = [
  {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Roses", link: "/" },
          { name: "Lilies", link: "/" },
          { name: "Tulips", link: "/" },
          { name: "Begonias", link: "/" },
          { name: "Sunflowers", link: "/" },
          { name: "Baby Breaths", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "hello@pb.com", link: "mailto:hello@pb.com" },
          { name: "+65 6123 4567", link: "tel:+6561234567" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];