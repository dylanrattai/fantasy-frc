import { Paper, ThemeIcon, rem, Text } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import ParagraphBodyComponent from "./ParagraphBodyComponent";
import ParagraphTitleComponent from "./ParagraphTitleComponent";
import classes from "./ParagraphBoxComponent.module.css";

interface Props {
  title: string;
  body: string;
}

export default function ParagraphBoxComponent(props: Props) {
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
        <ParagraphBodyComponent body={props.body} />
      </Paper>
    </div>
  );
}
