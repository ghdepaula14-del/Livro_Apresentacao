/* =========================
   ENTRAR NAS MEMÓRIAS
========================= */

function entrar() {

    document.querySelector("#inicio").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   CURIOSIDADES
========================= */

function mostrarCuriosidade(numero) {

    const caixa = document.getElementById("curiosidade");

    const curiosidades = {

        1: `
            <strong>1881</strong><br><br>

            Memórias Póstumas de Brás Cubas foi publicada em 1881
            e é considerada uma das obras fundamentais do Realismo
            brasileiro.
        `,

        2: `
            <strong>O defunto-autor</strong><br><br>

            Brás Cubas começa sua narrativa depois da própria morte.
            Por isso, ele não é simplesmente um autor contando a história:
            ele é um personagem morto que decidiu escrever suas memórias.
        `,

        3: `
            <strong>Machado de Assis</strong><br><br>

            Machado de Assis é considerado um dos maiores escritores
            da literatura brasileira. Sua obra apresenta muita ironia,
            crítica social e análise psicológica.
        `,

        4: `
            <strong>Realismo</strong><br><br>

            A obra rompe com características idealizadas do Romantismo
            e apresenta uma visão mais crítica e irônica da sociedade
            e do comportamento humano.
        `

    };

    caixa.innerHTML = curiosidades[numero];

}


/* =========================
   PERGUNTAS AO BRÁS CUBAS
========================= */

function responder(numero) {

    const resposta = document.getElementById("resposta");

    const respostas = {

        1: `
            <span>BRÁS CUBAS</span>

            <p>
                Arrependimento? Talvez. Mas depois de morto,
                descobri que algumas das maiores ambições da vida
                parecem muito pequenas quando vistas de fora dela.
            </p>
        `,

        2: `
            <span>BRÁS CUBAS</span>

            <p>
                A sociedade é cheia de pessoas preocupadas em parecer
                melhores do que realmente são. Eu, pelo menos,
                tive a sinceridade de admitir minhas próprias contradições.
            </p>
        `,

        3: `
            <span>BRÁS CUBAS</span>

            <p>
                Ora, meu caro leitor! Depois da morte, já não tenho
                reputação a perder. Posso contar minha história com
                uma liberdade que talvez não tivesse enquanto vivo.
            </p>
        `,

        4: `
            <span>BRÁS CUBAS</span>

            <p>
                Virgília foi uma das grandes paixões da minha vida.
                Nossa relação foi complicada, contraditória e,
                como muitas coisas em minha existência, bastante irônica.
            </p>
        `

    };

    resposta.innerHTML = respostas[numero];

    resposta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const elementos = document.querySelectorAll(
    ".card, .character, .timeline-item, .section-title"
);


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(25px)";

    elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observador.observe(elemento);

});