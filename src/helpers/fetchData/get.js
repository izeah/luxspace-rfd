import { header } from "./config";

export default async function get({
  url,
  host = process.env.REACT_APP_API_HOST,
}) {
  const response = await fetch(`${host}${url}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
  });
  const jsonResp = await response.json();
  if (!response.ok || response.status > 399)
    throw new Error(JSON.stringify(jsonResp));
  return jsonResp;
}
