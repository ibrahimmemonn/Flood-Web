import Layout from "../src/Component/Layout/Layout";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/pagination";
import { JssProvider, SheetsRegistry } from "react-jss";
import Footer from "../src/Component/Footer";

export default function Home() {
  const sheets = new SheetsRegistry();
  return (
    <JssProvider registry={sheets}>
      <div>
        <title>Flood Analysis</title>
        <Layout />
        <Footer />
      </div>
    </JssProvider>
  );
}
