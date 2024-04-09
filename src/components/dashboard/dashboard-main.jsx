import React from "react";
import "./dashboard-layout.css";
import {
  MdOutlineInventory,
  MdSpaceDashboard,
  MdContactSupport,
  MdStore,
  MdOutlineAddLink,
} from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import {
  FaBoxArchive,
  FaChartSimple,
  FaHandshakeAngle,
  FaRegCreditCard,
} from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { LuNewspaper } from "react-icons/lu";
import { GrAnalytics } from "react-icons/gr";

import LeftPanel from "./components/left-panel";
import TopPanel from "./components/top-panel";
import FooterPanel from "./components/footer-panel";
import { Link } from "react-router-dom";
import sabinet from "../../assets/repositories/sabinet.png";
import ajol from "../../assets/repositories/ajol.png";
import DonutChart from "./dashboard-pages/dashboard-graph-components/Donut";

// Main navigation links
const mainNavLinks = [
  { to: "/dashboard-main", label: "Dashboard", icon: "MdSpaceDashboard" },
  { to: "/analytics", label: "Analytics", icon: "GrAnalytics" },
  // { to: '/admin', label: 'Admin', icon: 'MdSpaceDashboard' },
  { to: "/journals", label: "Journals", icon: "GoPackage" },
  // { to: '/partners', label: 'Partners', icon: 'FaHandshakeAngle' },
  { to: "/indexers", label: "Indexers", icon: "MdOutlineInventory" },
  { to: "/repositories", label: "Repositories", icon: "FaBoxArchive" },
  { to: "/reviewers", label: "Reviewers", icon: "BsFillPersonFill" },
  // { to: '/channels', label: 'Channels', icon: 'MdOutlineAddLink' },
  { to: "/reports", label: "Reports", icon: "FaChartSimple" },
  { to: "/news", label: "News & Updates", icon: "LuNewspaper" },
];
const iconMapping = {
  MdSpaceDashboard: MdSpaceDashboard,
  GrAnalytics: GrAnalytics,
  RiMoneyDollarCircleFill: RiMoneyDollarCircleFill,
  GoPackage: GoPackage,
  FaHandshakeAngle: FaHandshakeAngle,
  MdOutlineInventory: MdOutlineInventory,
  FaRegCreditCard: FaRegCreditCard,
  BsFillPersonFill: BsFillPersonFill,
  MdOutlineAddLink: MdOutlineAddLink,
  FaChartSimple: FaChartSimple,
  FaBoxArchive: FaBoxArchive,
  MdStore: MdStore,
  MdContactSupport: MdContactSupport,
  AiTwotoneSetting: AiTwotoneSetting,
  LuNewspaper: LuNewspaper,
};


const data = [
  ["Journal 1", "Author 1", "2024-02-18", "Science", 25, "experiment, research, analysis", "Yes", "doi:10.1234/abcd.5678"],
  ["Journal 2", "Author 2", "2024-02-17", "Medicine", 42, "clinical trial, treatment, patients", "Yes", "doi:10.5678/efgh.9012"],
  ["Journal 3", "Author 3", "2024-02-16", "Psychology", 18, "behavior, mind, therapy", "Yes", "doi:10.9012/ijkl.3456"],
  ["Journal 4", "Author 4", "2024-02-15", "Engineering", 36, "design, innovation, technology", "Yes", "doi:10.3456/mnop.7890"],
  ["Journal 5", "Author 5", "2024-02-14", "Economics", 30, "market, finance, trade", "Yes", "doi:10.6789/qrst.1234"],
  ["Journal 6", "Author 6", "2024-02-13", "Education", 22, "learning, teaching, curriculum", "Yes", "doi:10.2345/uvwx.5678"],
  ["Journal 7", "Author 7", "2024-02-12", "History", 14, "events, culture, society", "Yes", "doi:10.5678/yzab.9012"],
  ["Journal 8", "Author 8", "2024-02-11", "Environmental Science", 28, "climate, ecosystem, pollution", "Yes", "doi:10.9012/cdef.3456"],
  ["Journal 9", "Author 9", "2024-02-10", "Sociology", 20, "community, identity, inequality", "Yes", "doi:10.3456/ghij.7890"],
  ["Journal 10", "Author 10", "2024-02-09", "Political Science", 35, "government, policy, democracy", "Yes", "doi:10.6789/klmn.1234"],
  ["Journal 11", "Author 11", "2024-02-08", "Art", 19, "creativity, expression, aesthetics", "Yes", "doi:10.2345/opqr.5678"]
];

