import { Box, Button, FormControl, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as openings from "../classes";
import { MainFormData, Page, PageOrientation, Photo } from "../interfaces";
import words from "../words.ts";
import CheckboxGrid from "./CheckboxGrid.tsx";
import OrientationRadios from "./OrientationRadios";
import PageCountSelect from "./PageCountSelect.tsx";
import PageDimensions from "./PageDimensions.tsx";
import PhotoSizeRadios from "./PhotoSizeRadios";

const MainForm = () => {
  const form = useForm<MainFormData>();
  const { handleSubmit } = form;

  const [pageCount, setPageCount] = useState<number>(2);
  const [photo, setPhoto] = useState<Photo>({ size: { width: 0, height: 0 } });
  const [page, setPage] = useState<Page>({ size: { width: 0, height: 0 } });
  const [orientation, setOrientation] = useState<PageOrientation>("horizontal");
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

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
          <PageDimensions form={form} page={page} setPage={setPage} orientation={orientation} />
          <CheckboxGrid
            form={form}
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
            sortedOpenings={sortedOpenings}
          />
          <FormControl>
            <Button type="submit">{words.calculate}</Button>
          </FormControl>
        </VStack>
      </form>
    </Box>
  );
};

export default MainForm;
