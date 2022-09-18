import { z } from 'zod';

export const IVehicleSchema = z.object({
  model: z.string().min(3), // deve ter validação de tres caracteres
  year: z.number().lte(2022).gte(1900).int(), // deve ter validação de >= 1900 e <= 2022 e ser um inteiro positivo
  color: z.string().min(3), // deve ter validação de tres caracteres
  status: z.boolean().optional(), 
  buyValue: z.number().int(), // deve receber apenas numeros inteiros
});

export type IVehicle = z.infer<typeof IVehicleSchema>;