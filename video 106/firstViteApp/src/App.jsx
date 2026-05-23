import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
