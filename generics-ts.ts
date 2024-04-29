export function fetchImage<
  T extends Record<K, string>,
  K extends {
    [K in keyof T]: T[K] extends string
      ? K
      : never;
  }[keyof T]
>(
  object: T,
  imageProperty: K
): Promise<Response> {
  return fetch(object[imageProperty]);
}
const user = {
  username: "dmfigueroa",
  profilePictureURL:
    "https://avatars.githubusercontent.com/u/102623890?v=4",
  createdAt: new Date(),
};

const image = fetchImage(user, "createdAt");

class Table<TRow extends { id: any }> {
  rows: TRow[];

  constructor(rows: TRow[]) {
    this.rows = rows;
  }

  addRow(row: TRow) {
    this.rows.push(row);
  }

  deleteRow(id: TRow["id"]) {
    this.rows = this.rows.filter(
      (r) => id !== r.id
    );
  }

  getRow(id: TRow["id"]) {
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
