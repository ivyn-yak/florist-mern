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
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
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
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];