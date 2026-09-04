const dadosDoCatalogo = [
    { id: 1, nome: 'Teclado', preco: 120, estoque: 8, categoria: 'Periférico' },
    { id: 2, nome: 'Monitor', preco: 900, estoque: 10, categoria: 'Vídeo' },
    { id: 3, nome: 'Fonte Asus Gold', preco: 350, estoque: 4, categoria: 'Fonte' },
    { id: 4, nome: 'Mouse', preco: 80, estoque: 12, categoria: 'Periférico' }
];
export function listarDadosCatalogo() {
    return dadosDoCatalogo.map((produto) => ({ ...produto }));
}