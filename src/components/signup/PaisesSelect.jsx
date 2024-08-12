"use client"
import Select from 'react-select';
import { Suspense } from 'react';
import Image from "next/image";
import {countries }from "@/db/country"
import { GiWorld } from "react-icons/gi";
import styles2 from "@/styles/signin/signin.module.css"
import styles from "@/styles/signup/signup.module.css"


export default function PaisesSelect({isFocused,setIsFocused,selectedCountry,setSelectedCountry}) {

    const id = 'mi pais';

        const handleFocus = () => {
        setIsFocused(!isFocused);
        };
        const handleChange = (newValue) => {
        if (newValue) {
            setSelectedCountry(newValue); // Update the state with the new value
        } else {
            setSelectedCountry(null);
        }
        };

        
        

  return (
    <>
        <label htmlFor="pais" className={styles2.label}>

                  <GiWorld className={styles.iconWorldR}/>

                  <Select
                         instanceId="my-select-instance"
                         options={countries}
                         value={selectedCountry}
                         onChange={handleChange}
                         className={`selectPaisesR ${isFocused ? styles.focused : ''}`}
                         placeholder="Seleccione el pais"
                         formatOptionLabel={(option) => (
                                <div 
                                       key={`${option.value}-${option.label}`}
                                      className="divPaisR"  style={{ display: 'flex', alignItems: 'center' }}>
                                      <img src={option.flag} alt={option.label} style={{ width: 20, marginRight: 10 }} />
                                      {option.label}
                                </div>
                        )}

                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        styles={{
                                 control:(styles,state) =>{
                                     return {...styles,
                                             borderColor: state.menuIsOpen ? '#27477d' : '#aae1e9',
                                             borderRadius:"6px",
                                             borderColor: state.isFocused ? "#27477d" : " ",
                                             "&:hover": {borderColor:"none"},
                                                        
                                            }
                                },
                                                
                        }}
                    />   
                
                  
         </label>
    </>
  )
}
