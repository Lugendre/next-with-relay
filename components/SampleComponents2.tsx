import * as React from "react";
import { Button, Text, Grid } from "@chakra-ui/react";
import { css } from "@emotion/react";

interface IProps {
  name: string;
}

const myText = css({
  textAlign: "center",
  fontSize: "xl",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "stretch",
});

export const SampleComponent2: React.FC<IProps> = (props) => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    console.log("クリックされました");
    setCount(count + 1);
  };

  return (
    <Grid templateColumns="repeat(autofit, minmax(350px, 1fr))" gap={6}>
      <Text css={myText}> {props.name} </Text>
      <Text css={myText}> {count} </Text>
      <Button variant="solid" size="md" onClick={handleClick}>
        Add +1
      </Button>
    </Grid>
  );
};
