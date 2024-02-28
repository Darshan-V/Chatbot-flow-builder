import React from "react";
import Layout from "../../components/Layout";
import Map from "./components/map";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className=" h-full">
        {/* <div className="bg-blue-500 text-white p-4">
          <p className="mt-2">This is a React component with Tailwind CSS.</p>
        </div> */}
        <Map />
      </div>
    </Layout>
  );
};

export default Home;
