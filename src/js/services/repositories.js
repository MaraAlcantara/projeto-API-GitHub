import { baseURL, qtdeRepositorios } from '../variables.js';

async function getRepositorios(nomeDoUsuario) {
    const resposta = await fetch(`${baseURL}/${nomeDoUsuario}/repos?per_page=${qtdeRepositorios}`);
    return await resposta.json();
}

export {getRepositorios};