import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
    </>
  );
}
