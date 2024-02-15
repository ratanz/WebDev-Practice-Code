import styles from './Button.module.css'

function Button() {

    // in line css 
    const styles = {
        backgroundColor: "lightblue",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }



    return (
        <button className={styles.button}>Click Me</button>
        // <button style={styles}>Click Me </button>
    )
}

export default Button