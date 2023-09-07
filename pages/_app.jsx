import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Index Compare</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
