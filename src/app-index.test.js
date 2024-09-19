import { renderWithProviders } from "./slice/testframework";
import App from "./index";
jest.mock("react-router-dom", () => {
  return {
    Routes: () => jest.fn(),
    Route: () => jest.fn(),
    Link:()=>jest.fn()
  };
});
jest.mock('react-dom/client',()=>{
    return{
        createRoot:()=>{
            return{
                render:jest.fn(),
                unmount:jest.fn()
            }
        }
    }
})
// Mock useRouter:
describe("App index ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<App />);
    expect(container).toMatchSnapshot();
  });
});
