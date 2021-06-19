import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import useModeToggle from "../hooks/useModeToggle"

const ThemeContext = React.createContext({})

const ThemeProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mode {
            default
            allowChange
          }
        }
      }
    }
  `)

  const [currentMode, toggleMode, allowChange] = useModeToggle(
    data.site.siteMetadata.mode
  )

  return (
    <ThemeContext.Provider
      value={{
        currentMode,
        toggleMode,
        allowChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }
