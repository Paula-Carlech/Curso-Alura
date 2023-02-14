async function listaVideos(){
    const conexao = await fetch("url do servidor");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}
