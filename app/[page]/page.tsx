import Link from "next/link";
import { Metadata } from "next";
import { request } from "@/lib/datocms";
import { PAGE_BY_SLUG_QUERY } from "@/queries/page-by-slug-query";
import { PageQuery } from "@/types/generated";

async function getPageData(slug: string): Promise<PageQuery> {
  const data = await request({
    query: PAGE_BY_SLUG_QUERY,
    variables: {
      slug: slug,
    },
  });

  return { ...(data as PageQuery) };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getPageData(params.slug);
  const title = data.page?.title;

  return {
    title: title,
    // description: description,
    // openGraph: {
    //   images: url,
    // },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);
  const slug = data.page?.slug;
  const title = data.page?.title;
  const subpage = data.page?.subpage;
  return (
    <>
      {title}
      {subpage &&
        subpage.map((subpage) => (
          <Link key={subpage.id} href={`${slug}/${subpage.slug}`}>
            {subpage.title}
          </Link>
        ))}
    </>
  );
}
