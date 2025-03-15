import './styles/App.module.scss';
// Components
import { Hero, MulankSummarizer, MulankWidget }  from './Components/index'
import { Fragment } from 'react/jsx-runtime';
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
