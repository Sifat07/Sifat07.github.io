import * as React from "react";
import { NextPage } from "next";

const PortfolioHome: NextPage = () => {
  return <div></div>;
};

// redirect to home
export async function getServerSideProps(): Promise<any> {
  return {
    redirect: {
      destination: "/home",
      permanent: true,
    },
  };
}

export default PortfolioHome;
