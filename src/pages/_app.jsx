import "../app/globals.css";
import Navbar from "../components/Navbar"; // adjust path as needed
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Dynamically determine which page is active
  const currentPath = router.pathname;
  const active =
    currentPath === '/' ? 'home'
    : currentPath.includes('/about') ? 'about'
    : currentPath.includes('/experience') ? 'experience'
    : '';
  return (
    <>
      <Navbar active={active} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
