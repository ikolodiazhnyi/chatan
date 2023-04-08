import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../Layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, [counter]);

  return (
    <div className="wrapper">
      <Htag tag="h1">{counter}</Htag>
      <Htag tag="h2">asd</Htag>
      <Htag tag="h3">asd</Htag>
      <Button
        appearance="ghost"
        arrow="down"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        button ghost
      </Button>
      <Button appearance="primary" arrow="right">
        button primary
      </Button>
      <P size="l">paragraph</P>
      <P>paragraph</P>
      <P size="s">paragraph</P>
      <Tag size="s" color="ghost">
        tagggg
      </Tag>
      <Tag size="m" color="green">
        tagggg
      </Tag>
      <Tag color="grey">tagggg</Tag>
      <Tag color="primary">tagggg</Tag>
      <Tag color="red" href="https://google.com">
        tagggg
      </Tag>
      <Rating rating={counter} isEditable setRating={setCounter} />
      {/* <ul>
        {menu.map((menu) => (
          <li key={menu._id.secondCategory}>{menu._id.secondCategory}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  //зачем пропсы? если метод не принимает пропс
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
