import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiOutlineInstagram,
  } from "react-icons/ai";
  
  export const MenuItems = [
    {
      menuItem: <AiFillLinkedin />,
      url: "https://linkedin.com",
    },
    {
      menuItem: <AiFillGithub />,
      url: "https://github.com",
    },
    // {
    //   menuItem: <AiOutlineInstagram />,            // todo: <-- MAKE VISIBLE WHEN READY
    //   url: "https://instagram.com",
    // },
    {
      menuItem: <AiFillMail />,
      url: "mailto: elsahvy@gmail.com",
    },
  ];