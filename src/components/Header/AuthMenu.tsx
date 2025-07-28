"use client";

import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AuthForm } from "./AuthForm";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useState } from "react";

type SelectedOption = "signup" | "login" | null;

export function AuthMenu() {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setSelectedOption(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem asChild>
            <DialogTrigger
              className="w-full"
              onClick={() => setSelectedOption("signup")}
            >
              Registro
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <DialogTrigger
              className="w-full"
              onClick={() => setSelectedOption("login")}
            >
              Iniciar sesión
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedOption && <AuthForm type={selectedOption} onClose={handleClose} />}
    </Dialog>
  );
}
