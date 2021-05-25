
import React,{useState} from 'react'
import './App.css';

function App() {

  // VOCÊ PODE TRABALHAR COM OS CODES EM COMPONENTES SEPARADOS EM OUTRA PASTA E CHAMÁ-LOS NA APP COMO QUISEREM. 

  // INÍCIO PARA MODELO ONCHANGE E HANDLE
  // PADRÃO
  // const [nome,setNome] = useState()
  
  // SOMENTE PARA MODELO OBJ
  const [musica,setMusica]=useState(
    {"genero": "", "artista": "", "album": ""}
  )

  const handleChangeMusic = (e)=>{
    if(e.target.getAttribute('name')=='vargenero'){
      setMusica({"genero": e.target.value, "artista": musica.artista, "album": musica.album})
    }
    else if(e.target.getAttribute('name')=='varartista'){
      setMusica({"genero": musica.genero, "artista": e.target.value, "album": musica.album})
    }
    else if(e.target.getAttribute('name')=='varalbum'){
      setMusica({"genero": musica.genero, "artista": musica.artista, "album": e.target.value})
    }
  }

  // ------------------------------------------
    // CODE ADICIONAL PARA MODELO HANDLE ou MANIPULADOR 
    // UTILIZA O CODE INICIAL + ESTE HANDLE  
  // const handle = (e)=>setNome(e.target.value)
    // ou 
  // const handle = (e)=>{
  //   setNome(e.target.value)
  // }
  // ---------------------------------------------------
    

  // PARA O MODELO ONCHANGE NÃO É NECESSÁRIO NOVA CONST


  return (

    // MODELO EM OBJ
    <div className="container">
      <legend>Digite o gênero</legend>
     <input Type="text" name="vargenero" value={musica.genero} onChange={(e)=>handleChangeMusic(e)} />
      <p>{musica.genero}</p>
      <legend>Digite o artista</legend>
     <input Type="text" name="varartista" value={musica.artista} onChange={(e)=>handleChangeMusic(e)} />
      <p>{musica.artista}</p>
      <legend>Digite o album</legend>
     <input Type="text" name="varalbum" value={musica.ano} onChange={(e)=>handleChangeMusic(e)} />
      <p>{musica.album}</p>
      </div>

// -------------------------------------------------------

    // MODELO HANDLE ou MANIPULADOR 
      // <div className="container">
      // <legend>Digite seu nome</legend>
      // <input 
      // type="text" 
      // name="varnome"
      // value={nome}
      // onChange={(e)=>handle(e)}
      // />
      // <p>{nome}</p>
      // </div>

// ----------------------------------------------

      // MODELO ONCHANGE do INPUT
      // <div className="container">
      // <legend>Digite seu nome</legend>
      // <input 
      // type="text" 
      // name="varnome"
      // value={nome}
      // onChange={(e)=>setNome(e.target.value)}
      // />
      // <p>{nome}</p>
      // </div>

  )
}

export default App;
