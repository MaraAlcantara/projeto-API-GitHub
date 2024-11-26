const usuario = {
    fotoUrl: '',
    nome: '',
    bio: '',
    nomeUsuario: '',
    repositorios: [],

    setInfo (gitHubUser) {
        this.fotoUrl = gitHubUser.avatar_url;
        this.nome = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.nomeUsuario = gitHubUser.login;
    },

    setRepositories (repositories) {
        this.repositorios = repositories;
    }
}

export { usuario };