"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import { User, Gamepad2, Server } from "lucide-react";

export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="py-5 px-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <User />
            <a href="/">Account</a>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center gap-3">
            <Gamepad2 />
            <a href="/">Games</a>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center gap-3">
            <Server />
            <a href="/">Servers</a>
          </div>
          <Separator className="my-4" />
        </div>
        <SheetFooter>
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
