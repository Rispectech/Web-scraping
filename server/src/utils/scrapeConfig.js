const scrapeConfig = {
  profile: "#ember152 > h2",
  company: "#ember172",
  location:
    "#main > div > section.scaffold-layout__detail.overflow-x-hidden.jobs-search__job-details > div > div.job-view-layout.jobs-details > div:nth-child(1) > div > div:nth-child(1) > div > div.relative > div.jobs-unified-top-card__content--two-pane > div.jobs-unified-top-card__primary-description > span.jobs-unified-top-card__subtitle-primary-grouping.t-black > span.jobs-unified-top-card__bullet",
  workingType:
    "#main > div > section.scaffold-layout__detail.overflow-x-hidden.jobs-search__job-details > div > div.job-view-layout.jobs-details > div:nth-child(1) > div > div:nth-child(1) > div > div.relative > div.jobs-unified-top-card__content--two-pane > div.jobs-unified-top-card__primary-description > span.jobs-unified-top-card__subtitle-primary-grouping.t-black > span.jobs-unified-top-card__workplace-type",
  type: "#main > div > section.scaffold-layout__detail.overflow-x-hidden.jobs-search__job-details > div > div.job-view-layout.jobs-details > div:nth-child(1) > div > div:nth-child(1) > div > div.relative > div.jobs-unified-top-card__content--two-pane > div.mt5.mb2 > ul > li:nth-child(1) > span",

  description: "#job-details > span",
};

module.exports = { scrapeConfig };
