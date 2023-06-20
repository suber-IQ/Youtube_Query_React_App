import { useContext } from "react"
import { Context } from "../context/contextApi"

const LeftNav = () => {
      const { selectedCategory, setSelectedCategory, mobileMenu} = useContext(Context);
  return (
    <div>LeftNav</div>
  )
}

export default LeftNav