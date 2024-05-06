import img from "../image/tank-icon.jpg";
const Header = () => {
  return (
    <div className=" mt-4">
        <img src={img} alt="" className="border border-black rounded-circle"/>
        <h1 style={{fontFamily:'UnifrakturMaguntia, cursive'}} className=" mt-4 text-white">WW2 Tanks</h1>
    </div>
  )
}

export default Header