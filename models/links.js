import query from "../db/index.js";

export async function getAllLinks() {
  const data = await query(`SELECT * FROM links;`);
  return data.rows;
}
