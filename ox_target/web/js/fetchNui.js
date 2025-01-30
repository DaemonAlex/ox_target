export async function fetchNui(eventName, data) {
  const response = await fetch(`https://${GetParentResourceName()}/${eventName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}