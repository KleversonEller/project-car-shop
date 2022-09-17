import { IVehicle } from './IVehicle';

export interface ICar extends IVehicle {
  doorsQty: number; // deve ter validação de >= 2 e <= 4 e ser um inteiro positivo
  seatsQty: number; // deve ter validação de >= 2 e <= 7 e ser um inteiro positivo
}