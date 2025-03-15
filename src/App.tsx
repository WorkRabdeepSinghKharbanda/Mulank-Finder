import './styles/App.module.scss';
// Components
import { Hero, MulankSummarizer, MulankWidget }  from './Components/index'
function App() {
  return (
   <>
      <Hero />
      <MulankWidget />
      <MulankSummarizer />
    </>
  )
}

export default App
