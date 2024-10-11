import Container from "./Container";

const CtaSection = () => {
  return (
    <Container>
      <section className="pb-12">
        <div className=" ">
          <div className="sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100  flex flex-col space-y-6 relative">
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>
            <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-8 mx-auto max-w-2xl">
              <h1 className="font-bold text-gray-900  text-4xl">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 ">
                  Travel Journey
                </span>{" "}
                Starts With Here
              </h1>
              <p className="text-gray-700 text-center max-w-xl">
                Sign up and we'll send the best deals to you
              </p>
              <form
                // action
                className="w-full flex flex-col sm:items-center sm:flex-row gap-y-3 gap-x-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="py-3 px-5 rounded-lg text-gray-800  bg-gray-200  outline-none w-full placeholder:text-gray-600 "
                />
                <button className="py-3 rounded-lg px-6 bg-blue-600 dark:bg-blue-500 text-white font-medium text-base w-full sm:w-max flex justify-center">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default CtaSection;
