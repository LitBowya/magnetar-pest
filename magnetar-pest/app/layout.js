// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Magnetar - Pest Control",
    description:
        "Magnetar provides advanced weedicides, insecticides, and biopel products for modern agriculture and household use.",
    keywords:
        "agriculture, weedicides, insecticides, biopel, post-harvest, household pests",
    authors: [{ name: "Magnetar Team" }],
};

// Roboto
const roboto = localFont({
    src: [
        {
            path: "../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
});

// Poppins
const poppins = localFont({
    src: [
        {
            path: "../public/fonts/Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
        <body className="bg-white text-gray-800 font-sans">
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
