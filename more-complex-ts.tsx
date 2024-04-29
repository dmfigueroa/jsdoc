import React from "react";
import { Pet } from "./types";

const pet: Pet = {
  name: "Max",
};

const badPet: Pet = {
  name: "Tsuki",
  age: 2,
};

export async function getGitHubId(
  username: string
) {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );
  const json = (await response.json()) as {
    id: string;
  };
  return json.id;
}

interface ButtonProps {
  /**
   * @deprecated
   * This variant does nothing
   */
  variant: "primary" | "secondary" | "error";
}

function Button({ variant }: ButtonProps) {
  return (
    <button>
      I'm a button with variant {variant}
    </button>
  );
}

const usingButton = <Button variant="primary" />;

enum JSDocState {
  BeginningOfLine = 0,
  SawAsterisk = 1,
  SavingComments = 2,
}

JSDocState.BeginningOfLine;

type User = { password: string } & (
  | { type: "admin"; username: string }
  | { type: "user"; email: string }
);

const admin: User = {
  type: "admin",
  password: "123",
  username: "root",
};
const testUser: User = {
  type: "user",
  email: "test@users.com",
  password: "123",
};
