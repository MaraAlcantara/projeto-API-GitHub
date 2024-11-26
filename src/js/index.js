import { getUsuario } from './services/users.js';
import { getRepositorios } from './services/repositories.js';

import { usuario } from './objects/users.js';
import { tela } from './objects/screen.js';

document.getElementById('btn-pesquisa').addEventListener('click', () => {
    const nomeUsuario = document.getElementById('nome-usuario').value;

    if (validarEntradas(nomeUsuario)) return;

    obterDadosDoUsuario(nomeUsuario);
});

document.getElementById('nome-usuario').addEventListener('keyup', (e) => {
    const nomeUsuario = e.target.value;
    const tecla = e.which || e.keyCode;
    const teclaFoiPressionada = tecla === 13;

    if (teclaFoiPressionada) {
        if (validarEntradas(nomeUsuario)) return;
        
        obterDadosDoUsuario(nomeUsuario);
    }   
    }
)

function validarEntradas (nomeUsuario) {
    if (nomeUsuario.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub');
        return true;
    }
}

async function obterDadosDoUsuario (nomeDoUsuario) {
    
    const respostaDoUsuario = await getUsuario(nomeDoUsuario);

    if (respostaDoUsuario.message === "Not Found") {
        tela.renderNotFound();
        return;
    }

    const respostaDoRepositorio = await getRepositorios(nomeDoUsuario);
    
    usuario.setInfo(respostaDoUsuario);
    usuario.setRepositories(respostaDoRepositorio);
    
    tela.renderUser(usuario);
}
