import { renderWithProviders } from "../../slice/testframework";
import {Product} from "../product";


// Mock useRouter:
describe("Product ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<Product />);
    expect(container).toMatchSnapshot();
  });
});
