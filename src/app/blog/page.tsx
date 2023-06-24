import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache:"no-store"
  });
  console.log(JSON.stringify(res));
  
  if (!res.ok) {
    throw new Error ("Failed to fetch data")
  }
  return res.json()
}
export type dataT = {
  _id:string
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const Blog = async () => {
  const data:dataT[] = await getData()
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item._id} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              src={"/illustration.png"}
              alt={""}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
        
        ))}
        </div>
      
  );
};

export default Blog;
