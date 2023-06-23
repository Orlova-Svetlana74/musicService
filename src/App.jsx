import { useState, useMemo } from 'react'
import './css/style.css'
// import Wrapper from './components/wrapper/wrapper'
import AppRoutes from './pages/routers'
import { USERS } from './constants'
import UserTrack from './pages/track/usertrack'
import {
  ThemeContext,
  useThemeContext,
  themes,
} from './components/wrapper/theme'
// import styles from './App.module.css'

function App() {
  const { theme } = useThemeContext()
  const [user] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }
  const valueTheme = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme]
  )
  // const isLight = theme === themes.light
  // const themeClass = isLight ? styles.light : styles.dark
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
        // className={styles.App}
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <AppRoutes user={user} />
        {/* <Wrapper /> */}
        <UserTrack users={USERS} />
      </div>
    </ThemeContext.Provider>
  )
}
export default App