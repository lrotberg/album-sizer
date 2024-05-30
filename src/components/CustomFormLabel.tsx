import { FormLabel, Icon, Text } from "@chakra-ui/react";
import { CgAsterisk } from "react-icons/cg";

interface Props {
  htmlFor: string;
  text: string;
}

const CustomFormLabel = ({ htmlFor, text }: Props) => {
  return (
    <FormLabel htmlFor={htmlFor}>
      <Icon as={CgAsterisk} color="red.500" boxSize={2.5} mb={3} />
      <Text as="span">{text}</Text>
    </FormLabel>
  );
};

export default CustomFormLabel;
