import * as React from "react";
import Image from  'next/image';
import { isImage } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageGallaryCarousel({imagesDir, imagePaths}) {

  function openFullscreen(id) {
    const elem = document.querySelector(`.${id}`);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  return (
      <div className="flex flex-col items-center">
        
        <Carousel
          id="image-gallery-carousel"
          opts={{
            align: "start",
          }}
          style={{marginTop: '3.50rem', maxHeight: "89.5vh", maxWidth: '89.5vh' }} // Adjust the maximum height as needed
      
        >
         
          <CarouselContent>
            
            {
            imagePaths != undefined && imagePaths.length != 0 && imagePaths
            .map((imagePath, index) => {
                return (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <Card className="Card" style={{height: '88vh', width: '88vh'}}>
                    
                    <CardContent className={`image-card-content-${index} flex aspect-square items-center justify-center p-6 pb-0  -mb-9`}>
                            {
                              isImage(imagePath)?
                              <img
                                key={index}
                                src={imagePath}
                                alt={`Image ${index}`}
                                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain'}}
                            />
                            :
                            <video className="carousel-video" width="100%" height="100%" controls >
                              <source src={imagePath} type="video/mp4" />
                            </video>
                            }
                    </CardContent>
                    <div className="card-header pb-20 pl-5 " >
                      <button onClick={(e)=>openFullscreen(`image-card-content-${index}`)} > 
                        <svg className="hover:scale-110 duration-200" height="18px" width="18px" version="1.1" viewBox="0 0 14 14"  ><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-215.000000, -257.000000)"><g id="fullscreen" transform="translate(215.000000, 257.000000)"><path fill="#70757a" d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z" id="Shape"/></g></g></g></svg>
                      </button>
                    </div>
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
