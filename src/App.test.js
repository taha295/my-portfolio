import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /taha ikram/i });
  expect(heading).toBeInTheDocument();
});

test("renders projects section", () => {
  render(<App />);
  const section = screen.getByRole("heading", { name: /projects/i });
  expect(section).toBeInTheDocument();
});

test("renders certifications section", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /certifications/i })
  ).toBeInTheDocument();
});
test("renders internships section", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /internships/i })
  ).toBeInTheDocument();
});
