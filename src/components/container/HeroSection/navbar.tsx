// src/components/container/Navbar.tsx
import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <div className="text-xl font-bold">CompanyLogo</div>
      <div className="hidden md:flex gap-8">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <Button variant="primary">Contact Us</Button>
    </nav>
  );
};
