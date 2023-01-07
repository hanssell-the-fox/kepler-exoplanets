import { ComponentChildren } from "preact";

type LinkProps = {
  to: string;
  children: ComponentChildren;
};

export default function LinkButton(props: LinkProps) {
  return (
    <a
      href={props.to}
      class="font-bold my-1 hover:text-green-200"
    >
      [&nbsp;{props.children}&nbsp;]
    </a>
  );
}
