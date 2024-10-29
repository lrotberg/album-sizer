import { MainFormData } from "@/interfaces";
import words from "@/words";
import { FormControl, FormErrorMessage, HStack, Select } from "@chakra-ui/react";
import CustomFormLabel from "@components/CustomFormLabel";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  setPageCount: (value: number) => void;
  form: UseFormReturn<MainFormData>;
}

const PageCountSelect = ({ setPageCount, form }: Props) => {
  const {
    register,
    formState: { errors }
  } = form;

  const handlePageCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setPageCount(parseInt(e.target.value));
  };

  return (
    <FormControl isInvalid={errors.pageCount?.type === "required"}>
      <HStack>
        <CustomFormLabel htmlFor="pageCount" text={words.pageCountSelectLabel} />
        <Select
          id="pageCount"
          {...register("pageCount", { required: true })}
          w="fit-content"
          onChange={handlePageCountChange}
        >
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
  );
};

export default PageCountSelect;
