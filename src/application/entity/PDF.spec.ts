import { PDF } from './PDF';

describe('PDF', () => {
  it("should be able to resolve a PDF's content", () => {
    const pdf = new PDF({
      title: 'test',
      content: 'this is a {{test}}',
    });

    const resolvedContent = pdf.resolveContent({
      test: 'resolved variable',
    });

    expect(resolvedContent).toBe('this is a resolved variable');
  });

  it("should not be able to resolve a PDF's if there is some missing resolved variable", () => {
    const pdf = new PDF({
      title: 'test',
      content: 'this is a {{test}}',
    });

    expect(() => pdf.resolveContent()).toThrow();
  });
});
