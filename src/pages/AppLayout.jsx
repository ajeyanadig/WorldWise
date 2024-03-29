import styles from "./AppLayout.module.css";
import PageNav from "../components/PageNav";
function AppLayout() {
  return (
    <>
      <PageNav />
      <div className={styles.app}>
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default AppLayout;
