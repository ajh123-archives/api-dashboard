import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(contex: any) {
  return { redirect: { destination: '/user/Dashboard', permanent: false } };
}

const Home: NextPage = (props) => {
  return (
    <div className={styles.container}></div>
  )
}

export default Home
