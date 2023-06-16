import DarkIcon from './dark.png'
import LightIcon from './light.png'
import { useThemeContext, themes } from '../wrapper/theme'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext()
  const isLight = theme === themes.light
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
  return (
    <img
      src={isLight ? LightIcon : DarkIcon}
      alt="change"
      onClick={toggleTheme}
    />
  )
}
export default ThemeSwitcher
