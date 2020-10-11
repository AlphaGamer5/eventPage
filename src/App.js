import React from "react";
import "./styles.css";
import styled from "styled-components";
import Image from "./component/images";

const theme = {
  dark: {
    bgcol: "#01010d",
    txtcol: "#f5f5f7"
  },
  light: {
    bgcol: "#f5f5f7",
    txtcol: "#01010d"
  }
};

const Div = styled.div`
  background-color: ${(props) => theme[props.theme].bgcol};
  color: ${(props) => theme[props.theme].txtcol};
`;

export default function App() {
  return (
    <Div id="Div" theme="dark">
      Hello World
      <Image image="download.png" style={{ margin: "10px" }}>
        hello{" "}
      </Image>
      <div ClassName="centered">Centered</div>
    </Div>
  );
}
