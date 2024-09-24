import { FormData } from "@/components/Contact/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status == 200) {
        console.log("Email sent successfully");
        return true;
      } else {
        console.log("Email failed to send");
        return false;
      }
    })
    .catch((err) => {
      console.log("Email failed to send");
      return false;
    });
  return false;
}
