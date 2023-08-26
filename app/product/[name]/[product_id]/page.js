// import ProductHeader from "@/components/layout/ProductDetails/Header";
// import Header from "@/components/layout/Home/Header";
// import ProductDetails from "@/components/layout/ProductDetails/ProductDetails";
// import FooterDetails from "@/components/layout/ProductDetails/FooterDetails";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const ProductHeader = dynamic(
  () => import("@/components/layout/ProductDetails/ProductHeader"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const FooterDetails = dynamic(
  () => import("@/components/layout/ProductDetails/FooterDetails"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const ProductDetails = dynamic(
  () => import("@/components/layout/ProductDetails/ProductDetails"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const SimilarItems = dynamic(
  () => import("@/components/layout/ProductDetails/SimilarItrms"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const ProductPage = ({ params, searchParams }) => {
  // const title = params.name;
  return (
    <div className="container margin_top">
      {/* <ProductHeader /> */}
      <div className={"cramp"}>
        <Link href={"/"}>Home</Link>
        <span>
          <MdArrowForwardIos />
        </span>
        <Link href={`/store/men`}>Category Name </Link>
        <span>
          <MdArrowForwardIos />
        </span>
        <Link href={`/store/men`} className={"cramp_active"}>
          Luiz Vitton Laca Suit
        </Link>
      </div>
      <div className="grid">
        <div className="col-12 md:col-6">
          <ProductHeader />
        </div>
        <div className="col-12 md:col-6">
          <ProductDetails />
        </div>
      </div>
      <hr className="margin_top" />
      <FooterDetails />
      <h2 className="main_two mt-5 ">Similar Items You Might Like </h2>
      <SimilarItems />
    </div>
  );
};

export default ProductPage;

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.product_id;
  const title = params.name;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: title,
    description: `Min Descrtiption ${id} ${title}`,
    openGraph: {
      title: title,
      description: `og Descrtiption ${id} ${title}`,
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}
