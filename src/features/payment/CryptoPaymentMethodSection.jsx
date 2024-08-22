function CryptoPaymentMethodSection() {
  return (
    <section className="flex flex-col items-center px-20 py-16 rounded-lg border border-zinc-700 bg-neutral-800 max-w-[35.688rem] max-md:px-5">
      <div className="text-center max-w-[21.125rem] w-full">
        <h1 className="text-2xl font-semibold text-white text-opacity-90">
          Crypto Payment Method
        </h1>
        <p className="mt-5 text-sm font-medium text-amber-300">
          Kindly make a payment of{" "}
          <span className="font-semibold">0.00005BTC</span> to the BTC wallet
          address
        </p>
      </div>

      <div className="mt-6 text-center text-white text-opacity-90 flex flex-col items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/958ff975f89b873f7da7ee27126aadc56b6d59ece0fd4ed3f01f5fc77939189d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
          className="object-contain w-[253px] rounded-xl align-middle flex"
          alt="QR Code"
        />
        <div className="mt-3.5">OR</div>
        <div className="mt-3 flex items-center justify-between px-2 py-3.5 rounded-xl bg-stone-600 border border-neutral-400 border-opacity-70">
          <span className="text-sm font-bold">
            1WCA7kftd4gxLsKxBWz4ATBCbX5Md9mvn
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b99d60c349c49c6094c96ff97cf735cf2c7c2aaba1f24c81ffbb90fd9fe575d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
            className="w-[23px]"
            alt="Copy to clipboard icon"
          />
        </div>
      </div>

      <div className="flex justify-center mt-3 w-[2.375rem]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e0f191bb9b58eb053810dc7219865543cd0e31bbdbeb27b825c93328b71833?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
          className="w-full rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.3)]"
          alt="Payment status icon"
        />
      </div>

      <div className="mt-3 text-sm font-medium text-center text-white text-opacity-90">
        Waiting for Payment (2:30:40)
      </div>

      <button
        className="mt-7 px-3 py-2 text-sm font-medium text-yellow-300 bg-transparent border border-yellow-300 rounded w-[308px]"
        type="button"
      >
        Confirm Payment
      </button>
    </section>
  );
}

export default CryptoPaymentMethodSection;
