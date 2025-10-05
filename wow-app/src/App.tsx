
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main className='relative top-[900px] md:top-[750px]' id='main'>
        <News />
      </main>

    </>
  )
}

export default App
