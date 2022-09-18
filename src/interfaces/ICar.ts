import { z } from 'zod';
import { IVehicleSchema } from './IVehicle';

export const ICarSchema = IVehicleSchema.extend({
  doorsQty: z.number().lte(4).gte(2).int(), // deve ter validação de >= 2 e <= 4 e ser um inteiro positivo
  seatsQty: z.number().lte(7).gte(2).int(), // deve ter validação de >= 2 e <= 7 e ser um inteiro positivo
});

export type ICar = z.infer<typeof ICarSchema>;