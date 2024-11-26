const tela = {
    perfilDoUsuario: document.querySelector('.dados-do-perfil'),

    renderUser(dadosDoUsuario) {
        this.perfilDoUsuario.innerHTML =
            `<div class="info">
                    <img src="${dadosDoUsuario.fotoUrl}" alt="foto do pefil do usuário" />
                    <div class="dados">
                        <h1>${dadosDoUsuario.nome ?? 'Não possui nome cadastrado 😢'}</h1>
                        <p>${dadosDoUsuario.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    </div>
                </div>`

        let itensDoRepositorio = '';

        dadosDoUsuario.repositorios.forEach(repo =>            
            itensDoRepositorio += 
            `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a> </li>`
        );
        
        if (dadosDoUsuario.repositorios.length > 0) {
            this.perfilDoUsuario.innerHTML += 
                `<div class="repositorios sessao">
                                <h2>Repositórios</h2>
                                <ul>${itensDoRepositorio}</ul>
                            </div>`
        }
    },

    renderNotFound() {
        this.perfilDoUsuario.innerHTML = "<h3>Usuário não encontrado.</h3>";
    }
}

export { tela }
