import config from "../../config/environment";
import proxy from "http-proxy-middleware";
import { Router } from "express";

const router = new Router();

router.all("/*", proxy({
    target: config.aapi.url,
    changeOrigin: true,
    pathRewrite: {
        "^/2api/": "/",
        "^/engine/2api/": "/"
    },
    headers: {
        "X-Ovh-2api-Session": config.sdev.nic
    },
    secure: false,
    logLevel: "debug"
}));

export default router;
