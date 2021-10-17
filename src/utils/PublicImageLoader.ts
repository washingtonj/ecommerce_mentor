export default function PublicImageLoader(imagePath: string): string {
  return `${process.env.PUBLIC_URL}${imagePath}`
}

