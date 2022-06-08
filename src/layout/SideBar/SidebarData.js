import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { PATHS } from "../../config/routes.config";

export const SidebarData = [
  {
    title: "داستان",
    path: " ",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "علمی و تخیلی ",
        path: `/Categories/${"1"}/${"علمی وتخیلی "}`,
      },
      {
        title: "رمان",
        path: `/Categories/${"1"}/${"رمان"}`,
      },
      {
        title: "زندگینامه",
        path: `/Categories/${"1"}/${"زندگینامه"}`,
      },
    ],
  },
  {
    title: "ادبیات ",
    path: "",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "ادبیات معاصر",
        path: `/Categories/${"4"}/${"ادبیات معاصر"}`,

        cName: "sub-nav",
      },
      {
        title: "ادبیات ایران",
        path: `/Categories/${"4"}/${"ادبیات ایران"}`,
        cName: "sub-nav",
      },
      {
        title: "کتب شعر ",
        path: `/Categories/${"4"}/${"کتب شعر"}`,
      },
    ],
  },
  {
    title: "آشپزی ",
    path: " ",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "غذاهای فست فود",
        path: `/Categories/${"2"}/${"فست فود"}`,

        cName: "sub-nav",
      },
      {
        title: "انواع دسر و کیک و بستنی",
        path: `/Categories/${"2"}/${"انواع دسر و کیک و بستنی"}`,

        cName: "sub-nav",
      },
      {
        title: "غذاهای سنتی",
        path: `/Categories/${"2"}/${"غذاهای سنتی"}`,
      },
    ],
  },
  {
    title: "آموزشی  ",
    path: " ",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "مهارتی",
        path: `/Categories/${"3"}/${"مهارتی"}`,

        cName: "sub-nav",
      },
      {
        title: "کتب دانشگاهی و دبیرستان",
        path: `/Categories/${"3"}/${"کتب دانشگاهی و دبیرستان"}`,

        cName: "sub-nav",
      },
      {
        title: "کتب کنکوری ",
        path: `/Categories/${"3"}/${"کتب کنکوری"}`,
      },
    ],
  },
  {
    title: "هنری",
    path: ``,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "هنر هفتم",
        path: `/Categories/${"5"}/${"هنر هفتم"}`,
        cName: "sub-nav",
      },
      {
        title: "فیلمبرداری و عکاسی",
        path: `/Categories/${"5"}/${"فیلمبرداری وعکاسی"}`,
        cName: "sub-nav",
      },
      {
        title: "معماری ",
        path: `/Categories/${"5"}/${"معماری"}`,
      },
    ],
  },
];
