// import React from "react";

// const Button = () => {
//   return <>fix this button</>;
// };

// export default Button;

// import React from "react";

// // Mendefinisikan tipe props untuk Button
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline";
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   className = "",
//   ...props
// }) => {
//   let baseStyles =
//     "px-4 py-2 font-semibold rounded-md transition duration-300 ";

//   switch (variant) {
//     case "primary":
//       baseStyles += "bg-blue-600 text-white hover:bg-blue-700";
//       break;
//     case "secondary":
//       baseStyles += "bg-gray-200 text-gray-800 hover:bg-gray-300";
//       break;
//     case "outline":
//       baseStyles += "border border-blue-600 text-blue-600 hover:bg-blue-50";
//       break;
//   }

//   // Menggabungkan baseStyles dengan className yang diberikan pengguna
//   return (
//     <button className={`${baseStyles} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// export default Button;

// src/components/ui/Button.tsx
export const Button = ({ children, variant = "primary" }) => {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
};