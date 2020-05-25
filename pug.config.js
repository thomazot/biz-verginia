var stores = require("./stores.js")
module.exports = {
    pretty: true,
    locals: {
        stores,
        articles: [
            {
                title: "Verginia + Cor",
                image: "/assets/articles/article-01.jpg",
                icons: [
                    "/assets/images/icon-01.png",
                    "/assets/images/icon-02.png",
                ],
                description:
                    "<p>O projeto <strong>Verginia + Cor</strong> é destinado as escolas, instituições e comunidades. Através desse projeto fazemos doações de tintas para beneficiar aqueles que mais precisam proporcionando bem estar, conforto e alegria.</p>",
            },
            {
                title: "Projeto Fazendo Arte",
                image: "/assets/articles/article-02.jpg",
                icons: [
                    "/assets/images/icon-03.png",
                    "/assets/images/icon-04.png",
                ],
                description: `
                    <p>Transformar a cidade, levando mais cor: esse é o <strong>Projeto Fazendo Arte</strong>.</p>
                    <p>Artista, pintores e frafiteiros locais são incentivados e patrocinados pela Verginia para revitalizar e soltar a criatividade em espaços e painéis privados, espalhados pelas cidades.</p>
                `,
            },
            {
                title: "Coleta Colorida",
                image: "/assets/articles/article-03.jpg",
                icons: [
                    "/assets/images/icon-05.png",
                    "/assets/images/icon-06.png",
                ],
                description: `
                    <p>Não desperdice, doe! Esse projeto é bom para a sociedade e para o planeta terra. A <strong>Coleta Colorida</strong> faz o recolhimento de sobras de tintas e materiais de obras que iriam ao lixo, mas ainda podem ser usados. Fazemos o reprocessamento e distribuimos para comunidades, colégios e instituições, além de fazermos a destinação correta e reciclagem das latas</p>
                `,
            },
        ],
    },
}
