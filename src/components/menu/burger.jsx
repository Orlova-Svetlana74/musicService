/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

function Burger({ onClick }) {
  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className="nav__burger burger"
      onClick={onClick}
    >
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  )
}

export default Burger
