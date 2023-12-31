import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. we bring together the team from the
          global tech industry
        </p>
        <Button url="/portfolio" text="See Our works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}

{
  /* <Image
  width={50}
  height={50}
  src={
    "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  alt="hero"
  className={styles.img}
/> */
}
