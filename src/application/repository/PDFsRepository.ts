import { PDF } from '../entity/PDF';

export interface PDFsRepository {
  findById(id: string): Promise<PDF | null>;
  save(pdf: PDF): Promise<void>;
}
