const API_DOMAIN ="https://tour-du-lich.onrender.com/api/" ;

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
}

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await response.json();
  return result;
}

export const del = async (path, id) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE"
  });
  const result = await response.json();
  return result;
}

export const patch = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await response.json();
  return result;
}