import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

// images
import lamp from "/public/images/lamp.jpg.webp";
import salad from "/public/images/salad.jpg.webp";
import woodcraft from "/public/images/woodcraft.jpg.webp";
import fuji from "/public/images/fuji.jpg.webp";
import liberty from "/public/images/liberty.jpg.webp";
import shutterbug from "/public/images/shutterbug.jpg.webp";
import user1 from "/public/images/user-01.jpg.webp";
import user2 from "/public/images/user-02.jpg";
import user3 from "/public/images/user-03.jpg";

// what we do
import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";
import TableViewIcon from "@mui/icons-material/TableView";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import WindowIcon from "@mui/icons-material/Window";
import WidgetsIcon from "@mui/icons-material/Widgets";

export const sideLinks = [
  { header: "home", href: "intro" },
  { header: "about", href: "whoweare" },
  { header: "services", href: "whatwedo" },
  { header: "works", href: "featured" },
  { header: "contact", href: "footer" },
];

export const sideLinksForIntro = [
  { header: "about", subheader: "who we are", href: "whoweare" },
  { header: "services", subheader: "what we do", href: "whatwedo" },
  { header: "contact", subheader: "get in touch", href: "footer" },
];

export const socialMedia = [
  {
    name: "facebook",
    href: "",
    icon: <FacebookOutlinedIcon fontSize="small" />,
  },
  { name: "x", href: "", icon: <XIcon fontSize="small" /> },
  { name: "linkedin", href: "", icon: <LinkedInIcon fontSize="small" /> },
];

export const opinions = [
  {
    name: "Tim Cook",
    position: "CEO, Apple",
    avatar: user1,
    words: `Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum.
          Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.`,
  },
  {
    name: "Sundar Pichai",
    position: "CEO, Google",
    avatar: user2,
    words: `Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
          Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.`,
  },
  {
    name: "Satya Nadella",
    position: "CEO, Microsoft",
    avatar: user3,
    words: `Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
          Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.`,
  },
];

export const images = [
  { src: lamp, alt: "lamp", description: "web design" },
  { src: fuji, alt: "fuji", description: "web design" },
  { src: salad, alt: "salad", description: "branding" },
  { src: liberty, alt: "liberty", description: "web development" },
  { src: woodcraft, alt: "woodcraft", description: "branding" },
  { src: shutterbug, alt: "shutterbug", description: "branding" },
];

export const numbers = [
  { num: 129, title: "awards recieved" },
  { num: 1507, title: "cups of coffee" },
  { num: 108, title: "projects completed" },
  { num: 103, title: "happy clients" },
];

export const whatWeDoInfo = [
  {
    name: "Brand Identity",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: <TvIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />,
  },
  {
    name: "Illustration",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <PublicIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Web Design",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <TableViewIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Product Strategy",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <ViewInArIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "UI/UX Design",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <WindowIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Mobile Development",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <WidgetsIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
];

export const whoWeAreInfo = [
  {
    name: "Define",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Design",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Build",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Launch",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
];
