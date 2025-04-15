import Category from "./categories/Category"
import Electronics from "./electronics/Electronics"
import Hero from "./hero/Hero"


const Home = () => {
  return (
    <div className="container">
        <Hero/>
        <Electronics/>
        <Category/>
    </div>
  )
}

export default Home