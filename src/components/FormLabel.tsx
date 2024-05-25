import { FormLabel as ChakraFormLabel, Icon, Text } from "@chakra-ui/react";
import { CgAsterisk } from "react-icons/cg";

interface Props {
  htmlFor: string;
  text: string;
}

const FormLabel = ({ htmlFor, text }: Props) => {
  return (
    <ChakraFormLabel htmlFor={htmlFor}>
      <Icon as={CgAsterisk} color="red.500" boxSize={2.5} mb={3} />
      <Text as="span">{text}</Text>
    </ChakraFormLabel>
  );
};

export default FormLabel;
