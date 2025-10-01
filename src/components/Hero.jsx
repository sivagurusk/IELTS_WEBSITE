export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-28 bg-gradient-to-r from-dark to-gray-900">
      <div className="max-w-xl">
        <h2 className="text-5xl font-extrabold leading-tight">
          A Smarter Way <br /> to <span className="text-neonPink">Crack IELTS</span>
        </h2>
        <p className="text-gray-300 mt-6 text-lg">
          Join our expert trainers and AI-powered practice tools to achieve your dream IELTS Band Score.
        </p>
        <button className="mt-8 px-8 py-3 bg-neonBlue text-dark font-bold rounded-lg hover:bg-neonPink hover:text-white transition">
          Get Started
        </button>
      </div>
      <img
        src="https://img.freepik.com/free-vector/exam-concept-illustration_114360-4887.jpg"
        alt="Hero Banner"
        className="w-full md:w-1/2 mt-10 md:mt-0"
      />
    </section>
  );
}
