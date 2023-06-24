import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            iaculis est metus, eget rhoncus ipsum viverra a. Vestibulum ut lacus
            justo. Donec id augue sem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Sed vel lorem vitae erat consectetur commodo id
            egestas augue. Morbi sed iaculis purus, nec imperdiet odio. Nulla
            quis convallis velit, vel rutrum sem. Suspendisse suscipit arcu sed
            mauris accumsan, at fermentum dui pellentesque. In tristique ipsum
            id leo accumsan, eu porttitor odio sollicitudin.
            <br />
            <br />
            Aliquam convallis dui et est viverra, non tincidunt nulla semper.
            Quisque bibendum, quam id posuere elementum, risus risus facilisis
            nisi, eu lacinia magna augue et est. In non ultricies nisl. Donec
            justo ligula, scelerisque vel tellus et, gravida pellentesque justo.
            Aenean et blandit risus, a sollicitudin urna. Suspendisse
            sollicitudin consequat ligula id hendrerit. Aenean quis neque id
            libero posuere rutrum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            iaculis est metus, eget rhoncus ipsum viverra a. Vestibulum ut lacus
            justo. Donec id augue sem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Sed vel lorem vitae erat consectetur commodo id
            egestas augue. Morbi sed iaculis purus, nec imperdiet odio. Nulla
            quis convallis velit, vel rutrum sem. Suspendisse suscipit arcu sed
            mauris accumsan, at fermentum dui pellentesque. In tristique ipsum
            id leo accumsan, eu porttitor odio sollicitudin.
            <br />
            <br />
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
