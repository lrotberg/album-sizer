import { Checkbox, CheckboxGroup, FormControl, SimpleGrid } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import Opening from "../classes/Opening";
import { MainFormData } from "../interfaces";

interface Props {
  form: UseFormReturn<MainFormData>;
  setCheckboxes: (value: string[]) => void;
  checkboxes: string[];
  sortedOpenings: { name: string; instance: Opening }[];
}

const CheckboxGrid = ({ checkboxes, setCheckboxes, sortedOpenings, form }: Props) => {
  const { register } = form;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, instance: Opening) => {
    if (e.target.checked) {
      setCheckboxes([...checkboxes, instance.getName()]);
    } else if (!e.target.checked) {
      setCheckboxes(checkboxes.filter(checkbox => checkbox !== instance.getName()));
    }
  };

  return (
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
  );
};

export default CheckboxGrid;
