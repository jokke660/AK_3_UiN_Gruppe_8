import indexStyle from "./Index.module.css";
import { Card } from "../Card/Card";
import { useLoaderData } from "react-router";
export const Index = () => {
  const data = useLoaderData();
  console.log("index data", data);
  return (
    <div className={indexStyle.div}>
      <Card />
    </div>
  );
};
