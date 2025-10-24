import express from "express";
import passport from 'passport';
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";

router.get("/admin", ensureAuthenticated, (req, res) => {
  (req.sessionStore as any).all((err: any, sessions: any) => {
    const formatted = Object.entries(sessions).map(([id, data]: any) => ({
      sessionID: id,
      githubID: data.passport?.user?.username,
      email: data.passport?.user?.email,
    }));

    res.render("admin", { sessions: formatted });
  });
});

router.post("/admin/revoke/:id", ensureAuthenticated, (req, res) => {
    const sessionId = req.params.id;

    (req.sessionStore as any).destroy(sessionId, (err: any) => {
        if (err) {
            console.error("Failed to destroy session:", err)
        }

        res.redirect("/admin");
    })
})

export default router;