import styles from "./LayoutExample.module.css";

export default function LayoutExample() {
  return (
    <div className={styles.example}>
      <p>Styles output:</p>
      <pre>
        <code>{JSON.stringify(styles, null, 2)}</code>
      </pre>
    </div>
  );
}
