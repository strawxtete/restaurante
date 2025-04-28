import styles from "./Categories.module.css";
import Image from "next/image";

import Entrada from '../../../public/entrada.png';
import Massa from '../../../public/massa.png';
import Carne from '../../../public/carne.png';
import Bebidas from '../../../public/bebidas.png';
import Salada from '../../../public/salada.png';
import Sobremesa from '../../../public/sobremesa.png';

export default function Categories(props) {
    const handleSelectedBtn = (category) => {
        props.selectBtn == category && styles.selectedBtn;
    }

    return (
        <section className={styles.categories}>
            <button onClick={props.onClickEntradas} className={`${styles.btn} ${handleSelectedBtn('Entradas')}`}> 
                <Image src={Entrada} alt="Prato de Entrada"/> 
                <span> Entradas </span>
            </button>

            <button onClick={props.onClickMassas} className={`${styles.btn} ${handleSelectedBtn('Massas')}`}> 
                <Image src={Massa} alt="Prato de Massa"/> 
                <span> Massas </span>
            </button>

            <button onClick={props.onClickCarnes} className={`${styles.btn} ${handleSelectedBtn('Carnes')}`}>
                <Image src={Carne} alt="Prato de Carne"/> 
                <span> Carnes </span>   
            </button>

            <button onClick={props.onClickBebidas} className={`${styles.btn} ${handleSelectedBtn('Bebidas')}`}>
                <Image src={Bebidas} alt="Prato de Bebidas"/> 
                <span> Bebidas </span>
            </button>

            <button onClick={props.onClickSaladas} className={`${styles.btn} ${handleSelectedBtn('Saladas')}`}>
                <Image src={Salada} alt="Prato de Salada"/> 
                <span> Saladas </span>
            </button>

            <button onClick={props.onClickSobremesas} className={`${styles.btn} ${handleSelectedBtn('Sobremesas')}`}>
                <Image src={Sobremesa} alt="Prato de Sobremesa"/> 
                <span> Sobremesas </span>
            </button>
        </section>
    )
}