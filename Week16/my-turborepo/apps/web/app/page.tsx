import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Button className={styles.button} appName="web">Touch me hard</Button>
      
    </div>
  );
}
