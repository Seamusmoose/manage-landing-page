import { NavBar } from "../components/NavBar";

type Props = {
  children: string | JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
