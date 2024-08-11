import * as React from "react";
import Image from  'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const images = require.context(`../../public/static/skills`, false, /\.(png|jpe?g|svg)$/);
const imageKeys = images.keys();
export default function ImageGallaryCarousel() {
  return (
    // <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Carousel
          id="image-gallery-carousel"
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-lg max-h-screen"
          style={{marginTop: '3.5rem', maxHeight: "89.5vh", maxWidth: '89.5vh' }} // Adjust the maximum height as needed
      
        >
          <CarouselContent>
            {
            imageKeys.map((imageKey, index) => {

                return (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image
                                key={index}
                                src={images(imageKey).default}
                                alt={`Image ${index}`}
                                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain'}}
                            />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )} )
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
  );
}
