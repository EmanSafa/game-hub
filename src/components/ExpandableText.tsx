import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children: text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {isExpanded ? text : text.substring(0, limit)}
      {isExpanded ? "" : "...."}
      <Button background={"blue"} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpandableText;
