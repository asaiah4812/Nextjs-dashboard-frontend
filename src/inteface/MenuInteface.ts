type LinkPro = {
  id: number;
  name: string;
  url: string;
  icon: any;
};

export interface LinkProps {
  id: number;
  title: string;
  list: LinkPro[];
};
