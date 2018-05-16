export function getBase64(file) {
  var reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
