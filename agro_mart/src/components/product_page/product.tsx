import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";

import { farmProducts } from "../../utils/product_data";
import ProductCard from "./product_card";
import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";

function Products() {
  return (
    <Box>
      <Box>
        <Heading>Products</Heading>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginTop="2rem"
      >
        <Button rightIcon={<TriangleDownIcon />}>Filter </Button>
        <Button leftIcon={<AddIcon fontSize=".75rem" marginTop="-.2rem" />}>
          Add Product
        </Button>
      </Box>
      <SimpleGrid
        pt={{ base: "1rem", md: "2.5rem", lg: "3.188rem" }}
        columns={{ base: 1, sm: 1, md: 1, lg: 3 }}
        spacing={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
      >
        {farmProducts.map((product, index) => (
          <ProductCard
            key={index}
            category={product.category}
            description={product.description}
            location={product.location}
            name={product.name}
            price={product.price}
            productImage={product.productImage}
            email="example@gmail.com"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Products;
