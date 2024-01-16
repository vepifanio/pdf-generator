import { PDFsRepository } from '../repository/PDFsRepository';

interface GeneratePDFContentData {
  pdfId: string;
  contentVariables?: {
    [key: string]: string;
  };
}

interface GeneratePDFContentResponse {
  resolvedContent: string;
}

export class GeneratePDFContent {
  constructor(private pdfsRepository: PDFsRepository) {}

  async execute({
    pdfId,
    contentVariables,
  }: GeneratePDFContentData): Promise<GeneratePDFContentResponse> {
    const pdf = await this.pdfsRepository.findById(pdfId);

    if (!pdf) {
      throw new Error('PDF not found.');
    }

    const resolvedContent = pdf.resolveContent(contentVariables);

    return {
      resolvedContent,
    };
  }
}
