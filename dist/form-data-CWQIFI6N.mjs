import "./chunk-BXO7ZPPU.mjs";

// src/shared/form-data.ts
import { Formidable } from "formidable";
import { readFileSync } from "fs";
var parseMultiPartFormData = async (req) => await new Promise((resolve, reject) => {
  const form = new Formidable();
  setTimeout(() => {
    reject(new Error("Form parsing timeout."));
  }, 1e4);
  form.parse(req, (err, fields, files) => {
    if (err) {
      reject(err);
      return;
    }
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      if (value?.[0]) {
        formData.append(key, value[0]);
      }
    });
    Object.entries(files).forEach(([key, fileArray]) => {
      if (fileArray && fileArray.length > 0) {
        fileArray.forEach((file) => {
          const fileContent = readFileSync(file.filepath);
          const blob = new Blob([fileContent], {
            type: file.mimetype ?? ""
          });
          formData.append(key, blob, file.originalFilename ?? "");
        });
      }
    });
    resolve(formData);
  });
});
export {
  parseMultiPartFormData
};
