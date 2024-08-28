import React from "react";
import styles from "./Switch.module.css"; // Import your styles

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onChange }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;