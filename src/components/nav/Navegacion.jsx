"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Tabs } from "flowbite-react";
import 'flowbite/dist/flowbite.min.css';
import styles from "@/styles/navbar/navbar.module.css";

export default function NavHome() {
    const router = usePathname();
  return (
         <>   
             <nav className={styles.nav}>
                    <Navbar fluid rounded className={styles.flowbiteNavbar}>
                        <NavbarBrand as={Link} href="/">
                        <img src="/logo.png" className={styles.imgLogo} alt="Socilabs Logo" />
                        </NavbarBrand>
                    
                        <NavbarToggle />

                        <NavbarCollapse className={styles.navCollapse}>

                            <NavbarLink className={`${styles.link} ${router === '/' ? styles.active : ''}`}  as={Link} href="/"  >
                                
                                Home
                            </NavbarLink>
                            <NavbarLink className={`${styles.link} ${router === '/##' ? styles.active : ''}`} as={Link} href="##">
                                About
                            </NavbarLink>
                            <NavbarLink className={`${styles.link} ${router === '/#' ? styles.active : ''}`}  as={Link} href="#">Services</NavbarLink>
                            <NavbarLink className={`${styles.link} ${router === '/signup' ? styles.active : ''}`}  as={Link} href="/signup">Registrate</NavbarLink>
                            <NavbarLink className={`${styles.link} ${router === '/signin' ? styles.active : ''}`}  as={Link} href="/signin">Iniciar Sesion</NavbarLink>
                        </NavbarCollapse>
                    </Navbar>
             </nav>
            
          </>

  )
}
