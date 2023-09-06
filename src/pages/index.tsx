import { useEffect } from "react";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about");
  }, [router]);

  return <div style={{ border: "2px solid orange" }}>it is index page</div>;
};

export default Index;
