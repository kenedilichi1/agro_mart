import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { ProductData } from "../../utils/types";

interface ProductProps extends ProductData {
  email: string;
}

function ProductCard(props: ProductProps) {
  return (
    <Card minW={{ md: "sm" }} borderRadius=".75rem">
      <CardBody>
        <Box height={{ md: "10rem" }}>
          <Image
            src={props.productImage}
            alt={props.description}
            borderRadius="lg"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text>{props.description}</Text>
          <Box
            display="flex"
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text color="blue.600" fontSize="1.5rem">
              ${props.price}
            </Text>

            <Box>
              <Stack textAlign="left" gap="0">
                <Text>{props.category}</Text>
                <Link>{props.email}</Link>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
