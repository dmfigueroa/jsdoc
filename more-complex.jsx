/** @typedef {import('./types').Pet} Pet */

import React from "react";

/** @type {Pet} */
const pet = {
  name: "Max",
};

/** @type {Pet} */
const badPet = {
  name: "Tsuki",
  age: 2,
};

/**
 *
 * @param {string} username
 * @returns {Promise<string>}
 */
export async function getGitHubId(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );
  const json = /** @type {{ id: string }} */ (
    await response.json()
  );
  return json.id;
}

/** @typedef {Object} ButtonProps
 * @prop {'primary' | 'secondary' | 'error'} variant
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */
function Button({ variant }) {
  return (
    <button>
      I'm a button with variant {variant}
    </button>
  );
}

/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};

JSDocState.SawAsterisk;

/**
 * @this {HTMLElement}
 * @param {string} className
 */
function toggleClassName(className) {
  this.classList.toggle(className);
}

const admin = {
  type: "admin",
  password: "123",
  username: "root",
};
const testUser = {
  type: "user",
  email: "test@users.com",
  password: "123",
};
