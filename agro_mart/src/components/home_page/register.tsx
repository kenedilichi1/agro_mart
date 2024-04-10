import { FormDataType } from "./types";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const inputStyle = {
  height: "3rem",
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(FormDataType) });

  const onSubmit: SubmitHandler<FormDataType> = (data) => console.log(data);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      width={{ base: "100%", lg: "30rem" }}
      display="flex"
      flexDirection="column"
      gap="1.5rem"
      border="1px solid gray "
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      borderRadius="0.75rem"
      padding="1rem"
    >
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your full name"
          {...register("name")}
          {...inputStyle}
        />
        {errors.name?.message && (
          <FormHelperText textAlign="left">
            {errors.name?.message}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Farm Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your farm name"
          {...register("farmName")}
          {...inputStyle}
        />
        {errors.farmName?.message && (
          <FormHelperText textAlign="left">
            {errors.farmName?.message}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Contact</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email as your contact address "
          {...register("contactAddress")}
          {...inputStyle}
        />
        {errors.contactAddress?.message && (
          <FormHelperText textAlign="left">
            {errors.contactAddress?.message}
          </FormHelperText>
        )}
      </FormControl>

      <Button marginTop="2rem" type="submit" width="7rem" mx="auto">
        Submit
      </Button>
    </Box>
  );
}

export default Register;
