import React from 'react'
import './App.css'

function Header() {
  return (
    <header>
      <nav class="flex flex-jc-sb flex-ai-c">
        <a href="/" class="header__logo">
          <img src="images/logo.png" alt="The Oasis Church"
        /></a>

        <a href="#" class="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="header__links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
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
