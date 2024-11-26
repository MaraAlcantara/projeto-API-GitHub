import { baseURL } from '../variables.js';

async function getUsuario(nomeDoUsuario) {
    const resposta = await fetch(`${baseURL}/${nomeDoUsuario}`);
    return await resposta.json();
    
}

export {getUsuario}