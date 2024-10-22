
export type UserId = string;

export interface Chat {
    chatId: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[];
}

export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats(roomId: string, limit: number, offset: number) {

    }

    addChat(userId: UserId, name: string, roomId: string, chatId: string, message: string) {

    }

    upvote(userId: UserId,roomId: string, chatId: string) {

    }
}