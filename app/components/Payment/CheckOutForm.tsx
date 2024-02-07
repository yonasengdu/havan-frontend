import logo from "../../../public/assests/havanlogo.png"
import Image from "next/image";
type Props = {
  setOpen: any;
  data: any;
  user:any;
  refetch:any;
};



const CheckOutForm = ({ data,user,refetch }: Props) => {


  return <div id={"payment-form"}>

    <div className="flex justify-center">
      <Image src={logo} alt="logo" className="w-32 h-[73px]"/>
    </div>

<ol className="m-8 relative border-s border-gray-200 dark:border-gray-700">                  
   
<li className="ms-6 mb-8">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Thanks for choosing this course</h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">This course is exceptional—expect significant benefits and a rewarding experience. Join us for success!</p>
    </li>
   
    <li className="mb-8 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Go tot our TelegramBot to Pay! </h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time> */}
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Secure your spot by heading to Telegram and completing payment. Get ready for learning journey!</p>
        <a target="_blank" href="https://t.me/Havanacademy_bot" className="font-bold w-[90%] inline-flex items-center px-4 py-2 text-sm font-medium text-white h-10 bg-blue-500 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg> Telegram </a>
    </li>
    <li className="mb-8 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Wait for Approval</h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get ready to enjoy the course once approval is confirmed!</p>
    </li>

</ol>





  </div>
}

export default CheckOutForm;







// import { styles } from "@/app/styles/style";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import { useCreateOrderMutation } from "@/redux/features/orders/ordersApi";
// import Image from "next/image";
// import logo from "../../../public/assests/havanlogo.png"
// import {
//   LinkAuthenticationElement,
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// // import { redirect } from "next/navigation";
// import React, { useEffect, useState } from "react";
// // import { toast } from "react-hot-toast";
// // import socketIO from "socket.io-client";
// // const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
// // const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

// type Props = {
//   setOpen: any;
//   data: any;
//   user:any;
//   refetch:any;
// };

// const CheckOutForm = ({ data,user,refetch }: Props) => {
//   // const stripe = useStripe();
//   // const elements = useElements();
//   const [message, setMessage] = useState<any>("");
//   // const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     // e.preventDefault();
//     // if (!stripe || !elements) {
//     //   return;
//     // }
//     // setIsLoading(true);
//     // const { error, paymentIntent } = await stripe.confirmPayment({
//     //   elements,
//     //   redirect: "if_required",
//     // });
//     // if (error) {
//     //   setMessage(error.message);
//     //   setIsLoading(false);
//     // } else if (paymentIntent && paymentIntent.status === "succeeded") {
//     //   setIsLoading(false);
//     //   createOrder({ courseId: data._id, payment_info: paymentIntent });
//     // }
//   };

//   // useEffect(() => {
//   //  if(orderData){
//   //   refetch();
//   //   socketId.emit("notification", {
//   //      title: "New Order",
//   //      message: `You have a new order from ${data.name}`,
//   //      userId: user._id,
//   //   });
//   //   redirect(`/course-access/${data._id}`);
//   //  }
//   //  if(error){
//   //   if ("data" in error) {
//   //       const errorMessage = error as any;
//   //       toast.error(errorMessage.data.message);
//   //     }
//   //  }
//   // }, [orderData,error])
  

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>

//       <Image src={logo} className="w-[100px] h-[60px]" alt={"logo"}/>
 
 
 
 
 
 
//       {/* <LinkAuthenticationElement id="link-authentication-element" /> */}
//       {/* <PaymentElement id="payment-element" /> */}
//       {/* <button disabled={isLoading || !stripe || !elements} id="submit">
//         <span id="button-text" className={`${styles.button} mt-2 !h-[35px]`}>
//           {isLoading ? "Paying..." : "Pay now"}
//         </span>
//       </button> */}
//       {/* Show any error or success messages */}
//       {/* {message && (
//         <div id="payment-message" className="text-[red] font-Poppins pt-2">
//           {message}
//         </div>
//       )} */}
//     </form>
//   );
// };

// export default CheckOutForm;
