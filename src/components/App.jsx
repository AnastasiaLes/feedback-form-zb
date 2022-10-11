import FeedbackForm from "./form/form";
import Layout from "./layout/layout";
import Footer from "./footer/footer";

export const App = () => {
  return (
    <div>
      <Layout/>
      <FeedbackForm style={{ display: 'flex', alignItems: 'center'}}/>
      <Footer/>
    </div>
  );
};
