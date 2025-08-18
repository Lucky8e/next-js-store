import { FiAlignLeft } from "react-icons/fi";
import { links } from "@/utils/Links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

function LinksDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <FiAlignLeft className="w-12 h-12" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-43" align="center" sideOffset={10}>
        {links.map((link) => {
          const { href, label } = link;
          return (
            <DropdownMenuItem key={href} asChild>
              <Link href={href} className="capitalize w-full">
                {label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropDown;
