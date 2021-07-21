import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";
import { isLoggedIn } from "../../stores/auth";

let i = 0;

const Page = ({ children }) => {
  const { pathname } = useLocation();
  const [loginState, setLoginState] = useState(isLoggedIn.get());

  setTimeout(() => {
    isLoggedIn.subscribe((loginState) => setLoginState(loginState));
  }, 50);

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <Header loginState={loginState} />
      <div className={styles.inner}>{children}</div>
      <Footer />
    </div>
  );
};

export default withRouter(Page);
