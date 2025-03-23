import { Outlet } from "react-router";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import s from "./index.module.scss";

export const LandingLayout = () => (
  <div className={s.container}>
    <Header />
    <main className={s.main}>{<Outlet />}</main>
    <Footer />
  </div>
);
