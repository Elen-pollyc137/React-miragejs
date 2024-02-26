import styles from '../styles.module.scss'

const Accordion = ({ tasks, id }) => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        {' '}
        <ul>
          {tasks.map((t) => (
            <li key={id}>
              <img src={t.url} alt="" />
              <p>{t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Accordion
