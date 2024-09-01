import Link from "next/link";
import { request } from "@/lib/datocms";
import { SUBPAGE_BY_SLUG_QUERY } from "@/queries/subpage-by-slug-query";
import { SubpageQuery } from "@/types/generated";

async function getPageData(slug: string): Promise<SubpageQuery> {
  const data = await request({
    query: SUBPAGE_BY_SLUG_QUERY,
    variables: {
      slug: slug,
    },
  });

  return { ...(data as SubpageQuery) };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);
  const title = data.subpage?.title;
  return <>{title}</>;
}
