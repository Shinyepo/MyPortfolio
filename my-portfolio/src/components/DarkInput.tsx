import { Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface Props {
  ph?: string;
  fn: string;
  type?: string;
  changeevent: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined
}

export const DarkInput: FC<Props> = ({ ph, fn, changeevent, type, value }) => (
  <Input
    bg="gray.600"
    borderColor="gray.700"
    color="white"
    autoComplete="false"
    placeholder={ph}
    name={fn}
    id={fn}
    onChange={changeevent}
    type={type ?? ""}
    value={value}
  />
);
