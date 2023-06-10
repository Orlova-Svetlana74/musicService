import Change from './dark.png'
import { useThemeContext } from '../wrapper/theme'

function ThemeSwitcher() {
  const { toggleTheme } = useThemeContext()
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
  return <img src={Change} alt="change" onClick={toggleTheme} />
}
export default ThemeSwitcher
