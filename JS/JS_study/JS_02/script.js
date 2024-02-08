const novaTarefaBtn = document.getElementsByTagName("button");
const usrIconEvnt = document.getElementById("user_icon_img");

function girarUsrIcon() {
    usrIconEvnt.addEventListener("mouseover", () => {
        usrIconEvnt.classList.add("girando");
    });

    usrIconEvnt.addEventListener("mouseout", () => {
        usrIconEvnt.classList.remove("girando");
    })
}

function addBtnEvento() {
    for (const i of novaTarefaBtn) {
        i.addEventListener("click", addNovaTarefa);
    }
}

function addNovaTarefa() {
    const btnId = this.id + "";
    const tarefaLista = document.createElement("li");

    const listaOpcao = function () {

        if (btnId.startsWith("d")) {
            return document.getElementById("dia_lista");
        }
        if (btnId.startsWith("n")) {
            return document.getElementById("noite_lista");
        }
    }

    const liTarefa = "" + prompt();

    if (liTarefa === "" || liTarefa.match(/\s+/)) {
        alert("Você esqueceu de entrar com a tarefa ;D");
    }
    else {
        const liConteudo = function () {
            const a = document.createElement("input");
            const b = document.createElement("label");
            const c = document.createElement("p");
            const frag = document.createDocumentFragment();

            if (!liTarefa.match("") || !liTarefa.match(" ")) {
                const rng = () => Math.floor(Math.random() * 100000 + 1) + "";

                const inputId = rng();
                a.setAttribute("id", inputId);
                a.setAttribute("type", "checkbox");


                b.setAttribute("for", inputId);
                b.appendChild(c);

                frag.appendChild(a);
                frag.appendChild(b);
                c.textContent = liTarefa;
            }

            return frag;
        }

        tarefaLista.appendChild(liConteudo());

        /* tarefaLista.addEventListener("click", function () {
            tarefaLista.setAttribute("class", "risco");
        });
         */
        listaOpcao().appendChild(tarefaLista);
    }


}

girarUsrIcon();
addBtnEvento();