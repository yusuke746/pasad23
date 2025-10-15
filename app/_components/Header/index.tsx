import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>


<Link href="/" className={styles.logoLink}>
  <Image
    src="/water_meter_replacement_icon_final.jpg"
    alt="SIMPLE"
    className={styles.logo}
    width={600}
    height={230}
    priority
  />
</Link>

      <Menu />
    </header>
  );
}
