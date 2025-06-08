function filtrarArmasPorTipo(armas, tipo) {
    return armas.filter((arma) => arma.tipoDeArmaId === tipo);
}

function filtrarArmasQueYaSonRecomendadas(armas, armasRecomendadas) {
    let armasQueYaSonRecomendadas = [];
    armas.forEach((arma) => {
        armasRecomendadas.forEach((armaRecomendada) => {
            if (Number(armaRecomendada.armaId) === Number(arma.id)) {
                armasQueYaSonRecomendadas.push(arma);
            }
        });
    });

    return armasQueYaSonRecomendadas;
}

function filtrarArmasQueNoSonRecomendadas(armas, armasRecomendadas) {
    let armasQueNoSonRecomendadas = [];

    armas.forEach((arma) => {
        const armaRecomendada = armasRecomendadas.find(
            (armaRecomendada) => Number(armaRecomendada.armaId) === Number(arma.id)
        );
        if (!armaRecomendada) {
            armasQueNoSonRecomendadas.push(arma);
        }
    });

    return armasQueNoSonRecomendadas;
}

export { filtrarArmasPorTipo, filtrarArmasQueYaSonRecomendadas, filtrarArmasQueNoSonRecomendadas };