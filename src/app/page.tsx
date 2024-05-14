/** @format */

import Image from "next/image";

type arrT = {
  sku?: string;
  brand?: string;
  model?: string;
  price?: string;
  sale?: string;
  qty?: string;
  info?: string;
  img?: string;
}[];

const url = process.env.NEXT_PUBLIC_GET_URL_SHEET;

export default async function Home() {
  const response = await fetch(url as string, { cache: "no-cache" });
  const data: arrT = await response.json();

  return (
    <main className="bg-slate-500 px-6 py-2 h-full  ">
      <header className="bg-slate-600  p-6 mb-2">Hello , MILWAUKEE tool shop.</header>
      <section className="bg-slate-400  p-6">
        {data.map((e, i) => (
          <ul key={i} className="p-1 m-1 bg-slate-300 rounded">
            {
              <li>
                <Image src={e.img as string} width={300} height={200} alt="image " />
                <p>brand:{e.brand}</p>
                <p>price:{e.price}</p>
                <p>model:{e.model}</p>
                <p>info:{e.info}</p>
              </li>
            }
          </ul>
        ))}
      </section>
      <footer className="bg-slate-600 h-20 p-4 mt-2">Footer</footer>
    </main>
  );
}
