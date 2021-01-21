import { Currency } from './currency'; 
export interface Currencies {
  date?: Date;
	base?: number;
	rates: Currency[];
  }