import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <Outlet/>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;


//  <div className="container mx-auto overflow-x-scroll  flex space-x-6 relative">
//         {newArrivals.map((product) => (
//           <div
//             key={product._id}
//             className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
//           >
//             <img
//               src={product.image?.url}
//               alt={product.image?.altText || product.name}
//               className="w-full h-[500px] object-cover rounded-lg"
//             />
//             <div className="absolute bottom-0  left-0 right-0  backdrop-blur-md text-white p-4 ">
//               <Link
//                 to={`/product/${product._id}`}
//                 className=" flex flex-col items-start"
//               >
//                 <h4 className="font-medium">{product.name}</h4>
//                 <p className="mt-1">${product.Price}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
      