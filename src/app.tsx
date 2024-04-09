import { ScrollToTop } from '@/components/scroll-to-top'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/resources'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardMain from './components/dashboard/dashboard-main';
import Analytics from './components/dashboard/dashboard-pages/analytics';
import Reports from './components/dashboard/dashboard-pages/reports';
import Reviewers from './components/dashboard/dashboard-pages/reviewers';
import Indexers from './components/dashboard/dashboard-pages/indexers';
import Journals from './components/dashboard/dashboard-pages/journals';
import Repositories from './components/dashboard/dashboard-pages/repositories';
import NewsUpdates from './components/dashboard/dashboard-pages/news-updates';
import Journal from './components/dashboard/dashboard-pages/journal';
import ResourcesPage from '@/routes/resources'





export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = "/"
    // import.meta.env.BASE_URL







  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="resources" element={<ResourcesPage/>} />
          <Route path="support" element={<SupportPage />} />
          <Route path="dashboard-main" element={<DashboardMain />} />
          <Route path="analytics" element={<Analytics />} />         
          <Route path="reports" element={<Reports />} />         
          <Route path="reviewers" element={<Reviewers />} />  
          <Route path="indexers" element={<Indexers />} />         
          <Route path="journals" element={<Journals />} />         
          <Route path="journal" element={<Journal />} />    
          {/* <Route path='/catalog/product/:productId' element={<ImageProduct />} />      */}
          {/* <Route path='journal-details?id=${}" element={<Journal />} />   */}
          {/* /journal-details?id=${journal.id} */}
          <Route path='journal-details/:journalId' element={<Journal />} />
       
          <Route path="repositories" element={<Repositories />} />         
          <Route path="news" element={<NewsUpdates />} />    
           

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
