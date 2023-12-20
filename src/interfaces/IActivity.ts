interface IActivity {
  id: string;
  title: string;
  context: string;
  date_published: string;
  url: string;
  author: string;
  image?: string;
}

interface IRawData {
  items: {
    attachments: [];
    authors: {
      name: string;
    }[];
    content_html: string;
    date_published: string;
    id: string;
    content_text: string;
    image: string;
    title: string;
    url: string;
  }[];
  title: string;
  description: string;
}

export type { IRawData };

export default IActivity;
