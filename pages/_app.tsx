import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const font = Montserrat({
	style: ["normal", "italic"],
	subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {


	return (
		<Provider store={store}>
		  <main className={`${font.className} dark min-h-screen`}>
        	<Component {...pageProps} />
		  </main>
		</Provider>
	);
}
