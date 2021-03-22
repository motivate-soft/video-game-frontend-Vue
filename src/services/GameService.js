import http from "./http";

class GameDataService {
  getAll() {
    return http.get("/api/games");
  }

  get(id) {
    return http.get(`/api/games/${id}`);
  }

  create(data) {
    return http.post("/api/games", data);
  }

  update(id, data) {
    return http.put(`/api/games/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/games/${id}`);
  }

  deleteAll() {
    return http.delete(`/api/games`);
  }

  findByTitle(title) {
    return http.get(`/api/games?title=${title}`);
  }
}

export default new GameDataService();