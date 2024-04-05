import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import { useAuth } from "../contexts/fakeAuthContext";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      {isAuthenticated && (
        <>
          <User />
          <SideBar />
          <Map />
        </>
      )}
    </div>
  );
};

export default AppLayout;
