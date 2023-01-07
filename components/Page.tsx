import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type PageProps = {
  title: string;
  children: ComponentChildren;
};

export default function Page(props: PageProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Background image */}
      <div class="w-full bg-image-custom bg-fixed bg-cover">
        {/* Page content */}
        <div class="flex flex-col justify-between h-full min-h-screen p-3 text-gray-50 font-monospaced bg-black-semitransparent">
          <Header />
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  );
}
