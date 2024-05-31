import { FormControl, FormErrorMessage, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MainFormData, PageOrientation } from "../interfaces";
import words from "../words";
import CustomFormLabel from "./CustomFormLabel";

interface Props {
  setOrientation: (value: PageOrientation) => void;
}

const OrientationRadios = ({ setOrientation }: Props) => {
  const {
    register,
    formState: { errors }
  } = useForm<MainFormData>();

  const handleOrientationChange = (value: PageOrientation) => {
    setOrientation(value);
  };

  return (
    <FormControl isInvalid={errors.orientation?.type === "required"}>
      <CustomFormLabel htmlFor="pageOrientation" text={words.pageOrientationLabel} />
      <RadioGroup id="pageOrientation" defaultValue="horizontal" onChange={handleOrientationChange}>
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
  );
};

export default OrientationRadios;
