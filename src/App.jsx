import styles from "./styles"

import * as Component from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Component.Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Component.Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Component.Stats />
          <Component.Business />
          <Component.Billing />
          <Component.CardDeal />
          <Component.Testimonials />
          <Component.Clients />
          <Component.CTA />
          <Component.Footer />
        </div>
      </div>
    </div>
  )
}

export default App