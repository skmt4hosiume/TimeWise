import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>버스앱</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/3.3.2/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a className="text-xl font-bold" href="#">
            버스 은행 앱
          </a>
          <button
            className="block lg:hidden focus:outline-none"
            type="button"
          >
            <span className="material-icons">menu</span>
          </button>
          <div className="hidden lg:flex space-x-4">
            <a className="text-white hover:text-gray-200" href="#">
              폼
            </a>
            <a className="text-white hover:text-gray-200" href="#">
              노선 검색
            </a>
            <a className="text-white hover:text-gray-200" href="#">
              운행현황
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-center text-3xl font-bold mb-6">버스 노선 검색</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="departure"
              className="block text-gray-700 font-medium mb-2"
            >
              출발지
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md p-2"
              id="departure"
              placeholder="예: 아산역 "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="destination"
              className="block text-gray-700 font-medium mb-2"
            >
              목적지
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md p-2"
              id="destination"
              placeholder="예: 아산역"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 font-medium mb-2"
            >
              시간
            </label>
            <input
              type="time"
              className="block w-full border border-gray-300 rounded-md p-2"
              id="time"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
          >
            검색
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">운행현황</h2>
          <div className="space-y-2">
            <a
              href="#"
              className="block bg-white border border-gray-300 p-4 rounded-md hover:bg-gray-100"
            >
              천안아산역 → 선문대학교: 운행중
            </a>
            <a
              href="#"
              className="block bg-white border border-gray-300 p-4 rounded-md hover:bg-gray-100"
            >
              천안역 → 선문대학교: 운행지연
            </a>
            <a
              href="#"
              className="block bg-white border border-gray-300 p-4 rounded-md hover:bg-gray-100"
            >
              천안터미널 → 선문대학교: 운휴
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
