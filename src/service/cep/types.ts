import { Cep } from './domain/cep';

export type CEPResponse = {
  ok: boolean;
  data?: Cep;
  error?: string;
};
