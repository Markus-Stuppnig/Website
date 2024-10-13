import { FormData } from "@/components/Contact/Contact";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  var response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set content type to JSON
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Email sent successfully");
    return true;
  }
  console.error(`Error: ${response.status} - ${response.statusText}`);
  return false;
}
