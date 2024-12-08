import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";
import { BlockType } from 'notion-block-renderer'
 
export type LayoutProps = {
  children: ReactNode;
};
 
export type PageProps = {
  slug: string;
  name: string;
  author: string;
  cover: string;
  published: string;
  tags: string[];
  content: string;
};

export  type BlockProps = {
  block: BlockType
}

export type NavMenuItemProps = {
  pathName: string,
  menuName: string
}

export type MobileNavItemProps = {
  pathName: string,
  menuName: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type SetOpenTypes = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type PortfolioCardProps = {
  url: string,
  title: string
}

export type TagProps = IndexProps & { tag: string }
 
export type CardProps = { page: PageType };

export type ArticleProps = {
  page: PageType;
  blocks: BlockType[];
};
export type ArticleMetaProps = CardProps;
 
export type IndexProps = { pages: PageType[] };
 
export type Params = ParsedUrlQuery & {
  slug?: string;
  tag?: string
};
 
export type FileType = {
  file?: { url: string };
  external?: { url: string };
};
 
export type AnnotationType = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  color: string;
};
 
export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationType;
};
 
export type PropertyType = {
  name: { title: RichTextType[] };
  author: { rich_text: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  published: { date: { start: string } };
  isPublic: { checkbox: boolean };
  tags: { multi_select: [{ name: string }] };
};
 
export type PageType = {
  id: string;
  cover: FileType | null;
  properties: PropertyType;
};

export type Skill = {
  skillName: string;
  officialUrl: string;
  imageUrl: string;
  description: string;
};