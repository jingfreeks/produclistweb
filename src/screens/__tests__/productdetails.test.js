import { renderWithProviders } from "../../slice/testframework";
import {ProductDetails} from "../productdetails";


// Mock useRouter:
describe("Product Details ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<ProductDetails />);
    expect(container).toMatchSnapshot();
  });
});
