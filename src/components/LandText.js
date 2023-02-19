const LandText = () => {
  return (
    <div className="flex-1 px-4 t-3">
      <div className="fixed my-10">
        <h2 className="text-4xl text-center mx-auto p-4 w-2/3">Hello</h2>
        <p className="border-l-2 p-3 w-5/6 mx-auto text-md my-4 ">
          To Do is a cloud-based task management application. It allows users to
          manage their tasks from a smartphone, tablet and computer.
        </p>
        <h2 className="text-4xl text-center p-4 w-2/3 mx-auto ">History</h2>
        <p className="border-l-2 p-3 w-5/6 mx-auto text-md my-4 ">
          Microsoft To Do was first launched as a preview with basic features in
          April 2017. Later more features were added including Task list sharing
          in June 2018. In September 2019, a major update to the app was
          unveiled, adopting a new user interface with a closer resemblance to
          Wunderlist. The name was also slightly updated by removing the hyphen
          from To-Do
        </p>
        <h2 className="text-4xl p-4 text-center  w-2/3 mx-auto">Install Now</h2>
        <div className="flex w-full mt-8 gap-5 justify-center">
          <button className="border-2 w-34 border-slate-700 py-3 px-16 rounded-md hover:bg-white/30 transition-all duration-500">
            Windows
          </button>
          <button className="border-2 w-34 border-slate-700 py-3 px-16 rounded-md hover:bg-white/30 transition-all duration-500">
            IOS
          </button>
          <button className="border-2 w-34 border-slate-700 py-3 px-16 rounded-md hover:bg-white/30 transition-all duration-500">
            Android
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandText;
