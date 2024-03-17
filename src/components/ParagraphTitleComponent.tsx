import { Text } from "@mantine/core";
interface Props {
  title: string;
}

export default function ParagraphTitleComponent(props: Props) {
  return (
    <>
      <Text size={"xl"} fw={700} c={"rgba(0, 145, 255, 1)"}>
        {props.title}
      </Text>
    </>
  );
}
