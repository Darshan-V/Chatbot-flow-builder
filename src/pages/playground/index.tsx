import React from "react";
import Layout from "../../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-black h-full">
        <div className="bg-blue-500 text-white p-4">
          <p className="mt-2">This is a React component with Tailwind CSS.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
