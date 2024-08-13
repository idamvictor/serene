import React from 'react';

const NavigationButton = ({ children, isNext, onClick }) => {
  const baseClasses = "flex overflow-hidden justify-center items-center px-3 py-2 text-sm font-medium tracking-normal leading-none whitespace-nowrap rounded border border-solid";
  const nextClasses = "bg-yellow-300 text-neutral-950";
  const prevClasses = "text-yellow-300 border-yellow-300 bg-white bg-opacity-0";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isNext ? nextClasses : prevClasses}`}
    >
      {!isNext && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f90ba35ec571765037184992b2643e8ef2780e65fe4af78b8f8f41ddf1553e4?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      )}
      <span className="self-stretch px-1 my-auto">{children}</span>
      {isNext && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04b25f48ec1e031f285680fa20445dbf5eb46730eb8b1aeb4eb25a34873dd2e0?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      )}
    </button>
  );
};

export default NavigationButton;