"use client";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

// Globals CSS
import "../styles/style.css";
// Responsive CSS
import "../styles/responsive.css";
import store from "@/redux/store";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
