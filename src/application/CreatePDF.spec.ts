import { CreatePDF } from './CreatePDF';
import { InMemoryPDFsRepository } from './InMemoryPDFsRepository';

describe('Create PDF', () => {
  it('should be able to create a new PDF', async () => {
    const pdfsRepository = new InMemoryPDFsRepository();
    const sut = new CreatePDF(pdfsRepository);

    sut.execute({
      title: 'PDF title',
      content: 'PDF content',
    });

    expect(pdfsRepository.items).toHaveLength(1);
    expect(pdfsRepository.items[0].title).toBe('PDF title');
  });
});
