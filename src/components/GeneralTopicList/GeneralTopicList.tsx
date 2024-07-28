import useStore from "src/store";
import { Topic } from "src/types.ts";

import "./generalTopicList.css";

function GeneralTopicList(topic: Topic) {
  const updateTopic = useStore((state) => state.updateTopic);
  const handleTopicSelection = (event: React.MouseEvent<HTMLElement>) =>
    updateTopic(event?.currentTarget?.dataset.topic ?? "yourself");

  return (
    <li
      className="topic-list"
      key={topic.name}
      onClick={handleTopicSelection}
      data-topic={topic.name}
      title={topic.displayName}
    >
      <span className="description">{topic.displayName}</span>
    </li>
  );
}

export default GeneralTopicList;
