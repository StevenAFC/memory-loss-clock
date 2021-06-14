import http from "../http-common";

class EventDataService {
  getAll() {
    return http.get(`events?secret=${process.env.REACT_APP_REALM_SECRET}`);
  }
}

export default new EventDataService();
