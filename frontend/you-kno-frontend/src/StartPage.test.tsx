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

test("on Start Button click expects game play screen to render", ()=>{
  //--from the tracker:
  // When I enter a name
  // And click "Start Game"
  // Then I am taken to the gameplay screen
  render(<App />);
  const playerNameFields = screen.getAllByRole("textbox");
  playerNameFields[0].innerText = "Name1";
  const startButton = screen.getByText(/Start Game/i);
  startButton.click();

  const gamePlayScreenText = screen.getByText("Game Screen");
  expect(gamePlayScreenText).toBeVisible();
})