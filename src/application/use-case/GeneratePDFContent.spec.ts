import { GeneratePDFContent } from './GeneratePDFContent';
import { InMemoryPDFsRepository } from '../InMemoryPDFsRepository';
import { PDF } from '../entity/PDF';

describe('Generate PDF Content', () => {
  let pdfsRepository: InMemoryPDFsRepository;
  let sut: GeneratePDFContent;

  beforeEach(() => {
    pdfsRepository = new InMemoryPDFsRepository();
    sut = new GeneratePDFContent(pdfsRepository);
  });

  it('should generate the pdf content', async () => {
    const pdf = new PDF({
      title: 'test pdf',
      content: 'test content',
    });

    pdfsRepository.items.push(pdf);

    const result = await sut.execute({
      pdfId: pdf.id,
    });

    expect(result.resolvedContent).toEqual(expect.any(String));
  });
});
