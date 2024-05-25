import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Radio,
  RadioGroup,
  Select,
  VStack
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import words from "../words.json";
import FormLabel from "./FormLabel";

interface FormData {
  imageSize: string;
  pageCount: number;
}

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit(onSubmit)} className="object-center">
        <VStack>
          <FormControl isInvalid={errors.imageSize?.type === "required"}>
            <FormLabel htmlFor="imageSize" text={words.imageSizeLabel} />
            <RadioGroup id="imageSize">
              <HStack>
                <Radio value="standard" {...register("imageSize", { required: true })}>
                  {words.standardSize}
                </Radio>
                <Radio value="small" {...register("imageSize", { required: true })}>
                  {words.smallSize}
                </Radio>
              </HStack>
            </RadioGroup>
            {errors.imageSize?.type === "required" && (
              <FormErrorMessage>{words.required}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.pageCount?.type === "required"}>
            <HStack>
              <FormLabel htmlFor="pageCount" text={words.pageCountSelectLabel} />
              <Select id="pageCount" {...register("pageCount", { required: true })} w="fit-content">
                <option value="" defaultValue={""}></option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
              </Select>
            </HStack>
            {errors.pageCount?.type === "required" && (
              <FormErrorMessage>{words.required}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <Button type="submit">{words.submit}</Button>
          </FormControl>
        </VStack>
      </form>
    </Box>
  );
};

export default MainForm;
