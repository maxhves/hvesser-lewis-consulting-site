"use client";
import React, {useEffect, useState} from 'react';
import {Simulate} from "react-dom/test-utils";

//region Props

interface ThemeSwitchProps {
  darkTheme: boolean,
}

//endregion

//region Implementation

function ThemeSwitch(props: ThemeSwitchProps) {
  const [loading, setLoading] = useState(true)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(props.darkTheme);
    setLoading(false);
  }, [props.darkTheme]);

  return (
    <div>
      <button
        onClick={() => setChecked((prevState) => !prevState)}
      >
        {/* Track */}
        <div
          className={`h-8 w-14 rounded-full ${checked ? "bg-amethyst" : "bg-cutty-sark"} transition-all duration-500 bg-opacity-50 flex`}>
          {/* Sparkles ✨*/}
          <div className="flex items-center justify-center w-full">
            <div className={`transform ${checked ? "scale-100" : "scale-0"} transition-all delay-200 ease-in-out`}>
              <svg className="h-3 w-3 fill-pirate-gold ms-1.5" viewBox="0 0 24 24">
                <path d="m19.46 8 .79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75-1.76.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0zM11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82L11.5 9.5zm7.04 6.5-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79-.79-1.76a.508.508 0 0 0-.92 0z"/>
              </svg>
            </div>
          </div>

          {/* Thumb */}
          <div className="flex h-full w-full items-center justify-end px-1">
            <div
              className={`h-6 w-6 bg-amethyst rounded-full flex items-center justify-center transform ${checked ? "translate-x-0 bg-amethyst" : "-translate-x-6 bg-cutty-sark"} transition-all`}>
              {/* Loading and night icon */}
              {loading ?
                <div className="">
                  <svg className="h-5 w-5 fill-aths-special animate-spin" viewBox="0 0 24 24">
                    <path fill="#FFFFFF" opacity="0.25" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM4.5 12a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z"/>
                    <path d="M3.25 12c-.69 0-1.258-.562-1.172-1.247A10 10 0 0 1 17.364 3.56c.582.37.653 1.166.213 1.698-.44.532-1.224.596-1.821.25a7.5 7.5 0 0 0-11.152 5.248C4.489 11.436 3.94 12 3.25 12Z"/>
                  </svg>
                </div>
                :
                <div className={`transform ${checked ? "scale-100" : "scale-0"} transition-all`}>
                  <svg className="h-5 w-5 fill-daintree" viewBox="0 0 24 24">
                    <path
                      d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z"/>
                  </svg>
                </div>
              }
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitch;

//endregion