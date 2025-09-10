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

test("submits contact form (mocked)", async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({ ok: true });
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button", { name: /send message/i });

  nameInput.value = "Test User";
  emailInput.value = "user@example.com";
  messageInput.value = "Hello there!";
  nameInput.dispatchEvent(new Event("input", { bubbles: true }));
  emailInput.dispatchEvent(new Event("input", { bubbles: true }));
  messageInput.dispatchEvent(new Event("input", { bubbles: true }));

  button.click();
  expect(global.fetch).toHaveBeenCalled();
  await screen.findByText(/message delivered/i);
  global.fetch = originalFetch;
});
