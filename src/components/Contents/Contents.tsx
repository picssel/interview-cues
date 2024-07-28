import Markdown from "markdown-to-jsx";
import useStore from "src/store";
import { Topic } from "src/types.ts";
import { topics } from "src/constants";

import "./content.css";

function Contents() {
  const topic = useStore((state) => state.topic);
  const selected = topics.filter((item: Topic) => item.name === topic)[0];

  return (
    <div className="contents column">
      <h2 className="topic-heading">{selected?.heading}</h2>
      <Markdown>{selected?.contents?.toString()}</Markdown>
    </div>
  );
}

export default Contents;
