import { FC } from "react"
import { Spinner } from "react-bootstrap"

const OverlaySpinner: FC = () => (
  <div
    style={{
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.70)",
      zIndex: 10000
    }}
  >
    <Spinner
      className='overlay-spinner'
      variant='light'
      animation='border'
      style={{ width: 200, height: 200 }}
    />
  </div>
)

export default OverlaySpinner
