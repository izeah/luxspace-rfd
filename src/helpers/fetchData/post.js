import { header } from "./config";

export default async function post({
  url,
  host = process.env.REACT_APP_API_HOST,
  body = {},
}) {
  const response = await fetch(`${host}${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
    body: JSON.stringify(body),
  });
  const jsonResp = await response.json();
  return jsonResp;
}
