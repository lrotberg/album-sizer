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
  const form = useForm<MainFormData>();
  const { handleSubmit } = form;

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
          <PhotoSizeRadios form={form} setImageSize={setPhoto} />
          <PageCountSelect form={form} setPageCount={setPageCount} />
          <OrientationRadios form={form} setOrientation={setOrientation} />
          <FormControl>
            <Button type="submit">{words.calculate}</Button>
          </FormControl>
        </VStack>
      </form>
    </Box>
  );
};

export default MainForm;
