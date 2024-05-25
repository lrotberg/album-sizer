import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import words from "../words.json";
import FormLabel from "./FormLabel";

interface FormData {
  imageSize: string;
  pageCount: number;
  height: number;
  width: number;
  orientation: string;
}

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");

  const handleOrientationChange = (value: "vertical" | "horizontal") => {
    setOrientation(value);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const setOrientationInput = (registerValue: "height" | "width") => {
    return {
      w: "80px",
      dir: "ltr",
      placeholder: "4 5/8",
      ...register(registerValue, { min: 4, max: 11, required: true })
    };
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
          <FormControl isInvalid={errors.orientation?.type === "required"}>
            <FormLabel htmlFor="pageOrientation" text={words.pageOrientationLabel} />
            <RadioGroup
              id="pageOrientation"
              defaultValue="vertical"
              onChange={handleOrientationChange}
            >
              <HStack>
                <Radio value="vertical" {...register("orientation", { required: true })}>
                  {words.vertical}
                </Radio>
                <Radio value="horizontal" {...register("orientation", { required: true })}>
                  {words.horizontal}
                </Radio>
              </HStack>
            </RadioGroup>
            {errors.orientation?.type === "required" && (
              <FormErrorMessage>{words.required}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={errors.height?.type === "required" || errors.width?.type === "required"}
          >
            <VStack align={"start"}>
              <FormHelperText>{words.pageSizeExplanation}</FormHelperText>
              <HStack>
                <FormLabel htmlFor="width" text={words.width} />
                <Input id="width" {...setOrientationInput("width")} />
                {errors.width?.type === "required" && (
                  <FormErrorMessage>{words.required}</FormErrorMessage>
                )}
              </HStack>
              <HStack>
                {orientation === "vertical" ? (
                  <Box h="120px" w="80px" bg={"gray.300"} border={"1px"} borderColor={"gray.400"} />
                ) : (
                  <Box h="80px" w="120px" bg={"gray.300"} border={"1px"} borderColor={"gray.400"} />
                )}

                <VStack justifyContent={"center"}>
                  <FormLabel htmlFor="height" text={words.height} />
                  <Input id="height" {...setOrientationInput("height")} />
                  {errors.height?.type === "required" && (
                    <FormErrorMessage>{words.required}</FormErrorMessage>
                  )}
                </VStack>
              </HStack>
            </VStack>
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
