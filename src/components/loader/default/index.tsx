import React from "react";

import "./lsq-lazy-loader-fallback.css";

export function LazyLoaderComponent() {
  return (
    <section className="lazy-loader-component relative">
      <section className="w-full">
        <ul className="w-full flex gap-2">
          <li className="layout-element-container left">
            <ul className="gap-2 h-full w-full flex flex-col">
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
            </ul>
          </li>
          <li className="layout-element-container right">
            <ul className="gap-2 w-full h-full flex flex-col">
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
              <li className="bg-gray w-full flex-grow rounded-lg"></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="overlay-shimmer"></section>
    </section>
  );
}
