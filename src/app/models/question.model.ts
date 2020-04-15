export interface Question {
    id: number,
    //TODO: add quiz object
    type: 'OPTION' | 'BOOLEAN' | 'ANSWER' | 'SEQUENCE',
    image: File,
    text: string,
    active: boolean
    //TODO: add language
}