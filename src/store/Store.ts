
type UserId = string;

export interface Chat {
    userId: UserId;
    name: string;
    message: string;
    upVotes: UserId[];
}

export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats (room: string, limit: number, offset: number) {

    }

    addChats (room: string, limit: number, offset: number) {

    }

    upVote (room: string, chatId: string) {

    }
}