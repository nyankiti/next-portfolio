import "styles/globals.css";
import { ThemeProvider } from "next-themes";
/* components */
import Layout from "components/layouts/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
