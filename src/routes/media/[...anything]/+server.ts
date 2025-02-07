export const GET = (async ({ platform, url }) => {
  const path = url.pathname.replace("/media/", "")
  console.log(await platform.env.MEDIA.list())
  const file = await platform.env.MEDIA.get(path)
  if (!file) {return new Response(null, { status: 404 })}
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  })
});
