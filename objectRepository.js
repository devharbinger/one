const objectRepository = {
  "default": {
    "RNNXgb": (page) => page.locator(".RNNXgb"),
    "label__exact_true_": (page) => page.getByLabel("Search", { exact: true }),
    "link_list_of_dsg_variants": (page) => page.getByRole("link", { name: "List of DSG variants" }),
  },
};
module.exports = objectRepository;