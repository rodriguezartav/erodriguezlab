import React, { useState } from "react";
import StockList from "./StockList";
import Activity from "./Activity";
import Nav from "./Nav";
import Links from "./Links";
import Account from "./Account";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import DirectoyItem from "./DirectoyItem";

import { useFetch } from "../api/fetch";

export default function Directory(props) {
  const [response, loading, hasError, success] = useFetch("stocks/all");

  const [dayStocks, setDayStocks] = useState([]);

  React.useEffect(() => {
    if (!response) return null;
    setDayStocks(response);
    return () => {};
  }, [response]);

  return (
    <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-1/3 border-r border-gray-200">
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Stocks</h2>
        <p className="mt-1 text-sm text-gray-600">
          Search directory of 3,018 employees
        </p>
        <form className="mt-6 flex space-x-4" action="#">
          <div className="flex-1 min-w-0">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Heroicon name: mail */}
                {/* Heroicon name: search */}
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            {/* Heroicon name: filter */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      {/* Directory list */}
      <nav
        className="flex-1 min-h-0 relative overflow-y-auto"
        aria-label="Directory"
      >
        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Entry</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          {dayStocks.map((item) => (
            <DirectoyItem
              key={item.id}
              onClick={() => props.setSelectedSymbol(item)}
              type={item.type}
              symbol={item.symbol}
            />
          ))}
        </ul>

        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Active</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          <DirectoyItem type="active" symbol="appl" />
          <DirectoyItem type="active" symbol="appl" />
          <DirectoyItem type="active" symbol="appl" />
        </ul>

        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Swing</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          <DirectoyItem type="swing" symbol="msft" />
          <DirectoyItem type="swing" symbol="msft" />
          <DirectoyItem type="swing" symbol="msft" />
          <DirectoyItem type="swing" symbol="msft" />
        </ul>
        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Long</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          <DirectoyItem type="long" symbol="amzn" />
          <DirectoyItem type="long" symbol="amzn" />
          <DirectoyItem type="long" symbol="amzn" />
          <DirectoyItem type="long" symbol="amzn" />
        </ul>
      </nav>
    </aside>
  );
}
