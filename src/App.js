import logo from "./logo.svg";
import "./App.css";

let pessoas = [
  { COD: "001", NOME: "Jôáo" },
  { COD: "002", NOME: "Ella" },
  { COD: "003", NOME: "Poqueno" },
];

let sobrenome = "dos Santos Conceição";

function MyButton() {
  return <button>Eu sou um botão</button>;
}

function MeuTitulo() {
  return <h1>Integrado Ensino Médio</h1>;
}

function MyTable() {
  return (
    <table>
      <tr>
        <td>COD</td>
        <td>NOME</td>
      </tr>
      {pessoas.map((Pessoa) => (
        <tr>
          <td>{Pessoa.COD}</td>
          <td>{Pessoa.NOME}</td>
        </tr>
      ))}
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuTitulo />
        <MyTable />
        <p>
          Edit <code>src/App.js</code> and save to reload. João Pedro
          {sobrenome}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
