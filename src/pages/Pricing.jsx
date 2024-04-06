// Uses the same styles as Product
import styles from "./Pricing.module.css";
import PageNav from "../components/PageNav";
export default function Product() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <div className={styles.cardContainer}>
        <div>
          <div className={styles.cards}>
            <h1 className={styles.heading}>Basic</h1>
            <div>
              <h1 className={styles.heading}>$199.00</h1>
              <p className={styles.marginBot}>Monthly</p>
            </div>
            <div></div>
            <div className={styles.marginBot}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <button className={styles.btnBuy}>Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}

// PricePlans.js
