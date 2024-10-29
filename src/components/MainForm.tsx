import { createFractionString, downloadFile } from "@/helperFunctions";
import { MainFormData, Page, PageOrientation, Photo } from "@/interfaces";
import words from "@/words";
import { addRow, buildXml, xmlDataType } from "@/xmlHandler.ts";
import { Box, Button, FormControl, HStack, VStack } from "@chakra-ui/react";
import * as openings from "@classes";
import CheckboxGrid from "@components/CheckboxGrid";
import OrientationRadios from "@components/OrientationRadios";
import PageCountSelect from "@components/PageCountSelect.tsx";
import PageDimensions from "@components/PageDimensions.tsx";
import PhotoSizeRadios from "@components/PhotoSizeRadios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const MainForm = () => {
  const form = useForm<MainFormData>();
  const { handleSubmit } = form;

  const [pageCount, setPageCount] = useState<number>(2);
  const [photo, setPhoto] = useState<Photo>({ size: { width: 0, height: 0 } });
  const [page, setPage] = useState<Page>({ size: { width: 0, height: 0 } });
  const [orientation, setOrientation] = useState<PageOrientation>("horizontal");
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const [xml, setXml] = useState<string>("");
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const onSubmit = async (data: FieldValues) => {
    const dimensions = checkboxes.map(checkbox => {
      const instance = sortedOpenings.find(opening => opening.name === checkbox)!.instance;
      return { checkbox, dimensions: instance.getDimensions() };
    });
    calcXml();
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

  const calcXml = () => {
    const xmlObj: xmlDataType = { data: { parts: { row: [] } } };
    addRow(xmlObj, createFractionString(4), createFractionString(6.25), 1, "עמ1 פלאפ");
    addRow(xmlObj, createFractionString(4), createFractionString(5), 1, "עמ2 דלת", true);
    setXml(buildXml(xmlObj));
    setIsCalculated(true);
  };

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
            <HStack>
              <Button type="submit">{words.calculate}</Button>
              {isCalculated && (
                <Button
                  ms={2}
                  onClick={() => downloadFile(new File([xml], "output.xml", { type: "text/xml" }))}
                >
                  {words.downloadXml}
                </Button>
              )}
            </HStack>
          </FormControl>
        </VStack>
      </form>
    </Box>
  );
};

export default MainForm;
