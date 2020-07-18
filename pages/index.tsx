import styles from './styles/index.module.css';
import Banner from '../components/Banner/Banner';

export default function Index() {
  return <Banner className={styles.bannerOverride} href="/test" />;
}
