import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Senha from './Pages/EsqueciASenha';
import Home from './Pages/Home';

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Cadastro/>}/>
                <Route path='/forgot/password' element={<Senha/>}/>

                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;