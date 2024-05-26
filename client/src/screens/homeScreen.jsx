import Nav from "../components/nav";
import Intro from "../components/intro";
import Footer from "../components/footer"


const homeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Nav />
        <Intro />
       </main>
       <Footer />
    </div>
  )
}


export default homeScreen

