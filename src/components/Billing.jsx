import { apple , bill , google } from "../assets";
import styles , {layout} from "../style"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        <div />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> biling & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We here at our bank make your billing and invoicing seamless , fast and safe. With zero complaints in the safety we are the most secure bank in the billing and invoicing domain of finance right now.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_store" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing