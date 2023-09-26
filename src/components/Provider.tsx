"use client";
<<<<<<< HEAD
// "use client";
// import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
// import { persistor, store } from "@/redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <SessionProvider>{children}</SessionProvider>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default Layout;

import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
=======
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

>>>>>>> develop
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
