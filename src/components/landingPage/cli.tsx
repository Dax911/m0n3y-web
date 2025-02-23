/** @jsxImportSource react */
import Typist from "react-typist";

export default function CodeCard() {
  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-lg sm:w-[600px]"
      aria-hidden="true"
    >
      <div
        className="inverse-toggle h-[300px] overflow-hidden rounded-lg border border-t3-purple-200/20 bg-white/10 px-1 pb-6 pt-4
         font-mono text-[10px] leading-normal text-t3-purple-50 subpixel-antialiased shadow-lg transition-all sm:h-[400px] sm:px-2 sm:text-xs md:px-5"
      >
        <div className="top mb-2 flex">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
          solana transfer --from YOUR_WALLET_KEYPAIR --to
          ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump --amount AMOUNT_IN_SOL
          --allow-unfunded-recipient
          <Typist.Delay ms={1250} />
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={11300}
          avgTypingDelay={-10000}
          className="mt-8 translate-y-[-1.8rem] text-green-400 md:translate-y-[-2.0rem]"
        >
          Good choice! Get that BAGG!
          <br />
          <Typist.Delay ms={1000} />
        </Typist>
        <Typist
          className="leading-1 translate-y-[-0.2rem] bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text font-mono text-[7px] text-transparent sm:text-sm md:translate-y-[-0.4rem]"
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <Typist.Delay ms={2000} />
        </Typist>
      </div>
    </div>
  );
}
