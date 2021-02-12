import React from 'react'
import '../src/scss/style.css';

function Header() {
  return (
    <header>
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src="images/logo.png" alt="The Oasis Church"
        /></a>

        <a href="#" className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links">
          <a href="/index">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/reading-plan">Reading Plan</a>
          <a href="/events">Events</a>
          <a href="/sermons">Sermons</a>
        </div>
      </nav>
    </header>
  )
}


function Main(props) {

  return (
    <section>
      <p>Some other stuff here...</p>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright &copy; {props.year} <a href="https://christianwebdeveloper.com">Christian Web Developer</a></p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main adjective="wonderful" />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App;
