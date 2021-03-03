import styles from '../styles/components/Content.module.css';


export default function Content() {
  return (
    <div className={styles.container}>

      <div className={styles.tricks}>
        <h2><strong>Dica:</strong></h2>
        <p>
          O queijo Trufado Bom da Fazenda deve-se comer de pedaço ou como fondue. Para comer de pedaços, deixe-o uns 15 minutos fora da geladeira, assim o queijo trufado vai realçar sua cremosidade e ficar mais macio para o corte com a faca ou colher.
        </p>
      </div>

      <div className={styles.cheese}>
        <h1><strong>Queijo Trufado com Tomate Seco</strong></h1>
        <img className={styles.cheesesImage} src="" alt=""/>
        <p>**Peso aproximado: 750g</p>
      </div>
      
    </div>
  )
}