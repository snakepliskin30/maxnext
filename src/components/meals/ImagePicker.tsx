'use client';

import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const file = e?.target?.files[0];

      if (!file) {
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className='picker mt-4'>
      {/* <label htmlFor={name}>{label}</label> */}
      <div className='flex items-start gap-[1.5rem] mb-4'>
        <div className='w-[10rem] h-[10rem] border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative'>
          {!pickedImage && <p className='m-0 p-4'>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt='image-selected-by-user'
              fill
              className='object-cover'
            />
          )}
        </div>
        <input
          ref={ref}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          className='hidden'
          onChange={handleImageChange}
          required
        />
        <button
          className='border-0 py-2 px-6 bg-[#a4abb9] rounded-[2px] cursor-pointer font-montserrat hover:bg-[#b3b9c6] focus::bg-[#b3b9c6] text-black'
          type='button'
          onClick={handleClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
