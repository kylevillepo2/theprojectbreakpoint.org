import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Home from "./pages/Home";
import SubscribeSection from "./components/shared/SubscribeSection";

let container, root;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
  jest.restoreAllMocks();
});

test("homepage has one main heading, accurate chapter statuses and valid section targets", () => {
  act(() =>
    root.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    ),
  );
  expect(container.querySelectorAll("h1").length).toBe(1);
  expect(container.querySelector("#uci").textContent).toContain(
    "Active Chapter",
  );
  expect(container.querySelector("#ucsd").textContent).toContain(
    "Launching Soon",
  );
  for (const link of container.querySelectorAll(
    'a[href^="#"], a[href^="/#"]',
  )) {
    expect(
      container.querySelector(link.getAttribute("href").replace(/^\//, "")),
    ).not.toBeNull();
  }
  expect(container.textContent).not.toMatch(
    /scholarships|tax.deductible|501\(c\)/i,
  );
});

test("mobile menu exposes state, closes on Escape and restores trigger focus", () => {
  act(() =>
    root.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    ),
  );
  const button = container.querySelector(".menu-toggle");
  expect(button.getAttribute("aria-expanded")).toBe("false");
  act(() => button.click());
  expect(button.getAttribute("aria-expanded")).toBe("true");
  act(() =>
    button.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    ),
  );
  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(button);
});

test("subscription sends existing API payload and reports a storage failure honestly", async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Unable to save subscription" }),
    });
  act(() => root.render(<SubscribeSection />));
  const input = container.querySelector("input");
  act(() => {
    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    ).set.call(input, "parent@example.com");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await act(async () => {
    container
      .querySelector("form")
      .dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  });
  expect(fetch).toHaveBeenCalledWith(
    "/api/subscribe",
    expect.objectContaining({
      method: "POST",
      body: JSON.stringify({ email: "parent@example.com" }),
    }),
  );
  expect(container.querySelector('[role="status"]').textContent).toBe(
    "Unable to save subscription",
  );
});
