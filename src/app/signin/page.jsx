import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import styles from "@/styles/signin/signin.module.css";

export default function SignInpage() {
  return (
    <section className={styles.formContainer}>
             <form className={styles.form} >
                                            
                      <h1 className={styles.titleIniciarSesion}>Iniciar Sesion</h1>
                                            
                      <label htmlFor="email" className={styles.label}> 
                                                     <HiOutlineMail className={styles.icon}/>
                                                     <input type="email" id="email" placeholder="Correo electronico" className={styles.input}  />
                      </label>

                      <label htmlFor="password" className={styles.label}> 
                                                    <RiLockPasswordLine className={styles.icon}/>
                                                    <input type="password" id="password" placeholder="Contraseña" className={styles.input} />
                      </label>

                      <a href="#" className={styles.linkOlvidastePassword}>Olvidaste tu contraseña?</a>

                      <button className={styles.btnIngresar}>Ingresar</button>

                      <section className={styles.socialContainer}>
                                                    
                            <span className={styles.spanGoogle}>------ o inicia con tu cuenta de ------</span> 
                            <button className={styles.authGoogle} ><FcGoogle className={styles.iconGoogle}/> Google</button> 

                    </section>
                                            
              </form>
    </section>
  )
}
