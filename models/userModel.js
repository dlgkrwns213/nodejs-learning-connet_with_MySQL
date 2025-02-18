import db from "../config/db.js"

async function createUser(name, age) {
  try {
    const [result] = await db.execute(
      'INSERT INTO users (name, age) VALUES (?, ?)', [name, age]
    );
    return { success: true, insertId: result.insertId };
  } catch (error) {
    return { success: false, error };
  }
}

async function getUsers() {
  try {
    const [rows] = await db.query(
      'SELECT * from users'
    );
    return rows;
  } catch (error) {
    return { success: false, error };
  }
}

export {createUser, getUsers};