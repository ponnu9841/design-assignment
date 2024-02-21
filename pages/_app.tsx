import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({ Component, pageProps }: AppProps) {


	return (
		<Provider store={store}>
		  <main className={`dark min-h-screen`}>
        	<Component {...pageProps} />
		  </main>
		</Provider>
	);
}
