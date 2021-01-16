import React from "react";
import StockListItem from "./StockListItem";

import { useFetch } from "../api/fetch";

export default function StockList() {
  const { response } = useFetch("stocks");
  console.log(response);
  return (
    <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
      <StockListItem />
    </ul>
  );
}
