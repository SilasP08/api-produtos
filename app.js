import { buscarProdutoPorId, listarCategorias } from "./catalogo/consultas.js";
import { carregarAmbiente, exibirDiagnostico } from "./config/ambiente.js";
import { formatarMoeda } from "./utils/formartarMoeda.js";

async function executar() {
    try {
        const configuracao = carregarAmbiente(process.argv[2])
        const idSolicitado = carregarAmbiente(process.arcv[3])
        if (!Number.isInteger(idSolicitado)) {
            throw new Error('Informe um indentificador inteiro para o produto');
        }
        exibirDiagnostico(configuracao);
        const [produto, categoria] = await Promise.all([
            buscarProdutoPorId(idSolicitado),
            listarCategorias()
        ]);
        console.log({
            produto: {
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                precoFormatado: formatarMoeda(produto.preco),
                categoria: produto.categoria,
                valorEmEstoque: produto.calcularValorEmEstoque(),
                valorEmEstoqueFormatado: formatarMoeda(produto.calcularValorEmEstoque())
            },
            categorias
        });
    } catch (erro) {
        console.error(erro.message);
        process.exitCode=1;
    }
}
executar();