import { randomUUID } from 'node:crypto';

interface PDFProps {
  id?: string;
  content: string;
  backgroundImageUrl?: string;
  textColor?: string;
  createdAt?: Date;
}

export class PDF {
  id: string;
  content: string;
  backgroundImageUrl?: string;
  textColor?: string;
  createdAt: Date;

  constructor({
    id,
    content,
    backgroundImageUrl,
    textColor,
    createdAt,
  }: PDFProps) {
    this.id = id || randomUUID();
    this.content = content;
    this.backgroundImageUrl = backgroundImageUrl;
    this.textColor = textColor;
    this.createdAt = createdAt || new Date();
  }
}
