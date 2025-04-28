'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Categories from "@/components/Categories";
import { useState } from "react";
import Search from "@/components/Search";
import Card from "@/components/Card";

export default function Home() {

  const [btnClicked, setBtnClicked] = useState('Entradas');

  const handleFilter = (category) => {
    setBtnClicked(category);
  }

  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>

        <Categories onClickEntradas={() => handleFilter('Entradas')} 
        onClickMassas={() => handleFilter('Massas')}
        onClickCarnes={() => handleFilter('Carnes')}
        onClickBebidas={() => handleFilter('Bebidas')}
        onClickSaladas={() => handleFilter('Saladas')}
        onClickSobremesas={() => handleFilter('Sobremesas')} 

        selectedBtn={btnClicked}/>

        <Search />
          
      </main>
    </div>
  );
}
