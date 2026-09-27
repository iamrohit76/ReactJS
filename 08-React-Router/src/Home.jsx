import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate();
    const gotoAbout =()=>{
      navigate("/About")
    }
  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={gotoAbout}>Go to About</button>
    </div>
  )
}

export default Home
