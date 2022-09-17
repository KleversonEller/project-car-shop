export interface IVehicle {
  model: string; // deve ter validação de tres caracteres
  year: number; // deve ter validação de >= 1900 e <= 2022 e ser um inteiro positivo
  color: string; // deve ter validação de tres caracteres
  status?: boolean; 
  buyValue: number; // deve receber apenas numeros inteiros
}