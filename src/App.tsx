// import Hero from "./components/container/HeroSection";

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl">code here</h1>
//       {/* example */}
//       <Hero />
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import Header from './components/container/Header';
// import Footer from './components/container/Footer';
// // Import komponen container lain sesuai kebutuhan (misalnya: HeroSection, CardGrid)

// const App: React.FC = () => {
//   return (
//     // Main layout
//     <div className="min-h-screen bg-gray-50 flex flex-col">

//       {/* Bagian Header */}
//       <Header />

//       {/* Bagian Konten Utama */}
//       <main className="flex-grow">

//         {/* Container Utama: Membatasi lebar konten di tengah halaman */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//           {/* Contoh Struktur Konten */}
//           <section id="hero" className="text-center py-10">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
//               Transforming Figma Designs
//             </h1>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               This is where your main content (Hero Section) will go, following the Figma design closely.
//             </p>
//           </section>

//           {/* Contoh: Grid Layout Responsif */}
//           <section id="features" className="mt-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
//             {/* Tailwind Grid: 1 kolom di layar kecil, 3 kolom di layar sedang ke atas */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Di sini Anda akan menggunakan komponen Card/FeatureCard dari container/ */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">Feature 1</div>
//               <div className="bg-white p-6 rounded-lg shadow-lg">Feature 2</div>
//               <div className="bg-white p-6 rounded-lg shadow-lg">Feature 3</div>
//             </div>
//           </section>

//         </div>
//       </main>

//       {/* Bagian Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;

// src/App.tsx
import { Navbar } from "./components/container/Navbar";
import { Hero } from "./components/container/Hero";
// ... import lainnya

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Section lainnya */}
    </main>
  );
}

export default App;
