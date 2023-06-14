import Link from "next/link";
import styles from "./button.module.css"
import React from "react";

type ButtonProp = {
    text: string;
    url: string;
}

const Button = ({text,url}:ButtonProp) => {
    return <div className={styles.button}>
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
  </div>;
};

export default Button;
