import { cleanup, screen, fireEvent, render } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
  render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  const b = screen.queryByLabelText(/off/i);
  expect(b).toBeTruthy();

  const f = screen.getByLabelText(/off/i);
  const e = fireEvent.click(f);

  expect(e).toBeTruthy();
});
