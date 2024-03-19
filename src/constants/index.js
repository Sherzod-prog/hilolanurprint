import {
  faCalendarDays,
  faDesktop,
  faLayerGroup,
  faMoneyCheckDollar,
  faMoon,
  faPaintBrush,
  faPrint,
  faShield,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = [
  { name: "Главная", href: "/", icon: "/angles-right.svg" },
  { name: "О Нас", href: "/about", icon: "/angles-right.svg" },
  {
    name: "Продукция",
    href: "/products",
    icon: "/angles-right.svg",
  },
  {
    name: "Наши услуги",
    href: "/services",
    icon: "/angles-right.svg",
  },
  { name: "Контакты", href: "/contacts", icon: "/angles-right.svg" },
];
export const services = [
  {
    name: "Заказ любого объема",
    description:
      "Типография полного цикла предполагает изготовление заказа любого объема и сложности.",
    icon: faLayerGroup,
  },

  {
    name: "Доступные цены",
    description:
      "Мы гарантируем высочайшее качество печати по доступным ценам.",
    icon: faMoneyCheckDollar,
  },
  {
    name: "Соблюдение сроков сдачи",
    description:
      "Отлаженные процессы выполнения заказов гарантируют соблюдение оптимальных сроков.",
    icon: faCalendarDays,
  },
  {
    name: "Различные виды печати",
    description:
      "Представляем цифровую печать, офсетную печать, широкоформатную печать и т.д.",
    icon: faPrint,
  },
  {
    name: "Контроль качества",
    description:
      "На каждом этапе производства продукции специалисты тщательно следят за ее качеством.",
    icon: faShield,
  },
  {
    name: "Собственная дизайн-студия",
    description:
      "Наши дизайнеры настоящие профессионалы, воплощающие Ваше видение в чудесные макеты.",
    icon: faPaintBrush,
  },
];
export const catalogs = [
  { id: 1, catalog: "Визитки" },
  { id: 2, catalog: "Блокноты, брошюры" },
  { id: 3, catalog: "Журналы, каталоги" },
  { id: 4, catalog: "Книги, буклеты" },
  { id: 5, catalog: "Листовки, флаера" },
  { id: 6, catalog: "Фирменные папки" },
  { id: 7, catalog: "Бланки, квитанции" },
  { id: 8, catalog: "Дипломы, грамоты" },
  { id: 9, catalog: "Календари" },
  { id: 10, catalog: "Открытки" },
  { id: 11, catalog: "Бумажные пакеты" },
  { id: 12, catalog: "Конверты" },
  { id: 13, catalog: "Меню" },
  { id: 14, catalog: "Наклейки, стикеры" },
  { id: 15, catalog: "Пригласительные" },
  { id: 16, catalog: "Постеры, плакаты" },
  { id: 17, catalog: "Пластиковые карточки" },
  { id: 18, catalog: "Другое" },
];

export const portfolio = [
  { id: 1, img: "/portfolio/1.jpg" },
  { id: 2, img: "/portfolio/2.jpg" },
  { id: 3, img: "/portfolio/3.jpg" },
  { id: 4, img: "/portfolio/4.jpg" },
  { id: 5, img: "/portfolio/5.jpg" },
  { id: 6, img: "/portfolio/6.jpg" },
];
export const socilaIcons = [
  { id: 1, img: "/social/youtube.svg", url: "#" },
  { id: 1, img: "/social/facebook.svg", url: "#" },
  { id: 2, img: "/social/instagram.svg", url: "#" },
  { id: 3, img: "/social/telegram.svg", url: "#" },
];
export const options = [
  { icon: faSun, text: "light" },
  { icon: faMoon, text: "dark" },
  { icon: faDesktop, text: "system" },
];

export const ptext = "text-yellow-400 text-2xl font-bold tracking-[0.2em]";
export const htext =
  "font-bold text-3xl md:text-2xl sm:text-xl xs:text-xl my-2";
