import { Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface Props {
  ph?: string;
  fn: string;
  type?: string;
  changeevent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DarkInput: FC<Props> = ({ ph, fn, changeevent, type }) => (
  <Input bg="gray.600" borderColor="gray.700" color="white" placeholder={ph} name={fn} id={fn} onChange={changeevent} type={type ?? ""} />
);
