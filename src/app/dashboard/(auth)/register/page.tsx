"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const Register = () => {
  const router = useRouter();
  const session = useSession();
  const [err, setErr] = useState(false)

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
  
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,password,email
        })
      })
      res.status === 201 && router.push("/dashboard/login?successful=Account has been created")
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input required type="text" placeholder="username" className={styles.input} />
        <input required type="email" placeholder="email" className={styles.input} />
        <input required
          type="password"
          placeholder="password"
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
      </form>
      {err&& "Something went wrong"}
      <Link href={"/dashboard/login"}>Login with an existing account</Link>
    </div>
  );
};

export default Register;
