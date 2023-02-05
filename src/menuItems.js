export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Mâncăruri",
    url: "/foods",
  },
  {
    title: "Dulciuri",
    url: "/desserts",
    submenu: [
      {
        title: "Prajituri",
        url: "sweets",
      },
      {
        title: "Torturi",
        url: "cakes",
      },
    ],
  },
  {
    title: "Reţete de post",
    url: "/fasting-recipes",
    submenu: [
      {
        title: "Dulciuri de post",
        url: "fasting-sweets",
      },
      {
        title: "Mâncăruri de post",
        url: "fasting-foods",
      },
    ],
  },
];
