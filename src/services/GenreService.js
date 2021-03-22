import http from "./http";

class GenreDataService {
  getAll() {
    return http.get("/api/genres");
  }

  get(id) {
    return http.get(`/api/genres/${id}`);
  }

  create(data) {
    return http.post("/api/genres", data);
  }

  update(id, data) {
    return http.put(`/api/genres/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/genres/${id}`);
  }
}

export default new GenreDataService();