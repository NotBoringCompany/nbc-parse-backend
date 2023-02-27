"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDashboard = void 0;
//@ts-nocheck
const parse_dashboard_1 = __importDefault(require("parse-dashboard"));
const config_1 = __importDefault(require("./config"));
exports.parseDashboard = new parse_dashboard_1.default({
    apps: [
        {
            appName: 'Not Boring Company',
            serverURL: config_1.default.SERVER_URL,
            appId: config_1.default.APPLICATION_ID,
            masterKey: config_1.default.MASTER_KEY,
        },
    ],
    users: [
        {
            user: config_1.default.DASHBOARD_USER,
            pass: config_1.default.DASHBOARD_PASSWORD,
        },
    ],
}, { allowInsecureHTTP: true });
//# sourceMappingURL=parseDashboard.js.map