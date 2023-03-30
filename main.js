const form = document.getElementById("form atividade");
const ImgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando/>"'
const ImgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado/>"'
const atividades = []
const notas = []
const spamAprovado = '<span class="aprovado">Aprovado</span'
const spamReprovado = '<span class="reprovado">Reprovado</span'
const notaMin = parseFloat(prompt("Digite a nota minima"))

let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal()
});

function adicionaLinha() {
    const InputNomeAtividade = document.getElementById('nome-atividade')
    const InputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(InputNomeAtividade.value)) {
        alert(`A atividade: ${InputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(InputNomeAtividade.value)
        notas.push(parseFloat(InputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${InputNomeAtividade.value} </td>`
        linha += `<td>${InputNotaAtividade.value} </td>`
        linha += `<td>${InputNotaAtividade.value >= notaMin ? ImgAprovado : ImgReprovado} </td>`
        linha += "</tr>"

        linhas += linha;

    }

        InputNomeAtividade.value = " ";
        InputNotaAtividade.value = " "; 


    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector("tbody")
        corpoTabela.innerHTML = linhas;
    }

    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();

        document.getElementById("media-final-valor").innerHTML = mediaFinal
        document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMin ? spamAprovado : spamReprovado

    }

    function calculaMediaFinal() {
        let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
            console.log(i)
        }

        return somaDasNotas / notas.length;
    }

