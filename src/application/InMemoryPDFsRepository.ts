import { PDF } from './entity/PDF';
import { PDFsRepository } from './repository/PDFsRepository';

export class InMemoryPDFsRepository implements PDFsRepository {
  items: PDF[] = [];

  async findById(id: string): Promise<PDF | null> {
    return this.items.find((item) => item.id === id) || null;
  }

  async save(pdf: PDF) {
    this.items.push(pdf);
  }
}
