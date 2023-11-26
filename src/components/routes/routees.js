import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import DashBoard from '../Dashboard/DashBoard'
import NewsDetails from '../Dashboard/Newsdetails/newsDetails';
import QuickCheck from '../QuickCheck/QuickCheck'
import EducationalResourcesPage from '../Education/Resources';
import ToolsPage from '../Tools/Tools';
import FactCheckPage from '../Tools/FactChecker';
import SocialMediaAnalysisPage from '../Tools/SocialMediaAnalysis';
import ActivitiesPage from '../Activities/Activities';
import SpamMessageDetector from '../Tools/SpamTracker';
export default function Routees() {
  return (
    <div>
        
        
          <Routes>
            <Route exact path='/' element={<DashBoard/>}/>
            <Route exact path='/quickcheck' element={<QuickCheck/>}/>
            <Route path="/misinformation/:id" element={<NewsDetails/>} />
            <Route exact path='/education' element={<EducationalResourcesPage/>}/>
            <Route exact path='/tools' element={<ToolsPage/>}/>
            <Route exact path='/tools/fact-check' element={<FactCheckPage/>}/>
            <Route exact path='/tools/spam-tracker' element={<SpamMessageDetector/>}/>
            <Route exact path='/activity' element={<ActivitiesPage/>}/>
          </Routes>
          
    </div>
  )
}
