import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Purchase from "./Purchase"

function App() {
  return <>
      <Purchase/>
      <div className="main">
        <div className="block">
          <Header />
          <Main />
        </div>
      </div>
  </>
}

export default App
