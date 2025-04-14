'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Categories from "@/components/Categories";
import { useState } from "react";

export default function Home() {

  const [btnClicked, setBtnClicked] = useState('Entradas');

  const handleFilter = (category) => {
    setBtnClicked(category);
  }

  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>

        <Categories onClickEntradas={() => handleFilter('Entradas')} selectedBtn={btnClicked}/>
          
      </main>
    </div>
  );
}
