import { PDF } from './PDF';

interface CreatePDFData {
  content: string;
  backgroundImageUrl?: string;
  text?: string;
}

export class CreatePDF {
  execute(data: CreatePDFData) {
    const pdf = new PDF({ ...data });

    return pdf;
  }
}
