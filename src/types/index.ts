export type formField = Record<"name" | "value", string>;
export type experience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export type skill = {
  name: string;
  imagePath: string;
};

export type bio = {
  name: string;
  title: string;
  description: string;
};
