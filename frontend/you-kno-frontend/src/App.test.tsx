import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders start button", () => {
  render(<App />);
  const startButton = screen.getByText(/Start Game/i);
  expect(startButton).toBeInTheDocument();
});

test("renders ten player name fields", () => {
  render(<App />);
  const playerNameFields = screen.getAllByRole("textbox");
  expect(playerNameFields.length).toEqual(10);
});
