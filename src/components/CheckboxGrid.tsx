import { Checkbox, CheckboxGroup, FormControl, FormHelperText, SimpleGrid } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Opening from "../classes/Opening";
import { MainFormData } from "../interfaces";
import words from "../words";

interface Props {
  form: UseFormReturn<MainFormData>;
  setCheckboxes: (value: string[]) => void;
  checkboxes: string[];
  sortedOpenings: { name: string; instance: Opening }[];
}

const CheckboxGrid = ({ checkboxes, setCheckboxes, sortedOpenings, form }: Props) => {
  const { register } = form;
  const [isDoor, setIsDoor] = useState(false);
  const [isFullDoor, setIsFullDoor] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, instance: Opening) => {
    const name = instance.getName();
    if (e.target.checked) {
      setCheckboxes([...checkboxes, name]);
      if (name === words.DoorName) setIsDoor(true);
      if (name === words.FullDoorName) setIsFullDoor(true);
    } else if (!e.target.checked) {
      setCheckboxes(checkboxes.filter(checkbox => checkbox !== instance.getName()));
      if (name === words.DoorName) setIsDoor(false);
      if (name === words.FullDoorName) setIsFullDoor(false);
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
        {(isDoor || isFullDoor) && <FormHelperText color={"red"}>{words.AddCloser}</FormHelperText>}
        <SimpleGrid columns={5} spacing={3} my={2}>
          {isDoor && <Checkbox value={words.DoorCloserName}>{words.DoorCloserName}</Checkbox>}

          {isFullDoor && (
            <Checkbox value={words.FullDoorCloserName}>{words.FullDoorCloserName}</Checkbox>
          )}
        </SimpleGrid>
      </CheckboxGroup>
    </FormControl>
  );
};

export default CheckboxGrid;
