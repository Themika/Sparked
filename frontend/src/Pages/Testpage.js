import TinyCard from "../Components/TinyCard";

const Testpage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page</p>
      <TinyCard />
      <style>
        {`
                    body {
                        background-color: white;
                    }
                `}
      </style>
    </div>
  );
};

export default Testpage;
