export interface Player {
    userId: number;
    userScore: number;
    userName: string;
}

export interface Game {
    id: number;
    quizId: number;
    hostId: number;
    questionTimer: number;
    maxUsersNumber: number;
    players: Player[];
}
