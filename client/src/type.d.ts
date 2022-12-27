class ScrapeType {
  //   setFormState: React.Dispatch<string>;
  getScrapeData: (link: string) => Promise<void>;
}

class ScrapeDataType {
  scrapeData: {
    profile: string;
    company: string;
    type: string;
    location: string;
    description: string[];
    workingType: string;
  };
}
