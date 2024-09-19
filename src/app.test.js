import { renderWithProviders } from "./slice/testframework";
import App from "./App";
jest.mock("react-router-dom", () => {
  return {
    Routes: () => jest.fn(),
    Route: () => jest.fn(),
    Link:()=>jest.fn()
  };
});
// Mock useRouter:
describe("App  ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<App />);
    expect(container).toMatchSnapshot();
  });
});
