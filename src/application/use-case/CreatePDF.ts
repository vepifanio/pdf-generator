import { PDF } from '../entity/PDF';
import { PDFsRepository } from '../repository/PDFsRepository';

interface CreatePDFData {
  title: string;
  content: string;
  backgroundImage?: string;
  textColor?: string;
}

export class CreatePDF {
  constructor(private pdfsRepository: PDFsRepository) {}

  async execute(data: CreatePDFData) {
    const pdf = new PDF({
      ...data,
    });

    await this.pdfsRepository.save(pdf);

    return pdf;
  }
}
