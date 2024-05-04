import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigFlower1, bigFlower2, bigFlower3, thumbnailFlower1, thumbnailFlower2, thumbnailFlower3 } from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "About Us" },
  { href: "/flowers/view", label: "Products" },
  { href: "/", label: "Contact Us" },
  { href: "/cart", label: "Cart" },
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

export const mainFlowers = [
    {
        thumbnail: thumbnailFlower1,
        bigFlowerImg: bigFlower1,
    },
    {
        thumbnail: thumbnailFlower2,
        bigFlowerImg: bigFlower2,
    },
    {
        thumbnail: thumbnailFlower3,
        bigFlowerImg: bigFlower3,
    },
];