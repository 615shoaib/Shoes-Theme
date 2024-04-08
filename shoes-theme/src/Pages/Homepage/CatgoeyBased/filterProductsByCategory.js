export const filterProductsByCategory = (products, selectedCategory) => {
  console.log({products,selectedCategory})
    return Array.isArray(products)
      ? products.filter((product) =>
          product.categories && product.categories.some((category) => category.name === selectedCategory)
        )
      : [];
  };
  