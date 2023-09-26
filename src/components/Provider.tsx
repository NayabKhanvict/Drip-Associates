"use client";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals CSS
import "../styles/style.css";
// Responsive CSS
import "../styles/responsive.css";

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
