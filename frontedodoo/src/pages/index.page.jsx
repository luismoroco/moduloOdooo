import Features from "../components/Features";
import Card from '../components/Card';
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Features/>
      <Card/>
        <div className="max-w-9xl mx-auto py-6 sm:px-6 lg:px-8">
          <Footer/>
        </div>
    </>
  );
}