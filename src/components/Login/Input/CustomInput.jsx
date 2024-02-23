import styles from '../styles.module.scss'

const CustomInput = ({ type, placeholder, onChange }) => {
  return (
    <div className={styles.box}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}
export default CustomInput
// type={type} value={value} onChange={onChange}
