import config from "../data/config";
import AuthService from "./AuthService";

class AnalysisService {
    static async request(topic) {
        const response = await fetch(`${config.apiURL}/request-analysis`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AuthService.accessToken}`,
            },
            body: JSON.stringify({ topic }),
        });

        return response.json();
    }

    static async getUser() {
        const response = await fetch(`${config.apiURL}/get-user-analysis`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AuthService.accessToken}`,
            },
        });

        return response.json();
    }
}

export default AnalysisService;