import styles from "./Search.module.css";
import Image from "next/image";
import Lupa from '../../../public/lupa.png';

export default function Search(props) {
    return (
        <form className={styles.search}>
            <Image src={Lupa} alt="Lupa de busca"/>
            <input type="text" placeholder="Busque uma receita..." className={styles.search_field} value={props.value} onChange={props.onChange} />
        </form>
    )
}