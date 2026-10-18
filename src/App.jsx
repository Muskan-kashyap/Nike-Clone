import {Header} from "./components/Header.jsx";
import {Hero} from "./components/Hero.jsx";
import {Featured} from "./components/Featured.jsx";
import {Spotlight} from "./components/Spotlight.jsx";
import {Footer} from "./components/Footer.jsx";
import {ShopSlider} from "./components/ShopSlider.jsx";
import {Trending} from "./components/Trending.jsx";
import {FreshDrops} from "./components/FreshDrops.jsx";
import "./App.css";





function App() {




    return (
        <>
            <Header/>
            <Hero/>
            <Featured/>
            <Trending/>
            <FreshDrops/>
            <ShopSlider/>
            <Spotlight/>
            <Footer/>                                    
        </>
    )
}

export default App
