import { MainFormData, PhotoSize } from "@/interfaces";
import words from "@/words";
import { FormControl, FormErrorMessage, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import CustomFormLabel from "@components/CustomFormLabel";
import { UseFormReturn } from "react-hook-form";

interface Props {
  setImageSize: (size: { size: { width: number; height: number } }) => void;
  form: UseFormReturn<MainFormData>;
}

const PhotoSizeRadios = ({ setImageSize, form }: Props) => {
  const {
    register,
    formState: { errors }
  } = form;

  const handleImageSizeChange = (value: PhotoSize) => {
    if (value === "standard") {
      setImageSize({ size: { width: 4, height: 6 } });
    } else {
      setImageSize({ size: { width: 3.5, height: 5 } });
    }
  };

  return (
    <FormControl isInvalid={errors.imageSize?.type === "required"}>
      <CustomFormLabel htmlFor="imageSize" text={words.imageSizeLabel} />
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
  );
};

export default PhotoSizeRadios;
