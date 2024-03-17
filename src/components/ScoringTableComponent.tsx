import { ScrollArea, Table } from "@mantine/core";
import classes from "./TableComponent.module.css";
import { useState } from "react";
import cx from "clsx";
import { POINT_VALUES } from "../../Constants";

const data = [
  {
    reason: "Won Event",
    points: String(POINT_VALUES.EVENT_WINNER),
    notes: "",
  },
  {
    reason: "Event Finalist",
    points: String(POINT_VALUES.EVENT_FINALIST),
    notes: "",
  },
  {
    reason: "Undefeated",
    points: String(POINT_VALUES.QUALS_UNDEFEATED),
    notes: "In qualifiers",
  },
  {
    reason: "89-99% Win/Loss",
    points: String(POINT_VALUES.QUALS_WIN_LOSS_85_99),
    notes: "In qualifiers",
  },
  {
    reason: "70-84% Win/Loss",
    points: String(POINT_VALUES.QUALS_WIN_LOSS_70_84),
    notes: "In qualifiers",
  },
  {
    reason: "3.5-4 RP Avg.",
    points: String(POINT_VALUES.RP_AVG_35_40),
    notes: "",
  },
  {
    reason: "3-3.4 RP Avg.",
    points: String(POINT_VALUES.RP_AVG_30_34),
    notes: "",
  },
  {
    reason: "2-2.9 RP Avg.",
    points: String(POINT_VALUES.RP_AVG_20_29),
    notes: "",
  },
  {
    reason: "In Einstein",
    points: String(POINT_VALUES.IN_EINSTEIN),
    notes: "Qualify for Einstein at worlds",
  },
  {
    reason: "Einstein Finalist",
    points: String(POINT_VALUES.EINSTEIN_FINALIST),
    notes: "",
  },
  {
    reason: "World Champs",
    points: String(POINT_VALUES.WORLD_CHAMPS),
    notes: "Won Einstein",
  },
];

export default function ScoringTableComponent() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.reason}>
      <Table.Td>{row.reason}</Table.Td>
      <Table.Td>{row.points}</Table.Td>
      <Table.Td>{row.notes}</Table.Td>
    </Table.Tr>
  ));
  return (
    <ScrollArea
      h={200}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th>Reason</Table.Th>
            <Table.Th>Points Earned</Table.Th>
            <Table.Th>Notes</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
