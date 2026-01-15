type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Postssssssss: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <><h1>Slug: {params.slug}</h1><p> Son</p></>;
}
