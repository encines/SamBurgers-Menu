import { config, fields, collection } from "@keystatic/core";

const isProd = (import.meta as any).env?.PROD;

export default config({
  storage: isProd
    ? {
        kind: "github",
        repo: "encines/SamBurgers-Menu",
      }
    : {
        kind: "local",
      },
  ui: {
    brand: {
      name: "Sam Burgers - Admin",
    },
  },
  collections: {
    menu: collection({
      label: "Menú",
      slugField: "title",
      path: "src/content/menu/*",
      format: { data: "yaml" },
      entryLayout: "form",
      columns: ["title", "category", "price"],
      schema: {
        title: fields.slug({
          name: { label: "Nombre del platillo" },
        }),
        price: fields.number({
          label: "Precio",
          validation: { isRequired: true, min: 1 },
        }),
        description: fields.text({
          label: "Descripción",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Categoría",
          options: [
            { label: "Hamburguesas", value: "Hamburguesas" },
            { label: "Hot Dogs", value: "Hot Dogs" },
            { label: "Otros", value: "Otros" },
            { label: "Bebidas", value: "Bebidas" },
            { label: "Extras", value: "Extras" },
          ],
          defaultValue: "Hamburguesas",
        }),
        order: fields.number({
          label: "Orden (menor número = aparece primero)",
        }),
        img: fields.text({
          label: "URL de imagen (opcional)",
        }),
      },
    }),
  },
});
