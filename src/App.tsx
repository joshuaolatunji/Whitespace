import CTA from "./components/CTA/CTA"
import Customise from "./components/Customise/Customise"
import ExtensionBanner from "./components/ExtensionBanner/ExtensionBanner"
import FavoriteApps from "./components/FavoriteApps/FavoriteApps"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/Pricing/Pricing"
import ProjectManagement from "./components/ProjectManagement/ProjectManagement"
import Sponsors from "./components/Sponsors/Sponsors"
import WorkEverywhere from "./components/WorkEverywhere/WorkEverywhere"
import WorkTogether from "./components/WorkTogether/WorkTogether"
import YourData from "./components/YourData/YourData"
import Testimonials from "./components/Testimonials/Testimonials";


function App() {

return(
  <div>
    <div className="p-12">
       <Navbar />
    </div>
     
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <ExtensionBanner />
      <Customise />
      <Pricing />
      <WorkEverywhere />
      <YourData />
      <Sponsors />
      <FavoriteApps />
      <Testimonials />
      <CTA />
      <Footer />
  </div>

)


}
  

export default App
