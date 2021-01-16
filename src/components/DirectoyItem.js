import React from "react";

export default function DirectoyItem(props) {
  const vMap = {
    entry: {
      1: "Long",
      2: "20%",
      3: "13:33",
    },
    active: {
      1: "5X",
      2: "100%",
      3: "13:33",
    },
    crypto: {
      1: "volume",
      2: "speed",
      3: <p>Closing on 33.44 / 33.22</p>,
    },
    swing: {
      1: "volume1",
      2: "growth",
      3: <p>Closing on Downtick</p>,
    },

    long: {
      1: "sentiment",
      2: "short",
      3: <p>Closing on 33.44 / 33.22</p>,
    },
  };

  function getV(key) {
    return vMap[props.type][key];
  }

  return (
    <li onClick={props.onClick}>
      <a href="#" className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm  uppercase flex-grow font-medium text-indigo-600 truncate">
              {props.symbol}
            </p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                $3,000
              </p>
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                $34.44 = 5%
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                {/* Heroicon name: users */}
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {getV(1)}
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                {/* Heroicon name: location-marker */}
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {getV(2)}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* Heroicon name: calendar */}
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {getV(3)}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* Heroicon name: calendar */}
              Min: $2900
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {/* Heroicon name: calendar */}
              RSI: 33
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
