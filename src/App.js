import './App.css';
import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem "/>
    </div>
  );
}

export default App;
