import { useState } from "react";
import { sortArrByKey } from "src/utils";
import { Topic } from "src/types.ts";
import { topics, currentCompany } from "src/constants";
import GeneralTopicList from "src/components/GeneralTopicList";

import "./generalTopics.css";

function GeneralTopics({ section = "" }) {
  const [active, setActive] = useState(section === currentCompany);
  const filteredBySection = topics.filter((topic) => topic.section === section);
  const topicSorted = sortArrByKey(filteredBySection, "displayName");
  const handleSectionHeight = () => setActive(!active);

  return (
    <div className="general-topics">
      <p
        className={`topic-heading ${active ? "active" : ""}`}
        onClick={handleSectionHeight}
      >
        {topicSorted[0].section}
      </p>
      <ul className={`indices-list ${active ? "active" : ""}`}>
        {topicSorted.map((topic: Topic) => (
          <GeneralTopicList key={topic.name} {...topic} />
        ))}
      </ul>
    </div>
  );
}

export default GeneralTopics;
