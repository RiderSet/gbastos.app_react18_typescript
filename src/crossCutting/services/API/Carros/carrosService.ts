import { Environment } from '../../../environment';
import { Api } from '../axios-config';


export interface IListagemCarro {
  id: number;
  nome: string;
}

export interface IDetalheCarro {
  id: number;
  nome: string;
}

type TCarrosComTotalCount = {
  data: IListagemCarro[];
  totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TCarrosComTotalCount | Error> => {
  try {
    const urlRelativa = `/Carros?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nome_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<IDetalheCarro | Error> => {
  try {
    const { data } = await Api.get(`/Carros/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
  }
};

const create = async (dados: Omit<IDetalheCarro, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheCarro>('/Carros', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: IDetalheCarro): Promise<void | Error> => {
  try {
    await Api.put(`/Carros/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/Carros/${id}`);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }
};


export const CarrosService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};