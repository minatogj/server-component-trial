export const getAllItems = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/items`, {
    cache: "no-store",
  }).then((res) => res.json());

  return result.data;
};
