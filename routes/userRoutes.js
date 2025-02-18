import express from "express";
import { createUser, getUsers } from "../models/userModel.js";

const router = express.Router();

// 사용자 추가 API
router.route('/users')
  .post(async (req, res) => {
    try {
      const { name, age } = req.body;
      const result = await createUser(name, age);

      if (result.success) {
        res.status(201).json({ message: '사용자 추가 완료', userId: result.insertId });
      } else {
        console.error('Error creating user:', result.error); // 오류 로그 출력
        res.status(500).json({ message: "사용자 추가 실패", error: result.error });
      }
    } catch (error) {
      console.error('Unexpected error in POST /users:', error);
      res.status(500).json({ message: "서버 오류", error });
    }
  })
  .get(async (req, res) => {
    try {
      const result = await getUsers();
      if (result.success === false) {
        console.error('Error fetching users:', result.error); // 오류 로그 출력
      }
      console.log('Users fetched:', result); // 결과 확인
      res.status(200).json(result);
    } catch (error) {
      console.error('Unexpected error in GET /users:', error);
      res.status(500).json({ message: "서버 오류", error });
    }
  });


export default router;