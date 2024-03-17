import { Text } from "@mantine/core";
interface Props {
  body: string;
}

export default function ParagraphBodyComponent(props: Props) {
  return (
    <>
      <Text size={"md"} fw={500}>
        {props.body}
      </Text>
    </>
  );
}
