export interface Lancamento {
  id: number;
  tipo: string;
  descricao: string;
  dataVencimento: string;
  dataPagamento?: any;
  valor: number;
  pessoa: string;
}
