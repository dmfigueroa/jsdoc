/**
 * @template {Record<K, string>} T
 * @template {{[K in keyof T]: T[K] extends string ? K : never}[keyof T]} K
 * @param {T} object
 * @param {K} imageProperty
 */
export function fetchImage(
  object,
  imageProperty
) {
  return fetch(object[imageProperty]);
}

const user = {
  username: "dmfigueroa",
  profilePictureURL:
    "https://avatars.githubusercontent.com/u/102623890?v=4",
  createdAt: new Date(),
};

const image = fetchImage(user, "createdAt");

/**
 * @template {{ id: any }} TRow
 */
class Table {
  rows;

  /**
   * @param {TRow[]} rows
   */
  constructor(rows) {
    this.rows = rows;
  }

  /**
   * @param {TRow} row
   */
  addRow(row) {
    this.rows.push(row);
  }

  /**
   * @param {TRow["id"]} id
   */
  deleteRow(id) {
    this.rows = this.rows.filter(
      (r) => id !== r.id
    );
  }

  /**
   *
   * @param {TRow["id"]} id
   */
  getRow(id) {
    return this.rows.find((r) => r.id === id);
  }
}

const rows = [
  { id: 1, name: "Uno" },
  { id: 2, name: "Dos" },
  { id: 3, name: "Tres" },
  { id: 4, name: "Cuatro" },
  { id: 5, name: "Cinco" },
];

const table = new Table(rows);
console.log(table.getRow(4));
console.log(table.getRow("test"));
table.addRow({ id: 6, name: "Seis" });
