export class Post {
    Title: string;
    Content: string;
    LoveIts: number;
    CreatedAt: Date;

    constructor(title: string, content: string, loveIts: number, createdAt: Date = new Date()) {
        this.Title = title;
        this.Content = content;
        this.LoveIts = loveIts;
        this.CreatedAt = createdAt;
    }
}