import * as QRCode from "qrcode";
import * as fs from "fs";

export function convertImageToBase64(
  path: string,
  typeFile: "png" | "jpg" | "jpeg"
): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const base64String = data.toString("base64");
      resolve(`data:image/${typeFile};base64,` + base64String);
    });
  });
}

// export function convertFontToDataURI(path: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (error, data) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       const base64String = data.toString("base64");
//       const fontDataURI = `data:font/truetype;charset=utf-8;base64,${base64String}`;
//       resolve(fontDataURI);
//     });
//   });
// }

export const generateQR = async (text: string) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.log("Failed to generate QR code", err);
  }
};
