import Layout from "@/Component/Shared/Layout";

function AppointmentDetails() {

  return (
    <Layout>
      <div className="flex items-center justify-center max-h-[750px] bg-neutral-900">
        <section className="flex flex-col max-w-[36.75rem] mt-10">
          <h1 className="text-2xl font-semibold text-center text-white">
            Appointment details
          </h1>
          <div className="flex flex-col items-center px-5 py-3.5 mt-6 w-full rounded-2xl border bg-neutral-800 border-zinc-700 shadow-[0.3125rem_0.5625rem_1.625rem_rgba(44,44,44,0.25)]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53d1ba899c8c4ce7d0e8091af2576aabff23964fb34a0cae8398ed5a77307c9?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
              alt=""
              className="object-contain w-[9.5rem] aspect-square"
            />
            <p className="mt-3.5 text-base font-medium text-center text-stone-300">
              The payment was successful and your appointment has been booked!
            </p>
            <section className="flex flex-col mt-10 w-full">
              <h2 className="text-sm text-center text-white font-medium">
                Here are the details of your session
              </h2>
              <div className="flex flex-col mt-4 py-5 px-5 bg-yellow-100 rounded-2xl border border-slate-500">
                <p className="font-semibold text-zinc-900">Tomorrow, April 12</p>
                <p className="mt-1 text-lime-700">
                  <time className="text-zinc-900">2:00 pm</time>{" "}
                  <span className="text-sm">WAT</span>
                </p>
              </div>
              <section className="flex flex-col px-5 pt-5 pb-8 mt-6 bg-zinc-800 border border-neutral-500 min-h-[13.75rem]">
                <h3 className="text-sm text-white font-medium">Mental Health Support with Dr. Mary-Ann Okoli</h3>
                <div className="flex flex-col mt-6 gap-2">
                  <button
                    className="flex items-center justify-center gap-1 px-5 py-3 bg-yellow-300 rounded-lg text-neutral-950"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b025a14b74b30bd25fde24bbf5ea39de7534defdc2f7afdabd72c006d6cbc33d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                      alt=""
                      className="w-6"
                    />
                    <span>Get call link</span>
                  </button>
                  <button
                    className="flex items-center justify-center gap-1 px-5 py-3 border border-yellow-300 rounded-lg text-yellow-300 bg-transparent"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf06e670dcac8663e84858528ecff41028e1d825d17e1e0abd9718226a071ec5?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                      alt=""
                      className="w-6"
                    />
                    <span>Message Dr. Mary</span>
                  </button>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
      
    </Layout>
  );
}

export default AppointmentDetails;
