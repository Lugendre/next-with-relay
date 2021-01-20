import * as React from "react";
import { graphql, fetchQuery } from "react-relay";
import { SampleComponent1Fragment } from "../components/SampleComponents1";
import { SampleComponent2 } from "../components/SampleComponents2";
import { initEnvironment } from "../utils/relay";
import {
  pages_indexQuery,
  pages_indexQueryResponse,
} from "../generated/__relay_artifacts__/pages_indexQuery.graphql";
import { GetStaticProps } from "next";

const IndexPage: React.FC<pages_indexQueryResponse> = (props) => {
  if (!props?.user) return <div> Loading... </div>;
  return (
    <div>
      <SampleComponent1Fragment user={props.user} />
      <SampleComponent2 name="My Counter for TypeScript" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const environment = initEnvironment({});
  const variables = {
    userID: { id: "hoge" },
  };
  const query = graphql`
    query pages_indexQuery($userID: UserWhereUniqueInput!) {
      user(where: $userID) {
        ...SampleComponents1_user
      }
    }
  `;
  const queryProps = await fetchQuery<pages_indexQuery>(
    environment,
    query,
    variables
  );
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      // Workaround: avoid that queryProps cannot serialize JSON because user.__fragmentOwner.cacheConfig becomes undefined.
      ...JSON.parse(JSON.stringify(queryProps)),
      initialRecords,
    },
  };
};

export default IndexPage;
