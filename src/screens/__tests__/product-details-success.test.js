import { renderWithProviders } from "../../slice/testframework";
import {ProductDetails} from "../productdetails";


jest.mock("../../slice/producSlice", () => ({
    useGetProdDetailsQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: {
        ids: [
        ],
      },
    }),
  }));
// Mock useRouter:
describe("Product Details ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<ProductDetails />);
    expect(container).toMatchSnapshot();
  });
});
