import { Layout } from "antd";

export interface IPageProps {
  title: "Page1";
  children?: JSX.Element;
}

export const Page = (props: IPageProps) => {
  const { children } = props;
  return <Layout>{children}</Layout>;
};
export default Page;
