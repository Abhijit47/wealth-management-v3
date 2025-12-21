import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

export async function loadLocalImagePlaceholder(imageSrc: string) {
  try {
    // const path = '/path-to-your-image.jpg';

    const file = await fs.readFile(imageSrc);

    const {
      base64,
      // color,
      // css,
      // metadata,
      // pixels,
      // svg
    } = await getPlaiceholder(file);

    console.log(base64);

    return base64;
  } catch (err) {
    throw new Error(
      'Failed to load image placeholder: ' + (err as Error).message
    );
  }
}

export async function loadRemoteImagePlaceholder(imageSrc: string) {
  try {
    // const src = 'https://images.unsplash.com/photo-1621961458348-f013d219b50c';

    const buffer = await fetch(imageSrc).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);

    return base64;
  } catch (err) {
    throw new Error(
      'Failed to load image placeholder: ' + (err as Error).message
    );
  }
}

export async function getLocalImage(src: string) {
  const buffer = await fs.readFile(path.join('./public', src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}

// Usage
// const { base64, img } = await getLocalImage('/assets/image/example.jpg');

export async function getRemoteImage(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}

// Usage
// const { base64, img } = await getRemoteImage(
//   "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
// );
