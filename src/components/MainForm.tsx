import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as openings from "../classes";
import Opening from "../classes/Opening";
import { parseFloatFromFractionString } from "../helperFunctions";
import { MainFormData, Page, PageOrientation, Photo } from "../interfaces";
import words from "../words.ts";
import CustomFormLabel from "./CustomFormLabel";
import OrientationRadios from "./OrientationRadios";
import PageCountSelect from "./PageCountSelect.tsx";
import PhotoSizeRadios from "./PhotoSizeRadios";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MainFormData>();

  const [pageCount, setPageCount] = useState<number>(2);
  const [photo, setPhoto] = useState<Photo>({ size: { width: 0, height: 0 } });
  const [page, setPage] = useState<Page>({ size: { width: 0, height: 0 } });
  const [orientation, setOrientation] = useState<PageOrientation>("horizontal");
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, instance: Opening) => {
    if (e.target.checked) {
      setCheckboxes([...checkboxes, instance.getName()]);
    } else if (!e.target.checked) {
      setCheckboxes(checkboxes.filter(checkbox => checkbox !== instance.getName()));
    }
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    const numberValue = parseFloatFromFractionString(value);

    if (name === "height") {
      setPage({ size: { width: page.size.width, height: numberValue } });
    } else {
      setPage({ size: { width: numberValue, height: page.size.height } });
    }
  };

  const onSubmit = (data: FieldValues) => {
    const dimensions = checkboxes.map(checkbox => {
      const instance = sortedOpenings.find(opening => opening.name === checkbox)!.instance;
      return { checkbox, dimensions: instance.getDimensions() };
    });
    console.log({
      data,
      pageCount,
      orientation,
      imageSize: photo.size,
      pageSize: page.size,
      checkboxes,
      dimensions
    });
  };

  const setOrientationInput = (registerValue: "height" | "width") => {
    return {
      w: "80px",
      dir: "ltr",
      placeholder: "4 5/8",
      ...register(registerValue, { min: 4, max: 11, required: true })
    };
  };

  const sortedOpenings = Object.keys(openings)
    .map(opening => {
      const Opening = openings[opening as keyof typeof openings];
      const instance = new Opening(page, photo);
      const name = instance.getName();
      return { name, instance };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit(onSubmit)} className="object-center">
        <VStack>
          <PhotoSizeRadios setImageSize={setPhoto} />
          <PageCountSelect setPageCount={setPageCount} />
          <OrientationRadios setOrientation={setOrientation} />
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
                  <CustomFormLabel htmlFor="height" text={words.height} />
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
            <CheckboxGroup>
              <SimpleGrid columns={5} spacing={3} my={2}>
                {sortedOpenings.map(({ name, instance }) => (
                  <Checkbox
                    value={name}
                    key={name}
                    {...register("openings")}
                    onChange={e => handleCheckboxChange(e, instance)}
                  >
                    {name}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <Button type="submit">{words.calculate}</Button>
          </FormControl>
        </VStack>
      </form>
    </Box>
  );
};

export default MainForm;
