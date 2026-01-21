import logo from "../../../src/assets/No-Image.webp";

const CroppedImageUrl = (url: string) => {
  if (!url) return logo; //provide empty string if image is not available
  const target = 'media/' // target path used to inser crop parameter
  const index = url.indexOf(target) + target.length;  // Find the index right after 'media/' in the URL
  
  return(
     url.slice(0, index) + 'crop/600/400/' + url.slice(index)
  );  // Insert crop dimensions into the URL and return the new URL
}

export default CroppedImageUrl;