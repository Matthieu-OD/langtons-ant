import React from "react";

import type { AppProps } from "next/app";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

/**
 * @return AppProps _app wrapper component
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.element,
};
