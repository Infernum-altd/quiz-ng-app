export interface Answer {
    id: number;
    questionId: number;
    image: String;
    text: string;
    correct: boolean;
    nextAnswerId: number;
    changed: boolean;
    deleted: boolean;
}
