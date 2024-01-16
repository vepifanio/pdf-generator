import { randomUUID } from 'node:crypto';

interface PDFProps {
  id?: string;
  title: string;
  content: string;
  backgroundImageUrl?: string;
  textColor?: string;
  createdAt?: Date;
}

export class PDF {
  id: string;
  title: string;
  content: string;
  backgroundImageUrl?: string;
  textColor?: string;
  createdAt: Date;

  constructor({
    id,
    title,
    content,
    backgroundImageUrl,
    textColor,
    createdAt,
  }: PDFProps) {
    this.id = id || randomUUID();
    this.title = title;
    this.content = content;
    this.backgroundImageUrl = backgroundImageUrl;
    this.textColor = textColor;
    this.createdAt = createdAt || new Date();
  }

  resolveContent(contentVariables: { [key: string]: string } = {}): string {
    const contentTextResolved = Object.keys(contentVariables).reduce(
      (text, key) => {
        return text.replace(`{{${key}}}`, contentVariables[key]);
      },
      this.content,
    );

    const remainingVariables = contentTextResolved.match(/{{(\w+)}}/gim);

    if (remainingVariables) {
      const errorText = `Some required content variables are undefined: ${remainingVariables.join(
        ', ',
      )}`;

      throw new Error(errorText);
    }

    return contentTextResolved;
  }
}
