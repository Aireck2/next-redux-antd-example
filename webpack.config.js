import path from "path";

export default {
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "src/config/"),
      "@pages": path.resolve(__dirname, "src/pages/")
    }
  }
};
