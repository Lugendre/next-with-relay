import React from "react";
import { AppProps } from "next/app";
import { ReactRelayContext } from "react-relay";
import { useEnvironment } from "../utils/relay";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReactRelayContext.Provider>
  );
};

export default App;
