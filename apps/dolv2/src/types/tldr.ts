interface TldrListType {
  title: string;
  short_summary: string;
  slug: string;
}

interface TldrDataType {
  title: string;
  description: string;
  short_summary: string;
  wiki: {
    wiki_slug: string;
    image: string | null;
    pageid: number;
  };
}

export type { TldrListType, TldrDataType };
