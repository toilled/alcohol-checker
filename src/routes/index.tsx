import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Alcohol Checker</Title>
      <article>
        <header>Check roughly when you'll be sober</header>
        <Counter />
      </article>
    </main>
  );
}
