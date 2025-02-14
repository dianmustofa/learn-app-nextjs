// //server component
// export default async function BlogDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // console.log("data =>", params);
//   const id = (await params).id;
//   return <div>Blog Page Detail {id}</div>;
// }

// client component
"use client";

import { useParams } from "next/navigation";

export default function BlogDetail() {
  const params = useParams();
  return <div>Blog Page Detail {params.id}</div>;
}

// Search Params
// "use client";

// import { useParams, useSearchParams } from "next/navigation";

// export default function BlogDetail() {
//   const params = useParams();
//   const search = useSearchParams();
//   // const user = search.get("user");
//   const query = search.getAll("user");

//   console.log("user", query);

//   return <div>Blog Page Detail {`dynamic: ${params.id}`}</div>;
// }
