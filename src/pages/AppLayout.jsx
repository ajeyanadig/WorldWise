import { Outlet } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import User from "../components/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar>
        <Outlet />
      </Sidebar>
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
