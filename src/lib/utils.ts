import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function makeZIndexes(layers:string[]){
  return layers.reduce((agg:any, layerName, index) => {
  const valueName:string = `z-index-${layerName}`;
  agg[valueName] = index * 1000;

  return agg;
}, {});
}

export function isImage(imagePath:string) {
  return /\.(png|jpe?g|svg)$/i.test(imagePath)
}