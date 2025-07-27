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

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <DialogTrigger onClick={() => setSelectedOption("signup")}>
              Registro
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DialogTrigger onClick={() => setSelectedOption("login")}>
              Iniciar sesión
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedOption && <AuthForm type={selectedOption} />}
    </Dialog>
  );
}
