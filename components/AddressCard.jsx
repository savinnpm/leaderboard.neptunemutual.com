import Link from "next/link";

export function AddressCard() {
  return (
    <Link href={"/addres"}>
      <a>
        <div className="flex flex-col items-center rounded-3xl px-8 py-10 hover:shadow-card">
          <div className="flex items-center justify-center text-2xl font-bold rounded-full h-36 w-36 bg-blue-100 text-blue-500">
            <div>150.53K</div>
          </div>

          <h3 className="text-base font-semibold text-center mt-6">
            Black Jack
          </h3>

          <p className="mt-5 text-sm text-gray-400 w-full whitespace-pre-wrap overflow-hidden overflow-ellipsis">
            0xeC73559994D5E4Ca5a16a90a14203A2dae50b545
          </p>
        </div>
      </a>
    </Link>
  );
}
