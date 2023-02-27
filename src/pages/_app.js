import '../styles/globals.css'
import React, { createContext } from "react"
import { useState } from "react";


export const ThemeContext = createContext()

function MyApp({ Component, pageProps = {} }) {
  const [ThemeToggle, setThemeToggle] = useState(true);

  return <ThemeContext.Provider value={[ThemeToggle,setThemeToggle]}><main className={ThemeToggle ? "theme-galaxy" : "theme-361"}><Component {...pageProps} /></main></ThemeContext.Provider>
  

}

export default MyApp