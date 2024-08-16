const SessionSummary = () => {
  return (
    <div>
      <div className="self-stretch text-[rgba(255,255,255,0.9)] font-[450] text-[1rem] leading-[1.25rem] tracking-[0.0125rem] font-haas-grotesk">
        Summary
      </div>
      <section className="flex flex-col items-start px-6 py-7 mt-6 w-full rounded-lg bg-neutral-800 max-md:px-5">
        <div className="flex flex-col max-w-full text-sm w-[20.6875rem]">
          <h2 className="font-semibold tracking-wide leading-none text-yellow-300">
            Session Summary
          </h2>
          <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
            Saturday, 22 August 2024
            <br />
            by 2:00pm
          </div>
        </div>

        <div className="flex flex-col max-w-full text-sm w-[20.6875rem] mt-6">
          <h2 className="font-semibold tracking-wide leading-none text-yellow-300">
            Total length of session
          </h2>
          <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
            30mins
          </div>
        </div>

        <div className="flex flex-col max-w-full text-sm w-[20.6875rem] mt-6">
          <h2 className="font-semibold tracking-wide leading-none text-yellow-300">
            You selected:
          </h2>
          <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
            Dr. Mary-Ann Okoli
          </div>
        </div>

        <div className="flex flex-col self-stretch mt-6 w-full">
          <div className="flex flex-col max-w-full text-sm w-[20.6875rem]">
            <h2 className="font-semibold tracking-wide leading-none text-yellow-300">
              Price Summary
            </h2>
            <div className="mt-2 tracking-wide leading-none text-white text-opacity-80">
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">
                  30 minutes session
                </div>
                <div className="self-stretch my-auto w-[3.1875rem]">N5,000</div>
              </div>
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">
                  Extra 15 minutes
                </div>
                <div className="self-stretch my-auto w-[3.1875rem]">N3,000</div>
              </div>
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">8% VAT</div>
                <div className="self-stretch my-auto w-[3.1875rem]">N450</div>
              </div>
            </div>
          </div>

          <div className="w-full border border-solid border-white border-opacity-20 min-h-[0.0625rem] mt-4" />

          <div className="flex gap-10 justify-between items-center mt-3.5 w-full text-base leading-none">
            <div className="self-stretch my-auto font-semibold text-yellow-300 w-[4.8125rem]">
              Total Price
            </div>
            <div className="self-stretch my-auto font-bold tracking-wide text-white text-opacity-80 w-[3.75rem]">
              N8,450
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SessionSummary;
