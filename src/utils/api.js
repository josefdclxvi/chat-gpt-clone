import { headers, _URL, _ENDPOINT, _MODEL } from "./index";

export const getData = async (content) => {
  const payload = {
    model: _MODEL,
    messages: [
      {
        role: "user",
        content: content
      }
    ]
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload)
  };
  try {
    const response = await fetch(`${_URL}${_ENDPOINT}`, options);
    if (!response.ok) {
      const jsonData = await response.json();
      throw new Error(jsonData?.messages);
    }
    const jsonData = await response.json();
    return {
      response: jsonData.choices[0].message.content,
      status: false
    };
  } catch (error) {
    return {
      response: error?.message,
      status: true
    };
  }
};
