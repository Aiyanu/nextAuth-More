import Image from "next/image";
import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return <footer className={styles.container}>
      <div>@2023 Lamamia. All rights reserved</div>
      <div>
        <div className={styles.social}>
        <Image
        className={styles.icon} 
        src={"/1.png"} width={15} height={15} alt="Lama Dev"/>
        <Image
        className={styles.icon} 
        src={"/2.png"} width={15} height={15} alt="Lama Dev"/>
        <Image
        className={styles.icon} 
        src={"/3.png"} width={15} height={15} alt="Lama Dev"/>
        <Image
        className={styles.icon} 
        src={"/4.png"} width={15} height={15} alt="Lama Dev"/>
          
        </div>
      </div>
  </footer>;
};

export default Footer;
