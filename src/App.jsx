import './App.css'
import Footer from './footer'
import Header from './Header'
import MainContent from './mainContent'

export default function App() {
  return (
    <div className="app">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  )
}