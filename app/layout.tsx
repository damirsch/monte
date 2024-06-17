import type { Metadata } from "next";
import localFont from "next/font/local";
const Neue = localFont({ src: [
	{
		path: '../fonts/NeueMontreal-Regular.otf',
		weight: '400'
	},
	{
		path: '../fonts/NeueMontreal-Bold.otf',
		weight: '700',
	}
] })
import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Monte | Real Estate",
	description: "Real Estate in Dubai: Ideal for Living and Investing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={Neue.className}>{children}</body>
		</html>
	);
}
