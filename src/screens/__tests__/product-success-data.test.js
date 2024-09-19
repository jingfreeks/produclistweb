import { renderWithProviders } from "../../slice/testframework";
import { Product } from "../product";
jest.mock('react-router-dom',()=>{
    return{
        useNavigate:()=>jest.fn(),
        Link:()=>jest.fn()
    }
})
jest.mock("../../slice/producSlice", () => ({
  useGetProductQuery: () => ({
    isLoading: false,
    isSuccess: true,
    isError: false,
    data: {
      ids: [
        "66eb86d1c55957d0d06ee9a6",
        "66eb865ac55957d0d06ee9a3",
        "66eb7b684f1c5255c3a6b37d",
        "66eb8827c55957d0d06ee9b0",
        "66eb874ac55957d0d06ee9aa",
        "66eb85f9c55957d0d06ee99f",
        "66eb788a4f1c5255c3a6b375",
        "66eb87a4c55957d0d06ee9ad",
        "66eb85d4c55957d0d06ee99c",
        "66eb77fa4f1c5255c3a6b371",
      ],
      entities: {
        "66eb77fa4f1c5255c3a6b371": {
          _id: "66eb77fa4f1c5255c3a6b371",
          title: "Whiskas",
          decription:
            "Whiskas (formerly known as Kal Kan) is a brand of cat food sold internationally. It is owned by the American company Mars.",
          category: "Cat Food",
          image:
            "https://www.petwarehouse.ph/30796-big_default/whiskas-junior-tuna-80g-cat-wet-food.jpg",
          price: "100",
          __v: 0,
        },
        "66eb788a4f1c5255c3a6b375": {
          _id: "66eb788a4f1c5255c3a6b375",
          title: "Pedigree",
          decription:
            "It's also complete & balanced nutrition with antioxidant to support your dog's immune system. The superb taste from real meat ensures pure enjoyment for him.",
          category: "Dog Food",
          image:
            "https://www.petexpress.com.ph/cdn/shop/products/10280948-Pedigree-Puppy-Beef-Egg-Loaf-with-Vegetables-Wet-Dog-Food-130g-front_800x.png?v=1655644897",
          price: "200",
          __v: 0,
        },
        "66eb7b684f1c5255c3a6b37d": {
          _id: "66eb7b684f1c5255c3a6b37d",
          title: "Black Water Perfume Black",
          decription:
            "BLACKWATER perfumes scent that last long and smells fresh get that amoy pogi in an instant with these cool products from blackwater PH.",
          category: "Perfume",
          image:
            "https://www.everbilena.com.ph/wp-content/uploads/2024/02/Dark-Pleasure-300x500px.jpg",
          price: "150",
          __v: 0,
        },
        "66eb85d4c55957d0d06ee99c": {
          _id: "66eb85d4c55957d0d06ee99c",
          title: "TOPPS Choco",
          decription:
            "Topps Sarap Choco is a compact cupcake with rich and creamy filling, thick and yummy frosting, now topped with stars sprinkles!",
          category: "Snacks",
          image:
            "https://lahatditoph.s3.ap-east-1.amazonaws.com/uploads/all/fZ47wZ1vLDhRI5Fd5GipHpwaozFqPChIGyfjeZR1.png",
          price: "20",
          __v: 0,
        },
        "66eb85f9c55957d0d06ee99f": {
          _id: "66eb85f9c55957d0d06ee99f",
          title: "Pampers Diapers",
          decription:
            "Our packs of diapers and baby wipes offer options to suit every child's needs. We also have several useful tools that will help you find the perfect diaper.",
          category: "Diapers",
          image:
            "https://lahatditoph.s3.ap-east-1.amazonaws.com/uploads/all/fZ47wZ1vLDhRI5Fd5GipHpwaozFqPChIGyfjeZR1.png",
          price: "30",
          __v: 0,
        },
        "66eb865ac55957d0d06ee9a3": {
          _id: "66eb865ac55957d0d06ee9a3",
          title: "Bench Men Jeans",
          decription:
            "Elevate your everyday look with Bench's men's jeans. Our collection offers classic denim jeans for men, from men's skinny",
          category: "Clothing",
          image:
            "https://shop.bench.com.ph/media/catalog/product/cache/63091c77f1e6f53c92e322242fb44c02/b/d/bdp0312db3_md_f_za.jpg",
          price: "150",
          __v: 0,
        },
        "66eb86d1c55957d0d06ee9a6": {
          _id: "66eb86d1c55957d0d06ee9a6",
          title: "Bavin Mini Charger",
          decription:
            "Enhance your charging experience with the BAVIN PC368 Quick & Mini Charger, featuring multi-protection and a 1-meter cable compatible with Micro, Type-C",
          category: "Gadjets",
          image:
            "https://down-ph.img.susercontent.com/file/ph-11134207-7qul9-ljgexz4zqogs0d",
          price: "15",
          __v: 0,
        },
        "66eb874ac55957d0d06ee9aa": {
          _id: "66eb874ac55957d0d06ee9aa",
          title: "Nova Snacks",
          decription:
            "Nova is a guilt free indulgence, fiber rich, multigrain snack made from corn, rice, wheat and oats coated in delicious BBQ flavor that makes you less worry to",
          category: "Snacks",
          image:
            "https://www.homeshop.ph/image/cache/catalog/Products/Snacks/Chips/Nova-Cheddar-Chips-78g-500x500-product_popup.png",
          price: "25",
          __v: 0,
        },
        "66eb87a4c55957d0d06ee9ad": {
          _id: "66eb87a4c55957d0d06ee9ad",
          title: "Sony Headset",
          decription:
            "With LinkBuds S, you're always connected to your everyday worlds. Ultra-small and light, they can be worn comfortably around the clock, keeping you in touch",
          category: "Gadjets",
          image:
            "https://www.sony.com.ph/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
          price: "5000",
          __v: 0,
        },
        "66eb8827c55957d0d06ee9b0": {
          _id: "66eb8827c55957d0d06ee9b0",
          title: "Ikea kitchen knife",
          decription:
            "A kitchen knife is any knife that is intended to be used in food preparation. While much of this work can be accomplished with a few general-purpose knives",
          category: "Kitchen",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/Cucina_012.jpg",
          price: "100",
          __v: 0,
        },
      },
    },
  }),
}));
// Mock useRouter:
describe("Product Success Empty data ", () => {
  it("renders Layout unchanged to match snapshot", () => {
    const { container } = renderWithProviders(<Product />);
    expect(container).toMatchSnapshot();
  });
});

