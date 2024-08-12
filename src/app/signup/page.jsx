"use client"
import React from 'react'
import styles2 from "@/styles/signin/signin.module.css"
import styles from "@/styles/signup/signup.module.css"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TbWorldWww } from "react-icons/tb";
import { useState, useEffect } from "react";
import PaisesSelect from "@/components/signup/PaisesSelect";

function SignUppage() {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <section className={styles.registerContainer}>

        <form action="" className={styles.form}>
                  
                  <h1 className={styles.titleCrearCuenta}>Crear Cuenta</h1>

                  <label htmlFor="nameApell" className={styles2.label}> 
                      <FaRegUser  className={styles.iconUser}/>
                      <input type="text" id="nameApell"  placeholder="Nombre y Apellido" className={styles2.input} required/>
                  </label>

                  <label htmlFor="ema" className={styles.label}> 
                      <HiOutlineMail className={styles.iconEmail}/>
                      <input type="email" id="ema"  placeholder="Email" className={styles2.input} required />
                  </label>

                  <label htmlFor="pass" className={styles.label}> 
                      <RiLockPasswordLine className={styles.iconPass}/>
                      <input type="password" id="pass"  placeholder="Contraseña" className={styles2.input} required/>
                  </label>

                  <label htmlFor="rePass"className={styles.label} > 
                      <RiLockPasswordLine className={styles.iconPass}/>
                      <input type="password" id="rePass"  placeholder="Repita su contraseña" className={styles2.input} required />
                  </label>

                  <PaisesSelect isFocused={isFocused} setIsFocused={setIsFocused} 
                                                        selectedCountry={selectedCountry}    
                                                        setSelectedCountry={setSelectedCountry}  />  

        </form>
    </section>
  )
}

export default SignUppage
