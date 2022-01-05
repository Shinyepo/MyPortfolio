import { Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface Props {
  ph?: string;
  fn: string;
  type?: string;
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DarkInput: FC<Props> = ({ ph, fn, changeEvent, type }) => (
  <Input bg="gray.600" borderColor="gray.700" color="white" placeholder={ph} name={fn} id={fn} onChange={changeEvent} type={type ?? ""} />
);
