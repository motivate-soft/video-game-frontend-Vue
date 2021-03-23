import http from "./http";

class GameDataService {
  getAll() {
    return http.get("api/games");
  }

  get(id) {
    return http.get(`api/games/detail/${id}`);
  }

  create(data) {
    return http.post("api/games", data);
  }

  update(id, data) {
    return http.put(`api/games/${id}`, data);
  }

  delete(id) {
    return http.delete(`api/games/${id}`);
  }

  deleteAll() {
    return http.delete(`api/games`);
  }

  findByTitle(title) {
    return http.get(`api/games?title=${title}`);
  }

  getAssets(path) {
      return http.get(`api/games/assets?path=${path}`);
  }
}

export default new GameDataService();