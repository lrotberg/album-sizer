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
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { parseFloatFromFractionString } from "../helperFunctions";
import { Page, Photo } from "../interfaces";
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

  const [imageSize, setImageSize] = useState<Photo>({ size: { width: 0, height: 0 } });
  const [pageSize, setPageSize] = useState<Page>({ size: { width: 0, height: 0 } });
  const [pageWidth, setPageWidth] = useState<number>(0);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">("horizontal");

  const handleImageSizeChange = (value: "standard" | "small") => {
    if (value === "standard") {
      setImageSize({ size: { width: 4, height: 6 } });
    } else {
      setImageSize({ size: { width: 3.5, height: 5 } });
    }
  };

  //!FIXME: Page size is updating only after the second submit, state change reqire a rerender
  const handlePageSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    const numberValue = parseFloatFromFractionString(value);

    if (name === "height") {
      setPageHeight(numberValue);
    } else {
      setPageWidth(numberValue);
    }
  };

  const handleOrientationChange = (value: "vertical" | "horizontal") => {
    setOrientation(value);
  };

  const onSubmit = (data: FieldValues) => {
    setPageSize({ size: { width: pageWidth, height: pageHeight } });
    console.log(data, imageSize, pageSize, orientation);
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
            <RadioGroup id="imageSize" onChange={handleImageSizeChange}>
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
              defaultValue="horizontal"
              onChange={handleOrientationChange}
            >
              <HStack>
                <Radio value="horizontal" {...register("orientation", { required: true })}>
                  {words.horizontal}
                </Radio>
                <Radio value="vertical" {...register("orientation", { required: true })}>
                  {words.vertical}
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
                <Input
                  id="width"
                  {...setOrientationInput("width")}
                  onChange={handlePageSizeChange}
                />
                {errors.width?.type === "required" && (
                  <FormErrorMessage>{words.required}</FormErrorMessage>
                )}
              </HStack>
              <HStack>
                {orientation === "horizontal" ? (
                  <Box h="80px" w="120px" bg={"gray.300"} border={"1px"} borderColor={"gray.400"} />
                ) : (
                  <Box h="120px" w="80px" bg={"gray.300"} border={"1px"} borderColor={"gray.400"} />
                )}

                <VStack justifyContent={"center"}>
                  <FormLabel htmlFor="height" text={words.height} />
                  <Input
                    id="height"
                    {...setOrientationInput("height")}
                    onChange={handlePageSizeChange}
                  />
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
