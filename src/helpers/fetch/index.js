export default async function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
}) {
  const response = await fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  const jsonResp = response.json();
  if (!response.ok || response.status !== 200)
    throw new Error(JSON.stringify(jsonResp));
  return await jsonResp;
}
