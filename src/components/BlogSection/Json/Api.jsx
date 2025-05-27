export const apiFunctions = [

    {
    title: "API Configuration",
    category: "Api",
    description: "Initial configuration including base URL, token-based authentication headers, and toast notifications.",
    codeSnippet: `import "react-toastify/dist/ReactToastify.css";

const BASE_URL =
  import.meta.env.VITE_REACT_API_URL || "https://www.example.com";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${token}\`,
  };
};`
  },
  {
    title: "apiPostLogin",
    category: "Api",
    description: "Handles user login by sending a POST request with authentication headers.",
    codeSnippet: `export const apiPostLogin = async (endpoint, body) => {
  try {
    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      try {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Request failed";
        throw new Error(errorMessage);
      } catch (e) {
        throw new Error("Request failed with status " + response.status);
      }
    }
  } catch (error) {
    console.error("API POST request failed:", error);
    throw error;
  }
};`
  },
  {
    title: "apiGet",
    category: "Api",
    description: "Fetches data with a GET request, including authentication headers and error handling with toast notifications.",
    codeSnippet: `export const apiGet = async (endpoint) => {
  try {
    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, {
      method: "GET",
      headers: getHeaders(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      const errorMessage = errorData?.message || "Request failed";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("API GET request failed:", error);
    throw error;
  }
};`
  },
  {
    title: "apiPostFormData",
    category: "Api",
    description: "Sends form data via a POST request, excluding Content-Type header for multipart data.",
    codeSnippet: `export const apiPostFormData = async (endpoint, formData) => {
  const headers = getHeaders();
  delete headers["Content-Type"];
  try {
    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, {
      method: "POST",
      headers: headers,
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      try {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Request failed";
        toast.error(errorMessage);
        throw new Error(errorMessage);
      } catch (e) {
        throw new Error("Request failed with status " + response.status);
      }
    }
  } catch (error) {
    throw error;
  }
};`
  },
  {
    title: "apiPost",
    category: "Api",
    description: "Generic POST request function for sending JSON data with authentication.",
    codeSnippet: `export const apiPost = async (endpoint, body) => {
  try {
    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || "Request failed";
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw error;
  }
};`
  },
  {
    title: "apiPostFileUpload",
    category: "Api",
    description: "Handles file uploads via POST request, with optional JSON or form data.",
    codeSnippet: `export const apiPostFileUpload = async (endpoint, body, isFileUpload = false) => {
  try {
    const headers = isFileUpload ? { Authorization: getHeaders().Authorization } : getHeaders();

    const options = {
      method: "POST",
      body: isFileUpload ? body : JSON.stringify(body),
      headers: headers,
    };

    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, options);

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      const errorMessage = errorData?.message || "An error occurred, please try again later.";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("API POST request failed:", error.message);
    throw error;
  }
};`
  },
  {
    title: "apiPatch",
    category: "Api",
    description: "Updates resources with a PATCH request, handling both JSON and text responses.",
    codeSnippet: `export const apiPatch = async (endpoint, body) => {
  try {
    const response = await fetch(\`\${BASE_URL}/\${endpoint}\`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } else {
      const errorText = await response.text();
      let errorMessage;

      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData?.message || \`Request failed with status \${response.status}\`;
      } catch {
        errorMessage = errorText || \`Request failed with status \${response.status}\`;
      }

      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("API PATCH request failed:", error.message);
    throw error;
  }
};`
  },
];
