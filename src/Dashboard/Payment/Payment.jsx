import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="w-8/12 mx-auto">
       <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
       <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
       </div>
    </div>
  );
};

export default Payment;