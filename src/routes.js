import { GameDetailPage, GameListPage, AddGamePage }  from "./components"
const routes = [
    { path: '/',  component: GameListPage , name: "home"},
    { path: '/games',  component: GameListPage , name: "list"},
    { path: '/games/detail/:id',  component: GameDetailPage , name: "detail"},
    { path: '/games/new',  component: AddGamePage , name: "detail"},
];

export default routes;