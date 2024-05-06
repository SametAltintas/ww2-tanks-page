import img from "../image/images.jpeg";
const Header = () => {
  return (
    <div className=" mt-4">
        <img src={img} alt=""/>
        <h1 style={{fontFamily:'UnifrakturMaguntia, cursive'}} className=" mt-4 text-white">WW2 Tanks</h1>
    </div>
  )
}

export default Header