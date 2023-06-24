import React from "react";
import Image from "next/image";
import styles from "./page.module.css"
import {notFound} from "next/navigation"

async function getData(id:string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return notFound();
  }
  // console.log(data);
  
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title:post.title,
    description:post.desc
  }
}

const BlogPost = async({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
           {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"John Doe"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/illustration.png"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          sagittis lorem, non convallis nisi. Sed nec quam nisl. Praesent nisl
          ligula, commodo eget nulla tempor, sodales tristique mauris. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Praesent eu justo
          sed tellus ornare bibendum ac vel felis. Praesent finibus pretium
          urna, in tempus risus lacinia vehicula. Aliquam sollicitudin viverra
          diam, ut eleifend leo. Proin elementum nisl a elit lobortis cursus.
          Nunc leo arcu, tristique a pellentesque a, tincidunt elementum turpis.
          Curabitur felis dolor, ultricies id efficitur a, gravida ac enim. In
          odio elit, commodo nec eros dignissim, sollicitudin rutrum sem. Etiam
          rutrum rhoncus nunc, aliquam aliquet mauris mollis nec. Vestibulum
          nulla augue, vestibulum ut augue id, ultrices imperdiet neque. Mauris
          viverra rutrum ligula quis venenatis. Fusce consectetur interdum eros
          eget pharetra.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
