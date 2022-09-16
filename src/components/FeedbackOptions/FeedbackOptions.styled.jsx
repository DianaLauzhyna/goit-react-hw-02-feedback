import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  width: 6rem;
  padding: 1rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  background: ${(props) =>
    (props.children === "good" && "#FF69B4") ||
    (props.children === "neutral" && "#FFFF00") ||
    (props.children === "bad" && "##1E90FF")};
`;
