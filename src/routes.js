import { GameDetailPage, GameListPage }  from "./components"
const routes = [
    { path: '/',  component: GameListPage , name: "home"},
    { path: '/games',  component: GameListPage , name: "list"},
    { path: '/games/:id',  component: GameDetailPage , name: "detail"},
];

export default routes;