const DashboardMain = () => {
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  //function to go to home
  const goHome = () => {
    console.log("hhdh");
    window.location.href = "/";
  };

  const dummyData = [
    {
      name: "Sabinet",
      image: sabinet,
      description:
        "    Sabinet is an online database of full text South and Southern African journals. It includes coverage of a wide variety of topic areas; much of its content is in English, but there are also publications in various other European and African languages (particularly Afrikaans)",
      link: "https://sabinet.co.za/",
    },
    {
      name: "AJOL",
      image: ajol,
      description:
        "    African Journals OnLine is a South African non-profit organisation, which is in the      headquarters of Grahamstown, it is dedicated to improve the online visibility and access to the published scholarly research of African-based academics.",
      link: "https://www.ajol.info/index.php/ajol",
    },
    // Add more dummy data as needed
  ];

  return (
    <div
      className="container"
      style={{ overflow: "hidden", maxWidth: "-webkit-fill-available" }}
    >
      <div className="left-panel">
        {/*  */}
        <LeftPanel />
      </div>
      <div className="top-panel">
        {/* Top Panel Content */}

        <TopPanel />
        {/* <div class="col-start-3 col-end-4">
          <div class="profile">
            <BsPersonCircle style={{ marginTop: '5px' }} />
            <AiFillCaretDown style={{ marginTop: '5px' }} />
          </div>
        </div> */}
      </div>
      <div className="main-content">
        {/* Main Content */}
        {/* Breadcrumb navigation */}
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="me-2.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <Link
                  to="/dashboard-main"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  Home
                </Link>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>

                <Link
                  to="/dashboard-main"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  Dashboard
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <hr className="mt-2" />
        <p className="mb-1 mt-4 text-gray-500 dark:text-gray-400">
          AfriJour Dashboard
        </p>
        <div className="grid grid-cols-7 gap-1 ">
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Journals
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#2E5072", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  870
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Indexers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Reviewers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Repositories
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Viewers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Viewers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Viewers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Second column content */}
        <div className="grid grid-cols-2 gap-1 ">
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="p-5">
              <h5
                className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                style={{ color: "#585859" }}
              >
                # Viewers
              </h5>

              <p
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{ color: "#7DB8DA", fontSize: "3rem" }}
              >
                <a
                  href={"/journals"}
                  // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="grid grid-cols-2 gap-1 ">
              <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="p-5">
                  <h5
                    className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                    style={{ color: "#585859" }}
                  >
                    Journals Disciplines Distribution
                  </h5>

                  <DonutChart data={data} />
                </div>
              </div>
              <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="p-5">
                  <h5
                    className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                    style={{ color: "#585859" }}
                  >
                    # Viewers
                  </h5>

                  <p
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    style={{ color: "#7DB8DA", fontSize: "3rem" }}
                  >
                    <a
                      href={"/journals"}
                      // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      7
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 ">
              <div className="mt-4 max-w-xsm align-middle text-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="p-5">
                  <h5
                    className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
                    style={{ color: "#585859" }}
                  >
                    # Viewers
                  </h5>

                  <p
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    style={{ color: "#7DB8DA", fontSize: "3rem" }}
                  >
                    <a
                      href={"/journals"}
                      // className="inline-flex items-center rounded-lg px-3 py-2 text-center text-sm  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      7
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DonutChart data={data} />
        </div>

        <FooterPanel />
      </div>
    </div>
  );
};

export default DashboardMain;
