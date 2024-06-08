import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  VStack
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { parseFloatFromFractionString } from "../helperFunctions";
import { MainFormData, Page } from "../interfaces";
import words from "../words";
import CustomFormLabel from "./CustomFormLabel";

interface Props {
  setPage: (value: Page) => void;
  page: { size: { width: number; height: number } };
  orientation: string;
  form: UseFormReturn<MainFormData>;
}

const PageDimensions = ({ page, setPage, orientation, form }: Props) => {
  const {
    register,
    formState: { errors }
  } = form;

  const handlePageDimensionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    const numberValue = parseFloatFromFractionString(value);

    if (name === "height") {
      setPage({ size: { width: page.size.width, height: numberValue } });
    } else {
      setPage({ size: { width: numberValue, height: page.size.height } });
    }
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
    <FormControl
      isInvalid={errors.height?.type === "required" || errors.width?.type === "required"}
    >
      <VStack align={"start"}>
        <FormHelperText>{words.pageSizeExplanation}</FormHelperText>
        <HStack>
          <CustomFormLabel htmlFor="width" text={words.width} />
          <Input
            id="width"
            {...setOrientationInput("width")}
            onChange={handlePageDimensionsChange}
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
            <CustomFormLabel htmlFor="height" text={words.height} />
            <Input
              id="height"
              {...setOrientationInput("height")}
              onChange={handlePageDimensionsChange}
            />
            {errors.height?.type === "required" && (
              <FormErrorMessage>{words.required}</FormErrorMessage>
            )}
          </VStack>
        </HStack>
      </VStack>
    </FormControl>
  );
};

export default PageDimensions;
