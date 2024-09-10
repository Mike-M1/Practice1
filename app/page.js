import Image from "next/image";
import Link from "next/link"

import { redirect } from "next/navigation"

// export async function getStaticProps() {
//   return {
//     redirect: {
//       destination: "Routes/Home",
//       permanent: true,
//     },
//   }
// }

export default function Home() {
  redirect("Routes/Home")
}
// <div className="h-max">

    //   <Landing_Page/>
    // </div>