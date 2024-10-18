const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformaçõesGlobais () {
    const res = await fetch(url)
    const dados = res.json()
    console.log(dados);
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-container_texto")
}
visualizarInformaçõesGlobais()



