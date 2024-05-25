import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import MainForm from "./components/MainForm";

function App() {
  // const { top, bottom, wholeNumber } = createFraction(5.6144);
  // return <Fraction top={top} bottom={bottom} wholeNumber={wholeNumber} />;
  return (
    <Grid placeItems="center" templateAreas={"left form right"} color="blackAlpha.700" dir="rtl">
      <GridItem id="left" w="100%" h="100%" colSpan={3} bg="gray.100" area={"left"} />
      <GridItem
        id="form"
        w="100%"
        colSpan={6}
        area={"form"}
        borderStart={"2px solid"}
        borderStartColor={"gray.300"}
        borderEnd={"2px solid lightgray"}
        borderEndColor={"gray.300"}
      >
        <MainForm />
      </GridItem>
      <GridItem id="right" w="100%" h="100%" colSpan={3} bg="gray.100" area={"right"} />
    </Grid>
  );
}

export default App;
