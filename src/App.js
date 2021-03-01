import '../src/scss/style.css'

function Header() {
  return (
    <header>
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src="images/logo.png" alt="The Oasis Church" />
        </a>

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

function Home(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm">First of three columns</div>
          <div className="col-sm">Second of three columns</div>
          <div className="col-sm">Third of three columns</div>
        </div>
      </div>
    </section>
  )
}

function About(props) {
  return (
    <div>
      <h1>Our Pastor, Scottie Hutch</h1>
      <img src="/images/scott.jpg" alt="scott hutchison" />
      <h2>Essential Doctrines</h2>
    </div>
  )
}

function Bible() {

  return (
    <div>
      <form action="https://www.biblegateway.com/quicksearch/">
        <table
          border="1"
          cellspacing="0"
          cellpadding="2"
          style={{ borderColor: "green" }}
        >
          <tr><th style={{ backgroundColor: "fff", color: "#fff", textAlign: "center", padding: 10 }}>
            Lookup a word or passage in the Bible
            </th>
          </tr>
          <tr><td style={{ backgroundColor: "#fff", textAlign: "center", padding: 10 }} />
            <div style={{ marginBottom: 0 }}>
              <input style={{ margin: 2, type: "text", name: "quicksearch" }} />
              <br />
              <input
                style={{ margin: 2 }}
                type="submit"
                value="Search BibleGateway.com"
              />
              <br />
            </div>
            <a
              href="https://www.biblegateway.com/"
              title="The Bible in multiple languages, versions, and formats"
            >
              <img
                src="https://www.biblegateway.com/assets/images/logos/bglogo_sm.gif?103106"
                width="146"
                height="44"
                alt="BibleGateway.com"
                border="0"
              />
            </a>
            <br />

            <small>
              <a href="https://www.biblegateway.com/usage/form/">
                Include this form on your page
                </a>
              <br />
            </small>
          </td></tr>

        </table>
      </form>
    </div >
  );
}

// You version API call
// fetch('https://developers.youversionapi.com/1.0/versions', {
//     headers: {
//         'X-YouVersion-Developer-Token': '{your_developer_token}',
//         'Accept-Language': 'en',
//         Accept: 'application/json',
//     }
// })
// .then((result) => result.json())
// .then((json) => console.log(json))

function Footer(props) {
  return (
    <footer>
      <p>
        Copyright &copy; {props.year}{' '}
        <a href="https://christianwebdeveloper.com">Christian Web Developer</a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <Home title="Oasis - Home" />
      <About title="About Us" />
      {/* <Bible /> */}
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App
