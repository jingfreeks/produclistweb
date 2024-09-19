import { renderWithProviders } from "../../slice/testframework";
import {Product} from "../product";
jest.mock('../../slice/producSlice',()=>({
    useGetProductQuery:()=>({
      isLoading:false,
      isSuccess:true,
      isError:false,
      data:{ids:[]}
    })
  }))
// Mock useRouter:
describe("Product Success Empty data ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<Product />);
    expect(container).toMatchSnapshot();
  });
});
