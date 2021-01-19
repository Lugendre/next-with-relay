import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { createFragmentContainer, graphql, RelayProp } from "react-relay";
import { SampleComponents1_user } from "../generated/__relay_artifacts__/SampleComponents1_user.graphql";

interface Props {
  relay: RelayProp;
  user: SampleComponents1_user;
}

export const SampleComponent1 = ({ user }: Props) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Flex alignItems="flex-start">
        <Text fontWeight="bold" fontSize="4xl">
          Hello, React! {user.name}
        </Text>
      </Flex>
    </Flex>
  );
};

export const SampleComponent1Fragment = createFragmentContainer(
  SampleComponent1,
  {
    user: graphql`
      fragment SampleComponents1_user on User {
        name
        email
      }
    `,
  }
);
