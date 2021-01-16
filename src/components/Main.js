import React from "react";
import StockList from "./StockList";
import Activity from "./Activity";
import Nav from "./Nav";
import Links from "./Links";
import Account from "./Account";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Directory from "./Directory";

export const Main = () => {
  const [selectedSymbol, setSelectedSymbol] = React.useState([]);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <div className="lg:hidden">
        <div className="fixed inset-0 flex z-40">
          {/*
    Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
    Entering: "transition-opacity ease-linear duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "transition-opacity ease-linear duration-300"
      From: "opacity-100"
      To: "opacity-0"
  */}
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75" />
          </div>
          {/*
    Off-canvas menu, show/hide based on off-canvas menu state.
  
    Entering: "transition ease-in-out duration-300 transform"
      From: "-translate-x-full"
      To: "translate-x-0"
    Leaving: "transition ease-in-out duration-300 transform"
      From: "translate-x-0"
      To: "-translate-x-full"
  */}
          <div
            tabIndex={0}
            className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                  alt="Workflow"
                />
              </div>
              <Nav />
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <Account />
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
      {/* Static sidebar for desktop */}
      <Sidebar />
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
                alt="Workflow"
              />
            </div>
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
              >
                <span className="sr-only">Open sidebar</span>
                {/* Heroicon name: menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <Profile selectedSymbol={selectedSymbol} />
          <Activity />
          <Directory setSelectedSymbol={setSelectedSymbol} />
        </div>
      </div>
    </div>
  );
};
