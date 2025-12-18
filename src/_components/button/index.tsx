import styles from './style.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
}
