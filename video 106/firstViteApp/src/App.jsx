import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Snacks" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam soluta"/>
        <Card title="Chocolate" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam soluta"/>
        <Card title="Biscuit" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam soluta"/>
        <Card title="Drinks" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam soluta"/>
      </div>
      <Footer />
    </>
  )
}

export default App
