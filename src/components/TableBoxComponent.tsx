import { Paper } from "@mantine/core";
import ScoringTableComponent from "./ScoringTableComponent";
import ParagraphTitleComponent from "./ParagraphTitleComponent";
import classes from "./ParagraphBoxComponent.module.css";

interface Props {
  title: string;
}

export default function TableBoxComponent(props: Props) {
  return (
    <div
      style={{
        paddingTop: "30px",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Paper withBorder radius="10px" className={classes.card}>
        <ParagraphTitleComponent title={props.title} />
        <ScoringTableComponent />
      </Paper>
    </div>
  );
}
