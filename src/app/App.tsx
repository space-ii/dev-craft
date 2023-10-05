import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { MainPageAsync } from "../pages/MainPage/ui/MainPage.async";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    // <div className={`app ${theme}`}>
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
