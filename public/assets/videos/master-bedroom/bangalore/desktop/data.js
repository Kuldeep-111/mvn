import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = __dirname; // Since you are already in the 'images' directory
const outputFilePath = path.join(__dirname, 'lottieBase64.json'); // Output JSON file

// Convert an image to Base64
async function imageToBase64(filePath) {
  const fileData = await fs.promises.readFile(filePath);
  const ext = path.extname(filePath).slice(1);
  return `data:image/${ext};base64,${fileData.toString('base64')}`;
}

// Generate Lottie JSON with Base64 images
async function generateLottieJSON(imagesDir) {
  const files = await fs.promises.readdir(imagesDir);
  const assets = [];
  const layers = [];

  for (const [index, file] of files.entries()) {
    const filePath = path.join(imagesDir, file);
    const fileExtension = path.extname(file).toLowerCase();

    if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(fileExtension)) {
      const base64Data = await imageToBase64(filePath);

      const assetId = `image_${index}`; // Fixed assetId formatting
      assets.push({
        id: assetId,
        w: 1920, // Replace with your image width
        h: 1080, // Replace with your image height
        u: "",
        p: base64Data // Embedding Base64 data directly
      });

      layers.push({
        ddd: 0,
        ind: index + 1,
        ty: 2,
        nm: `Image Layer ${index + 1}`, // Fixed string formatting for image layer name
        refId: assetId,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [960, 540, 0] }, // Adjust position
          a: { a: 0, k: [960, 540, 0] }, // Adjust anchor point
          s: { a: 0, k: [100, 100, 100] } // Adjust scale
        },
        ip: index * 10, // Image start frame
        op: (index + 1) * 10, // Image end frame
        st: index * 10, // Start time
        bm: 0
      });
    }
  }

  const lottieJSON = {
    v: "5.7.4",
    fr: 30, // Frame rate
    ip: 0,
    op: layers.length * 10, // Total frames
    w: 1920,
    h: 1080,
    assets,
    layers
  };

  await fs.promises.writeFile(outputFilePath, JSON.stringify(lottieJSON, null, 2));
  console.log(`Lottie JSON with Base64 images created: ${outputFilePath}`);
}

// Run the script
generateLottieJSON(imagesDir).catch(console.error);
